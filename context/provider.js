import React, {createContext, useReducer} from 'react';
import authInitState from './initialState/authInitState';
import auth from './reducer/auth';
export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitState);
 
  return (
    <GlobalContext.Provider
      value={{authState, authDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;