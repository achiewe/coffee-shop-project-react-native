import React, {useEffect} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import ViewPropTypes from 'deprecated-react-native-prop-types';

export default function SignInButton() {
  const handleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info:', userInfo);
      // Handle successful sign-in
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // Handle canceled sign-in
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Handle sign-in in progress
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Handle Play Services not available
      } else {
        // Handle other errors
        console.error('Google Sign-In Error:', error);
      }
    }
  };

  useEffect(() => {
    // Initialize GoogleSignin
    GoogleSignin.configure({
      webClientId:
        '796566206974-g5eirele1mff8q149p1qir1u0rd2jkfj.apps.googleusercontent.com', // Replace with your web client ID
    });
  }, []);

  return (
    <ViewPropTypes>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleSignIn}
      />
    </ViewPropTypes>
  );
}
