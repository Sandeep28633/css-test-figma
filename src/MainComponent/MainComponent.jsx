import RightComponent from "../RightComponent/RightComponent";
import Sidebar from "../SidebarComponent/Sidebar";
import Box from "../UIComponents/Box.component";

const MainComponent = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: "1fr", md: "250px 1fr" }}
      padding="24px"
    >
      <Sidebar />
      <RightComponent />
    </Box>
  );
};

export default MainComponent;
