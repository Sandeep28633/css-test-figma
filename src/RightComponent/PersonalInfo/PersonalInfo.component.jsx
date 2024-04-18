import React from "react";
import Box from "../../UIComponents/Box.component";
import { Avatar, Button, Link, Typography } from "@mui/material";
import TextFieldComponent from "../../UIComponents/TextField.component";

const PersonalInfo = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap="16px"
    >
      <Typography
        variant="h4"
        sx={{ fontSize: "24px", color: "#14141F", fontWeight: 600 }}
      >
        Personal Information
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1fr 150px" }}
        width="100%"
        gap="16px"
      >
        <Box display="flex" flexDirection="column" gap="16px">
          <Box display="flex" gap="16px">
            <TextFieldComponent label="First Name" placeholder="Petter" />
            <TextFieldComponent placeholder="Cetera" label="Last Name" />
          </Box>
          <Box display="flex" gap="16px">
            <TextFieldComponent label="City" placeholder="London" />
            <TextFieldComponent placeholder="E2 4XF" label="Postal Code" />
          </Box>
          <Box display="flex" gap="16px">
            <TextFieldComponent label="Address" placeholder="123 Example" />
          </Box>
          <Box display="flex" gap="16px">
            <TextFieldComponent label="Email" placeholder="petter@gmail.com" />
            <TextFieldComponent placeholder="+442223334444" label="Phone" />
          </Box>
          <Box display="flex" gap="16px">
            <TextFieldComponent label="Password" placeholder="password" />
          </Box>
          <Box display="flex" alignItems="flex-start">
            <Typography sx={{ fontSize: "15px", color: "#14141F" }}>
              Use this email to log in to your{" "}
              <Link
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#1688FE",
                  fontWeight: 500,
                }}
              >
                resumedone.io
              </Link>{" "}
              account and receive notifications.
            </Typography>
          </Box>
        </Box>
        <Avatar
          sx={{
            width: 144,
            height: 144,
            backgroundColor: "#969E7E",
          }}
          alt="Avatar"
          src="https://i.pravatar.cc/300"
        />
      </Box>
      <Button variant="contained" sx={{ textTransform: "none" }}>
        Save
      </Button>
    </Box>
  );
};
export default PersonalInfo;
