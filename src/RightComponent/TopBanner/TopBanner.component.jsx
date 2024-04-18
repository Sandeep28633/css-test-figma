import React from "react";
import Box from "../../UIComponents/Box.component";
import { Typography } from "@mui/material";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";

const TopBanner = () => {
  return (
    <Box
      sx={{
        background: "#008B5D",
        padding: "24px",
        display: "flex",
        gap: "16px",
        borderRadius: "8px",
        alignItems: "center",
        flexDirection: "column",
        "@media (min-width: 768px)": {
          flexDirection: "row",
        },
      }}
    >
      <Box
        sx={{
          background: "#ffffff",
          borderRadius: "50%",
          padding: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <KitchenOutlinedIcon sx={{ width: "48px", height: "48px" }} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap="8px"
        alignItems="flex-start"
      >
        <Typography sx={{ fontSize: "24px", color: "#ffffff" }} variant="h4">
          Premium Account
        </Typography>
        <Typography
          sx={{ fontSize: "15px", color: "#ffffff", textAlign: "justify" }}
        >
          You have a premium account, granting you access to all the remarkable
          features offered by ResumeDone. With this privilege, you can indulge
          in the freedom of downloading an unlimited number of resumes and cover
          letters in both PDF and Word formats.
        </Typography>
      </Box>
    </Box>
  );
};
export default TopBanner;
