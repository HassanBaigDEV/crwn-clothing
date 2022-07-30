import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utilities/firebase/firebase.utility";
import { createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utility";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import Button from "../button/button.component";

const defaulFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaulFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  let formProps = [];
  const handleSubmit = async (event) => {
    event.preventDefault();

    // ----
    const formData = new FormData(event.target);
    formProps = Object.fromEntries(formData);
    console.log("form", formProps);
    const { email, displayName, password, confirmPassword } = formProps;
    // ----

    if (confirmPassword !== password) {
      alert("Passwords donot match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, {
        displayName,
      });

      setFormFields(defaulFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot Sign Up! Email is already in use");
        setFormFields(defaulFormFields);
        return;
      }
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with email and password</span>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email Address"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUp;
