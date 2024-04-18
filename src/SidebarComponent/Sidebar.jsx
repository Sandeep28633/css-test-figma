import { Avatar, Divider, Typography } from "@mui/material";
import Brightness7OutlinedIcon from "@mui/icons-material/Brightness7Outlined";
import Box from "../UIComponents/Box.component";
import { sidebarItems } from "../Utils/sidebarItems";
import { HeaderIcon } from "../UIComponents/HeaderIcon.component";

const Sidebar = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="16px"
      sx={{
        borderRight: "1px solid #ECECED",
      }}
    >
      <Box display="flex" gap="8px" flexDirection="column">
        <Box display="flex" alignItems="center">
          <HeaderIcon size="48px" />
          <Typography
            variant="body2"
            sx={{ color: "#3A3A43", fontWeight: 600, display: "flex" }}
          >
            Rusumizeme
          </Typography>
        </Box>
        <Divider />
      </Box>
      <Box display="flex" flexDirection="column" gap="8px">
        {sidebarItems.map((item) => {
          return (
            <Box
              display="flex"
              gap="8px"
              alignItems="center"
              padding="6px 4px 6px 4px"
              justifyContent="space-between"
            >
              <Box display="flex" gap="8px">
                {item.icon}
                <Typography variant="body2" sx={{ ...item.sx }}>
                  {item.title}
                </Typography>
              </Box>
              {item?.endIcon}
            </Box>
          );
        })}
      </Box>
      <Box
        display="flex"
        gap="8px"
        flexDirection="column"
        flex="1"
        justifyContent="flex-end"
      >
        <Divider />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding={1}
        >
          <Box display="flex" gap="8px" alignItems="center">
            <Avatar src="https://i.pravatar.cc/300" />
            <Typography
              variant="body2"
              sx={{ color: "#3A3A43", fontWeight: 600, display: "flex" }}
            >
              Caria
            </Typography>
          </Box>
          <Brightness7OutlinedIcon fontSize="small" />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
