import React, { useState } from "react";
import { Box, Button, Collapse } from "@mui/material";
import styles from "./LeftSide.module.css";

function LeftSide({ setSelectedUser }) {
  const [menuOpen, setMenuOpen] = useState(true);
  const [selectedUser, setSelected] = useState(null); // Track the selected user

  // Mock user data (replace with an API call in real-world apps)
  const users = [
    "Linc",
    "Reynolds",
    "Pentonic",
    "Agni Icy Gel 2",
    "Blue Star Life",
    "Flair Write Meter",
    "Natraj",
    "Montblanc",
    "SHEAFFER",
  ];

  const handleToggleMenu = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };

  const handleUserSelect = (user) => {
    setSelected(user); // Set the selected user
    setSelectedUser(user);//send parent component
  };

  return (
    <div className={styles.LeftSide_body}>
      <Button
        onClick={handleToggleMenu}
        variant="contained"
        fullWidth
        className={styles.menuToggleButton}
      >
        {menuOpen ? "Collapse Users" : "Expand Users"}
      </Button>

      {/* Collapsible Left Menu */}
      <Collapse in={menuOpen}>
        <Box className={styles.menuContent}>
          <div>
            {users.map((user, index) => (
              <div
                key={index}
                className={`${styles.selectableUser} ${
                  selectedUser === user ? styles.selected : ""
                }`}
                onClick={() => handleUserSelect(user)}
              >
                {user}
              </div>
            ))}
          </div>
        </Box>
      </Collapse>
    </div>
  );
}

export default LeftSide;
