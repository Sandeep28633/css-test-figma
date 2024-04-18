import Box from "../UIComponents/Box.component";
import TopBanner from "./TopBanner/TopBanner.component";
import DeleteBanner from "./DeleteBanner/DeleteBanner.component";
import Footer from "./Footer/Footer.component";
import PersonalInfo from "./PersonalInfo/PersonalInfo.component";

const RightComponent = () => {
  return (
    <Box display="flex" flexDirection="column" padding="32px" gap="32px">
      <TopBanner />
      <PersonalInfo />
      <DeleteBanner />
      <Footer />
    </Box>
  );
};

export default RightComponent;
