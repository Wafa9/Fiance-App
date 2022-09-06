
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionType';
import axiosInstance from '../../../helpers/axiosInterceptor';

export default ({password, email}) => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  axiosInstance
    .post('auth/login/', {
      password,
      email,
    })
    .then(async(res) => {
        let len = res.data.tokens
        let tokenArr = len.split(',')
        let ref=tokenArr[0]
        let acc=tokenArr[1]
        let refresh= ref.slice(13,242)
        let access= acc.slice(12,240)
        AsyncStorage.setItem('token', access);
        AsyncStorage.setItem('refresh_token', refresh);
        AsyncStorage.setItem('username',res.data.username);
        AsyncStorage.setItem('email',res.data.email)  

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try agin'},
      });
    });
};