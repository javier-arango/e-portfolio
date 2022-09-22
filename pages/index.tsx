import type { NextPage } from "next";
import AppContainer from "../components/AppContainer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionContainer from "../components/SectionContainer";

const Home: NextPage = () => {
  return (
    <AppContainer>
      <Header />

      <SectionContainer />

      <Footer />
    </AppContainer>
  );
};

export default Home;
