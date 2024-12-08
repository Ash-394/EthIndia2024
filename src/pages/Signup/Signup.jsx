import React, { useState } from 'react';
import { Button, TextField, Typography, Link, Container, Box } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import './Signup.css'


import * as Yup from 'yup';
import UseWallet from '../UseWallet';

import { createBucket, uploadFile } from '../akaveAPI'; // Import Akave API functions

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required')
});

const Signup = () => {
  const navigate = useNavigate();
  const [connectedWallet, setConnectedWallet] = useState(null);

  const handleConnectWallet = async () => {
    try {
      const account = await UseWallet();
      if (account) {
        setConnectedWallet(account); // Set the connected wallet
        navigate('/MainPage'); // Redirect to MainPage2 after wallet connection
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('Failed to connect wallet. Please try again.');
    }
  };
  

  const handleSignup = async (values, { setSubmitting }) => {
    try {
      // Step 1: Create a bucket for the user on Akave
      const bucketName = `user_${Date.now()}`; // Generate a unique name for the user bucket
      await createBucket(bucketName);

      // Step 2: Save user details to a JSON file (This part is usually done on the backend in React)
      const userDetails = {
        email: values.email,
        walletAddress: connectedWallet,
      };

      // Step 3: Upload the user details file to the Akave bucket
      const file = new Blob([JSON.stringify(userDetails)], { type: 'application/json' });
const reader = new FileReader();
reader.onload = function() {
  console.log("File content:", reader.result);  // This should log the file content
};
reader.readAsText(file);


      // Step 4: Complete the signup process (you can also store user in your DB here)
      console.log('User details stored on Akave:', userDetails);
      alert('User signed up and details stored successfully!');
      navigate('/login');
    } catch (error) {
      alert('Error during signup: ' + error.message);
      console.error('Error signing up:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
        <h1>.Arike</h1>
    <Container component="main" maxWidth="xs">
        
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={SignupSchema}
        onSubmit={handleSignup}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field as={TextField} variant="outlined" margin="normal" fullWidth id="email" label="Email" name="email" autoComplete="email" autoFocus />
            <ErrorMessage name="email" component="div" />
            <Field as={TextField} variant="outlined" margin="normal" fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
            <ErrorMessage name="password" component="div" />
            <Field as={TextField} variant="outlined" margin="normal" fullWidth name="confirmPassword" label="Confirm Password" type="password" id="confirmPassword" autoComplete="new-password" />
            <ErrorMessage name="confirmPassword" component="div" />
            {connectedWallet ? (
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="walletAddress"
                label="Wallet Address"
                type="text"
                id="walletAddress"
                value={connectedWallet}
                disabled
              />
            ) : (
              <Button onClick={handleConnectWallet} fullWidth variant="contained" color="primary">
                Connect Wallet
              </Button>
            )}
            <Button type="submit" fullWidth variant="contained" color="primary" disabled={!connectedWallet || isSubmitting}>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
      <Box mt={2}>
        <Link component={RouterLink} to="/login" variant="body2">
          Already have an account? Log in
        </Link>
      </Box>
    </Container>
    </div>
  );
};

export default Signup;