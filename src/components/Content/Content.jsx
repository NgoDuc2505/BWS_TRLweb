import React from "react";
import "./content.css";
import { Avatar, Card, Col, Row } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
function Content() {
  return (
    <div className="content">
      <Row>
        <Col span={6}>
          <Card
            className="card_content_display"
            cover={
              <img
                alt="example"
                src="https://codybonney.com/images/16x9/tags/html.png"
                className="img_content_card_display"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              // <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            className="card_content_display"
            cover={
              <img
                alt="example"
                src="https://fvi.edu/wp-content/uploads/2020/08/CSS3_Logo_512-624x3561.jpg"
                className="img_content_card_display"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            className="card_content_display"
            cover={
              <img
                alt="example"
                src="https://i0.wp.com/www.techomoro.com/wp-content/uploads/2019/11/javascript-736400-1.png?fit=1854%2C941&ssl=1"
                className="img_content_card_display"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            className="card_content_display"
            cover={
              <img
                alt="example"
                src="https://jaygould.co.uk/static/a540c5d36e6d0b33716ed77fa4a00bc3/40601/react.png"
                className="img_content_card_display"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            className="card_content_display"
            cover={
              <img
                alt="example"
                src="https://innovationyourself.com/wp-content/uploads/2020/08/nodejs-logo.png"
                className="img_content_card_display"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              // <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            className="card_content_display"
            cover={
              <img
                alt="example"
                src="https://kinsta.com/wp-content/uploads/2022/06/nest-js-logo-1200x900.png"
                className="img_content_card_display"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            className="card_content_display"
            cover={
              <img
                alt="example"
                src="https://www.techupdates.net/wp-content/uploads/2021/02/Flutter.png"
                className="img_content_card_display"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            className="card_content_display"
            cover={
              <img
                alt="example"
                src="https://i0.wp.com/meritocracy.is/blog/wp-content/uploads/2021/04/golang.jpg?resize=1038%2C576&ssl=1"
                className="img_content_card_display"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Content;
