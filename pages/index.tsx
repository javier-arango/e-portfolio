import type { NextPage } from "next";
import { AppContainer, Hero } from "../components/index";

const Home: NextPage = () => {
  const meta = {
    title: "Javier Arango",
    description:
      "Javier Arango is a third-year Computer Science undergraduate student at the University of Florida.",
  };

  return (
    <AppContainer title={meta.title} description={meta.description}>
      <Hero />
    </AppContainer>
  );
};

export default Home;
