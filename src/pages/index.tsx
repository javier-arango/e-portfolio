import type { NextPage } from "next";
import { AppContainer } from "../components";
import { Hero } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <AppContainer title="Software Engineer">
        <Hero />
      </AppContainer>
    </>
  );
};

export default Home;
