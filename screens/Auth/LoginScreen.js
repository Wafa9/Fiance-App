import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {useContext} from 'react';
import LoginComponent from "../../components/login/loginComponent";
import loginUser from "../../context/actions/auth/loginUser";
import {GlobalContext} from "../../context/provider";


const LoginScreen = (props) => {

  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const {params} = useRoute();

  React.useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true);
      setForm({...form, email: params.data.email});
    }
  }, [params]);

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.email && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
  
 
};

export default LoginScreen;
