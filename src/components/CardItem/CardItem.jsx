
import { Avatar, Card, Col } from "antd";
import Meta from "antd/es/card/Meta";
import './cardItem.css'
function CardItem(item) {
  const { imgUrl, title, describe, id } = item.item;
  const handleClickEnter = (id)=>{
    console.log(id)
  }
  return (
    <Col span={6} style={{ padding: "10px" }} className="wow animate__animated animate__backInLeft">
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
          <button key="bnt_bs_enter" className="card_btn btn btn-success" onClick={()=>{handleClickEnter(id)}}>Enter</button>,
          <button key="bnt_bs_buy" className="card_btn btn btn-warning">Buy Pro</button>
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
