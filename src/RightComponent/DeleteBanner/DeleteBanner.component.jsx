import { Checkbox, Link, Typography } from "@mui/material";
import Box from "../../UIComponents/Box.component";

const DeleteBanner = () => {
  return (
    <Box display="flex" flexDirection="column" gap="16px">
      <Box gap="8px" display="flex" alignItems="center">
        <Checkbox size="small" />
        <Typography>
          Show my profile to serious employers on{" "}
          <Link
            sx={{
              cursor: "pointer",
              color: "#1688FE",
              textDecoration: "none",
            }}
          >
            hirethesbest.io
          </Link>{" "}
          for free
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "16px",
          borderRadius: "8px",
          display: "flex",
          gap: "16px",
          border: "1px solid #E3E3E4",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: "17px", color: "#000000", fontWeight: 600 }}
        >
          Delete Account
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "15px", color: "#4C4C55" }}>
          If you delete your account you’ll be permanently removing it from our
          systems - you can’t undo it.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: "15px",
            color: "#F25773",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Yes, Delete my account
        </Typography>
      </Box>
    </Box>
  );
};

export default DeleteBanner;
