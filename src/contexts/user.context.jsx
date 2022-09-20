import { createContext ,useReducer } from "react";

// import { useNavigate } from "react-router-dom";

// import {
//   onAuthStateChangeHandler,
//   createUserDocumentFromAuth,
// } from "../utilities/firebase/firebase.utility";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  // const value = { currentUser, setCurrentUser };

  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  // const setCurrentUser = (user) =>
  //   dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangeHandler((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     setCurrentUser(user);
  //   });

  //   return unsubscribe;
  // }, []);

  console.log(currentUser);

  const value = {
    currentUser,
  };

  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/");
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentUser, setCurrentUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
