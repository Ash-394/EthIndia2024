import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Link,
  Container,
  Box,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import userService from "../service/userservice";
import * as Yup from "yup";
import UseWallet from "./useWallet";
import {
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  useProver,
  AnonAadhaarProof,
} from "@anon-aadhaar/react";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const Signup = () => {
  const navigate = useNavigate();
  const [connectedWallet, setConnectedWallet] = useState(null);
  const [anonAadhaar] = useAnonAadhaar();
  const [, latestProof] = useProver();
  const [anonVerified, setAnonVerified] = useState(false);

  const handleConnectWallet = async () => {
    const account = await UseWallet();
    setConnectedWallet(account);
  };

  const handleSignup = async (values, { setSubmitting }) => {
    try {
      const signupData = {
        email: values.email,
        password: values.password,
        walletAddress: connectedWallet,
        anonAadhaarProof: anonVerified && latestProof ? latestProof : null,
      };

      const newUser = await userService.signup(signupData);
      console.log("New user created:", newUser);
      alert("User signed up successfully!");
      navigate("/login");
    } catch (error) {
      alert("Error signing up");
      console.error("Error signing up:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={SignupSchema}
        onSubmit={handleSignup}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <ErrorMessage name="email" component="div" />
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
            <ErrorMessage name="password" component="div" />
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
            />
            <ErrorMessage name="confirmPassword" component="div" />

            {/* Wallet Connection */}
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
              <Button
                onClick={handleConnectWallet}
                fullWidth
                variant="contained"
                color="primary"
              >
                Connect Wallet
              </Button>
            )}

            {/* Anon Aadhaar Verification */}
            {anonAadhaar.status === "logged-in" ? (
              <Box mt={2}>
                <Typography>✅ Anon Aadhaar Verified</Typography>
                {latestProof && (
                  <AnonAadhaarProof
                    code={JSON.stringify(latestProof, null, 2)}
                  />
                )}
              </Box>
            ) : (
              <Box mt={2}>
                <LogInWithAnonAadhaar
                  nullifierSeed={1234}
                  onSuccess={() => setAnonVerified(true)}
                  onFailure={() => setAnonVerified(false)}
                />
              </Box>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!connectedWallet || isSubmitting || !anonVerified}
            >
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
  );
};

export default Signup;