import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

SignIn.propTypes = {

};

const uiConfig = {
  signInFlow: 'redirect',
  signInSuccessUrl: '/photos',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
};

function SignIn() {
  return (
    <div>
      <div className="text-center">
        <h2>Login Form</h2>

        <p>or login with social accounts</p>
      </div>

      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
    </div>
  );
}

export default SignIn;