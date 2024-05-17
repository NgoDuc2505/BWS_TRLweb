import { Card, Col, Row, Space, Typography } from "antd";
import React from "react";
import "./content_extra.css";

function ContentExtra() {
  const { Title } = Typography;
  return (
    <div className="content_extra">
      <div className="container">
        <Row align={"middle"}>
          <Col span={24}>
            <Space direction="vertical" style={{ width: "100%", gap: "20px" }}>
              <Card
                className="card_antd_custom"
                title="C++"
                extra={<a href="#">Feedback...</a>}
              >
                <div className="img_bg_display">
                  <div
                    className="color_display_theme"
                    style={{ backgroundColor: "#00599c" }}
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
                          style={{ color: "#fff" }}
                        >
                          C++
                        </Title>
                        <button className="btn_ct_extra btn btn-primary">
                          Enter
                        </button>
                        <button className="btn_ct_extra btn btn-info">
                          Get Certified
                        </button>
                      </Space>
                    </Col>
                    <Col span={12}>
                      <div className="w-100">
                        <img
                          style={{ width: "65%" }}
                          src="https://codeprogramming.org/wp-content/uploads/2022/01/C-Logo.wine_.png"
                          alt="..."
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card>
              <Card
                className="card_antd_custom"
                title="C++"
                extra={<a href="#">More</a>}
              >
                <div className="img_bg_display">
                  <div
                    className="color_display_theme"
                    style={{ backgroundColor: "#00599c" }}
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
                          style={{ color: "#fff" }}
                        >
                          C++
                        </Title>
                        <button className="btn_ct_extra btn btn-primary">
                          Enter
                        </button>
                        <button className="btn_ct_extra btn btn-info">
                          Get Certified
                        </button>
                      </Space>
                    </Col>
                    <Col span={12}>
                      <div className="w-100">
                        <img
                          style={{ width: "65%" }}
                          src="https://codeprogramming.org/wp-content/uploads/2022/01/C-Logo.wine_.png"
                          alt="..."
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card>
              <Card
                className="card_antd_custom"
                title="C++"
                extra={<a href="#">More</a>}
              >
                <div className="img_bg_display">
                  <div
                    className="color_display_theme"
                    style={{ backgroundColor: "#00599c" }}
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
                          style={{ color: "#fff" }}
                        >
                          C++
                        </Title>
                        <button className="btn_ct_extra btn btn-primary">
                          Enter
                        </button>
                        <button className="btn_ct_extra btn btn-info">
                          Get Certified
                        </button>
                      </Space>
                    </Col>
                    <Col span={12}>
                      <div className="w-100">
                        <img
                          style={{ width: "65%" }}
                          src="https://codeprogramming.org/wp-content/uploads/2022/01/C-Logo.wine_.png"
                          alt="..."
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ContentExtra;
