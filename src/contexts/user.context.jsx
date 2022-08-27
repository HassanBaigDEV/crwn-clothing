import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  onAuthStateChangeHandler,
  createUserDocumentFromAuth,
} from "../utilities/firebase/firebase.utility";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeHandler((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, setCurrentUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
