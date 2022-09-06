import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGOUT_USER } from "../../../constants/actionType";

export default () => (dispatch) => {
  AsyncStorage.removeItem("token");
  AsyncStorage.removeItem("refresh_token");
  AsyncStorage.removeItem("username");
  AsyncStorage.removeItem("email");

  dispatch({
    type: LOGOUT_USER,
  });
};
