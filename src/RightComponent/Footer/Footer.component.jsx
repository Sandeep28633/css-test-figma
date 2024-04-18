import { Checkbox, Divider, Link, Typography } from "@mui/material";
import Box from "../../UIComponents/Box.component";

const Footer = () => {
  return (
    <Box display="flex" flexDirection="column" gap="16px">
      <Box
        display="flex"
        gap="4px"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Typography sx={{ fontSize: "15px", color: "#4C4C55" }}>
          <Link
            sx={{
              cursor: "pointer",
              color: "#1688FE",
              textDecoration: "none",
            }}
          >
            Get in touch with our support team{" "}
          </Link>
          if you have any question or want to leave some feedback.
        </Typography>
        <Typography sx={{ fontSize: "15px", color: "#4C4C55" }}>
          {" "}
          We’ll be happy to hear from you.
        </Typography>
      </Box>
      <Divider />
      <Box
        display="flex"
        gap="16px"
        sx={{
          "@media (max-width: 768px)": {
            flexWrap: "wrap",
          },
        }}
      >
        <Typography sx={{ fontSize: "14px", color: "#595964" }}>
          Terms & Conditions
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#595964" }}>
          Privacy Policy
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#595964" }}>FAQ</Typography>
        <Typography sx={{ fontSize: "14px", color: "#595964" }}>
          Contact Us
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
