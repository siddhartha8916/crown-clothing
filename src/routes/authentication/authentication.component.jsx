import React from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss'

const Authentication = () => {
  // useEffect(() => {
  //   const getGoogleAuthRedirectResults = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       await createUserDocumentFromAuth(response.user);
  //     }
  //   };

  //   getGoogleAuthRedirectResults();
  // }, []);


  return (
    <div className="authentication-container">
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
};

export default Authentication;
