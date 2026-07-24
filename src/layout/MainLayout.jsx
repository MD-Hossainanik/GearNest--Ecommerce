import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import PageLoader from './../ui/PageLoader';

const MainLayout = () => {

  const navigation = useNavigation();

  const isloading = navigation.state === "loading";

  return (
    <>
      <NavBar />
      {isloading ? <PageLoader /> : <Outlet />}
      <Footer />
    </>
  );
};

export default MainLayout;
