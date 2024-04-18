import React from "react";
import Box from "../../UIComponents/Box.component";
import { Avatar, Button, Link, TextField, Typography } from "@mui/material";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";

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
            <TextField
              label="First Name"
              placeholder="Petter"
              InputLabelProps={{ shrink: true }}
              sx={{ flexGrow: 1 }}
            />
            <TextField
              placeholder="Cetera"
              label="Last Name"
              InputLabelProps={{ shrink: true }}
              sx={{ flexGrow: 1 }}
            />
          </Box>
          <Box display="flex" gap="16px">
            <TextField
              label="City"
              placeholder="London"
              InputLabelProps={{ shrink: true }}
              sx={{ flexGrow: 1 }}
            />
            <TextField
              placeholder="E2 4XF"
              label="Postal Code"
              InputLabelProps={{ shrink: true }}
              sx={{ flexGrow: 1 }}
            />
          </Box>
          <Box display="flex" gap="16px">
            <TextField
              label="Address"
              placeholder="123 Example"
              InputLabelProps={{ shrink: true }}
              sx={{ flexGrow: 1 }}
            />
          </Box>
          <Box display="flex" gap="16px">
            <TextField
              label="Email"
              placeholder="petter@gmail.com"
              InputLabelProps={{ shrink: true }}
              sx={{ flexGrow: 1 }}
            />
            <TextField
              placeholder="+442223334444"
              label="Phone"
              InputLabelProps={{ shrink: true }}
              sx={{ flexGrow: 1 }}
            />
          </Box>
          <Box display="flex" gap="16px">
            <TextField
              label="Password"
              placeholder="password"
              InputLabelProps={{ shrink: true }}
              sx={{ flexGrow: 1 }}
            />
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
