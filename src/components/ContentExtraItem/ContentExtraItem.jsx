import { Card, Col, Row, Space, Typography } from "antd";
// import React from "react";
import "animate.css";
import { useNavigate } from "react-router";
import "./contentExtraItem.css";


function ContentExtraItem(prop) {
  const { Title } = Typography;
  const { data, widthSet, bgc, leftSet, isColorWhite } = prop;
  const { title, imgUrl, id } = data;
  const navigate = useNavigate();
  const handleClickEnter = (id) => {
    navigate(`detail/${id}`);
  };
  const handleClickCert = (id) => {
    navigate(`detail/${id}`);
  };
  return (
    <div className="wow animate__animated animate__fadeIn">
      <Card
        className="card_antd_custom"
        title={title}
        extra={<a href="#">More</a>}
      >
        <div className="img_bg_display">
          <div
            className="color_display_theme"
            style={{ backgroundColor: bgc }}
          ></div>
          <Row className="title_course_display_wrapper">
            <Col span={12} className="title_course_display_main">
              <Space
                direction="vertical"
                style={{ width: "100%", height: "100%", gap: "20px" }}
                align="center"
              >
                <Title
                  level={2}
                  className="title_course_display"
                  style={{ color: isColorWhite ? "#fff" : "black" ,fontSize: "5rem"}}
                >
                  {title}
                </Title>
                <button
                  className="btn_ct_extra btn btn-primary"
                  onClick={() => {
                    handleClickEnter(id);
                  }}
                >
                  Enter
                </button>
                <button
                  className="btn_ct_extra btn btn-info"
                  onClick={() => {
                    handleClickCert(id);
                  }}
                >
                  Get Certified
                </button>
              </Space>
            </Col>
            <Col span={12}>
              <div
                className="w-100 right_extra_item_content"
                style={{
                  position: "absolute",
                  transform: "translateY(-45%)",
                  top: "50%",
                  left: leftSet,
                }}
              >
                <img style={{ width: widthSet }} src={imgUrl} alt="..." />
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}

export default ContentExtraItem;
