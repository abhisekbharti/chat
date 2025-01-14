import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import styles from "./LoginSignup.module.css";

function LoginSignup({ handleLogin }) {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // For signup

  // Handle login or signup based on isLogin state
  const handleSubmit = () => {
    if (isLogin) {
      // Logic for login (you can replace with an API call)
      console.log("Logging in with", email, password);
      handleLogin(); // After successful login, call handleLogin to update the state in MainPage
    } else {
      // Logic for signup (you can replace with an API call)
      console.log("Signing up with", email, password, name);
    }
  };

  return (
    <Box className={styles.loginSignupContainer}>
      <Typography variant="h4" gutterBottom>
        {isLogin ? "Login" : "Sign Up"}
      </Typography>

      {/* Conditional Rendering for Signup */}
      {!isLogin && (
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
      )}

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />

      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
        className={styles.submitButton}
      >
        {isLogin ? "Login" : "Sign Up"}
      </Button>

      <Button
        variant="text"
        fullWidth
        onClick={() => setIsLogin(!isLogin)} // Toggle between login and signup
        className={styles.toggleButton}
      >
        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
      </Button>
    </Box>
  );
}

export default LoginSignup;
