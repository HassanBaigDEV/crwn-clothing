import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utilities/firebase/firebase.utility";

import SignUp from "../../components/sign-up-form/sign-up.component";
import Button from "../../components/button/button.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  return (
    <div className="signIn">
      <Button buttonType="google" onClick={logGoogleUser}>
        Sign in with Google
      </Button>
      <SignUp />
    </div>
  );
};

export default SignIn;
