import type { NextPage } from "next";
import AppContainer from "../components/AppContainer";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <AppContainer>
      <Header />

      <Footer />
    </AppContainer>
  );
};

export default Home;
