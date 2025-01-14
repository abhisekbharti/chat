import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import styles from "./MainPage.module.css";
import LeftSide from "../LeftSide/LeftSide";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import ChatBox from "../Chatbox/ChatBox";
import LoginSignup from "../Loginsignup/LoginSignup";

function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // Store selected user

  return (
    <div className={styles.main_page}>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div>
        <Banner />
      </div>

      <section className={styles.view_page}>
        <Grid container spacing={8}>
          <Grid item xs={2} md={2} sm={3}>
            <Box>
              <LeftSide setSelectedUser={setSelectedUser} />
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box>
              {isLoggedIn ? (
                selectedUser ? (
                  <ChatBox user={selectedUser} />
                ) : (
                  <div>Select a user to start chatting</div>
                )
              ) : (
                <LoginSignup setIsLoggedIn={setIsLoggedIn} />
              )}
            </Box>
          </Grid>
        </Grid>
      </section>

      <Footer />
    </div>
  );
}

export default MainPage;
