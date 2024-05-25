import Carousel from "../../components/Courousel/Carousel";
import Content from "../../components/Content/Content";
import ContentExtra from "../../components/ContentExpand/ContentExtra";
import Footer from "../../components/Footer/Footer";

function HomePart() {
  return (
    <div>
      <Carousel></Carousel>
      <ContentExtra></ContentExtra>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default HomePart;
