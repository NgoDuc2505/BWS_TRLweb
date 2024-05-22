import { Avatar, Card, Col } from "antd";
import Meta from "antd/es/card/Meta";
import "./cardItem.css";
import { useNavigate } from "react-router-dom";
function CardItem(item) {
  const { imgUrl, title, describe, id } = item.item;
  const navigate = useNavigate();
  const handleClickEnter = (id) => {
    navigate(`detail/${id}`);
  };
  const handleClickBuy = (id) => {
    console.log(id);
  };
  return (
    <Col
      xl={6}
      md={8}
      xs={24}
      sm={12}
      style={{ padding: "10px" }}
      className="wow animate__animated animate__fadeIn"
    >
      <Card
        className="card_content_display"
        cover={
          <img
            alt="example"
            src={imgUrl}
            className="img_content_card_display"
          />
        }
        actions={[
          <button
            key="bnt_bs_enter"
            className="card_btn btn btn-success"
            onClick={() => {
              handleClickEnter(id);
            }}
          >
            Enter
          </button>,
          <button
            key="bnt_bs_buy"
            className="card_btn btn btn-warning"
            onClick={() => {
              handleClickBuy(id);
            }}
          >
            Practice
          </button>,
        ]}
      >
        <Meta
          className="meta_antd_custom"
          avatar={<Avatar src="img/star-icon.png" />}
          title={title}
          description={describe}
        />
      </Card>
    </Col>
  );
}

export default CardItem;
