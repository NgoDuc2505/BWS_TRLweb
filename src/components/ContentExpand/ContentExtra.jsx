import { Col, Row, Space, Typography } from "antd";
import ContentExtraItem from "../ContentExtraItem/ContentExtraItem";
import "./content_extra.css";
import {
  extraData,
  widthMappingExtraData,
  bgcMappingExtraData,
  leftMappingExtraData,
  colorMappingExtraData,
} from "../../handler/Content/main";

function ContentExtra() {
  const { Title } = Typography;
  return (
    <div className="content_extra">
      <div className="container-lg">
        <Title level={1} className="text-center mt-5 mb-3">
          Feature Course
        </Title>
        <Row align={"middle"}>
          <Col span={24}>
            <Space direction="vertical" style={{ width: "100%", gap: "20px" }}>
              {extraData.map((item, index) => {
                return (
                  <ContentExtraItem
                    key={item.id}
                    data={item}
                    widthSet={widthMappingExtraData[index]}
                    bgc={bgcMappingExtraData[index]}
                    leftSet={leftMappingExtraData[index]}
                    isColorWhite={colorMappingExtraData[index]}
                  ></ContentExtraItem>
                );
              })}
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ContentExtra;
