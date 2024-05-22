import { Card, Col, Row, Space, Typography } from "antd";
// import React from "react";
import "animate.css"
function ContentExtraItem(prop) {
  const { Title } = Typography;
  const { data, widthSet, bgc, leftSet, isColorWhite } = prop;
  const { title, imgUrl } = data;
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
            <Col span={12}>
              <Space
                direction="vertical"
                style={{ width: "100%", height: "100%", gap: "20px" }}
                align="center"
              >
                <Title
                  level={1}
                  className="title_course_display"
                  style={{ color: isColorWhite ? "#fff" : "black" }}
                >
                  {title}
                </Title>
                <button className="btn_ct_extra btn btn-primary">Enter</button>
                <button className="btn_ct_extra btn btn-info">
                  Get Certified
                </button>
              </Space>
            </Col>
            <Col span={12}>
              <div
                className="w-100"
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
