import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUp from "../../components/sign-up-form/sign-up.component";

import "./authentication.styles.scss";

const SignIn = () => {
  return (
    <div className="authentication">
      <SignInForm />
      <SignUp />
    </div>
  );
};

export default SignIn;
