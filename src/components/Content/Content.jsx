import "./content.css";
import { Row, Typography } from "antd";
import CardItem from "../CardItem/CardItem";
import { data } from "../../handler/Content/main.js";
import "animate.css";
import Discount from "../DiscountShow/Discount.jsx";

function Content() {
  const { Title } = Typography;
  return (
    <div className="content">
      <div className="container-xl">
        <Title level={1} className="text-center fw-bold">
          Our Courses
        </Title>
        <Row>
          {data.map((item, index) => {
            return <CardItem key={index} item={item}></CardItem>;
          })}
        </Row>
        {/* <Discount></Discount> */}
      </div>
    </div>
  );
}

export default Content;
