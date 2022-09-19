import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation-bar/navigation-bar.component";
import SignIn from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { setCurrentUser } from './store/user/userSlice'
import { setCategoriesMap } from "./store/categories/categoriesSlice";

import {
  onAuthStateChangeHandler,
  createUserDocumentFromAuth,
  getCategoriesAndDocuments,
} from "./utilities/firebase/firebase.utility";

const App = () => {
  
  const dispatch = useDispatch();
   useEffect(() => {
     const unsubscribe = onAuthStateChangeHandler((user) => {
       if (user) {
         createUserDocumentFromAuth(user);
       }
       dispatch(setCurrentUser(user));
     });

     return unsubscribe;
   }, [dispatch]);
  
  
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, [dispatch]);
  
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path='checkout' element={<Checkout/> }/>
      </Route>
    </Routes>
  );
};
export default App;
