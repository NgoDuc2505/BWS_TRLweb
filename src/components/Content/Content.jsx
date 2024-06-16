import "./content.css";
import { Row, Typography } from "antd";
import CardItem from "../CardItem/CardItem";
import { data } from "../../handler/Content/main.js";
import "animate.css";
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, GlobalOutlined } from '@ant-design/icons';
// import Discount from "../DiscountShow/Discount.jsx";

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
      <div className="container-map">
      <div className="info">
          <h2>It Nexus Group</h2>
          <p><EnvironmentOutlined /> Address: 450 Tran Dai Nghia, Dien Ngoc, Ngu Hanh Son, Da Nang 550000</p>
          <p><PhoneOutlined /> Phone: (123) 456-7890</p>
          <p><MailOutlined /> Email: contact@itnexus.com</p>
          <p><GlobalOutlined /> Website: <a href="https://www.itnexus.com">www.itnexus.com</a></p>
        </div>
      <div className="map">
        <iframe
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=S%E1%BB%91%20450%20%C4%90%C6%B0%E1%BB%9Dng%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a,%20%C4%90i%E1%BB%87n%20Ng%E1%BB%8Dc,%20Ng%C5%A9%20H%C3%A0nh%20S%C6%A1n,%20%C4%90%C3%A0%20N%E1%BA%B5ng%20550000+(IT%20Nexus)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
      </div>
    </div>
    </div>
  );
}

export default Content;
