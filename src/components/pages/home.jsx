import React from "react";

import { Helmet } from "react-helmet";
import Title from "../sections/title_section";
import Welcome from "../sections/welcome_section";
import OurFoodMenu from "../sections/ourFoodMenu_section";
import SpecialFood from "../sections/specialFood_section";
import BookTable from "../sections/bookTable_section";
import News from "../sections/news_section";
import Footer from "../includes/footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ROYATE |Home|</title>
      </Helmet>
      <Title />
      <Welcome />
      <OurFoodMenu />
      <SpecialFood />
      <BookTable />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
