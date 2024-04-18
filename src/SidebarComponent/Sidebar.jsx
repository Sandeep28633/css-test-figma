import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import { Avatar, Divider, Typography } from "@mui/material";
import Brightness7OutlinedIcon from "@mui/icons-material/Brightness7Outlined";
import Box from "../UIComponents/Box.component";
const sidebarItems = [
  {
    title: "My Templates",
    icon: <NoteAddOutlinedIcon fontSize="small" />,
    sx: { color: "#14141F", fontSize: "13px", fontWeight: 600 },
  },
  {
    title: "Search",
    icon: <SearchOutlinedIcon fontSize="small" sx={{ fill: "neutral" }} />,
    sx: { color: "#14141F", fontSize: "13px", fontWeight: 600 },
  },
  {
    title: "Software Engineer",
    icon: <StarOutlinedIcon fontSize="small" sx={{ fill: "#FDA521" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "Computer hardware engineer",
    icon: <StarOutlinedIcon fontSize="small" sx={{ fill: "#FDA521" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "Network engineer",
    icon: <StarOutlinedIcon fontSize="small" sx={{ fill: "#FDA521" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "Technical Support",
    icon: <StarOutlinedIcon fontSize="small" sx={{ fill: "#FDA521" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "Network Administrator",
    icon: <StarOutlinedIcon fontSize="small" sx={{ fill: "#FDA521" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "Management",
    icon: <StarOutlinedIcon fontSize="small" sx={{ fill: "#FDA521" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "Data Analytics",
    icon: <StarOutlinedIcon fontSize="small" sx={{ fill: "#FDA521" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "Computer Technician",
    icon: <StarOutlinedIcon fontSize="small" sx={{ fill: "#FDA521" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "Past Search 1",
    icon: <WatchLaterOutlinedIcon fontSize="small" sx={{ fill: "#4C4C55" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "Past Search 2",
    icon: <WatchLaterOutlinedIcon fontSize="small" sx={{ fill: "#4C4C55" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "Computers and information...",
    icon: <WatchLaterOutlinedIcon fontSize="small" sx={{ fill: "#4C4C55" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "Database Administrator",
    icon: <WatchLaterOutlinedIcon fontSize="small" sx={{ fill: "#4C4C55" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "Computer Security",
    icon: <WatchLaterOutlinedIcon fontSize="small" sx={{ fill: "#4C4C55" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "Computer Systems Analyst",
    icon: <WatchLaterOutlinedIcon fontSize="small" sx={{ fill: "#4C4C55" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "My Boards",
    icon: <KitchenOutlinedIcon fontSize="small" sx={{ fill: "#4C4C55" }} />,
    sx: { color: "#4C4C55", fontSize: "13px", fontWeight: 600 },
  },
  {
    title: "Board 1",
    icon: <FolderCopyOutlinedIcon fontSize="small" sx={{ fill: "#4C4C55" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "Board 2",
    icon: <FolderCopyOutlinedIcon fontSize="small" sx={{ fill: "#4C4C55" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "Board 3",
    icon: <FolderCopyOutlinedIcon fontSize="small" sx={{ fill: "#4C4C55" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "Board agent 1",
    icon: <LockOutlinedIcon fontSize="small" sx={{ fill: "#9A955B" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "Board agent 1",
    icon: <LockOutlinedIcon fontSize="small" sx={{ fill: "#9A955B" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
  {
    title: "Board agent 1",
    icon: <LockOutlinedIcon fontSize="small" sx={{ fill: "#9A955B" }} />,
    sx: { color: "#4C4C55", fontSize: "13px" },
  },
];
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
        <Typography
          variant="body2"
          sx={{ color: "#3A3A43", fontWeight: 600, display: "flex" }}
        >
          Rusumizeme
        </Typography>
        <Divider />
      </Box>
      <Box display="flex" flexDirection="column" gap="4px">
        {sidebarItems.map((item) => {
          return (
            <Box
              display="flex"
              gap="8px"
              alignItems="center"
              padding="6px, 4px, 6px, 4px"
            >
              {item.icon}
              <Typography variant="body2" sx={{ ...item.sx }}>
                {item.title}
              </Typography>
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
            <Avatar />
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
