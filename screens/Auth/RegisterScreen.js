
import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {useContext} from 'react';
import {useState} from 'react';
import RegisterComponent from '../../components/Registration';
import register, {clearAuthState } from '../../context/actions/auth/register';
import {GlobalContext} from "../../context/provider";

const RegisterScreen = (props) => {


  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 8) {
          setErrors((prev) => {
            return {...prev, [name]: 'This field needs min 8 characters'};
          });
        } else {
          setErrors((prev) => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors((prev) => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors((prev) => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.username) {
      setErrors((prev) => {
        return {...prev, username: 'Please add a username'};
      });
    }
    
    if (!form.email) {
      setErrors((prev) => {
        return {...prev, email: 'Please add a email'};
      });
    }
    if (!form.password) {
      setErrors((prev) => {
        return {...prev, password: 'Please add a password'};
      });
    }

    if (
      Object.values(form).length === 3 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
      register(form)(authDispatch)((response) => {
        navigate("EmailSent");
      });
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
 

  
};

export default RegisterScreen;
