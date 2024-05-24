import { LikeOutlined } from "@ant-design/icons";
import { Col, Divider, Flex, Image, Row, Statistic, Typography } from "antd";
import Index from "../Error_IMG_display/Index";
import { useParams } from "react-router";

function DetailCourse() {
  const param = useParams();
  console.log(param);
  const { Title, Paragraph, Text, Link } = Typography;
  const blockContent = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse impedit architecto quaerat, consequuntur inventore quo accusamus. Eius sunt molestiae ducimus perspiciatis molestias dolore blanditiis corrupti non repellendus? Earum, sed sint hic assumenda reiciendis incidunt deleniti recusandae, dolore, veniam minus natus.`;
  return (
    <div className="detail_course">
      <Flex vertical={false} justify="space-between">
        <Title className="mt-2">Introduction</Title>
        <Row gutter={16} style={{ width: "20%" }}>
          <Col span={12}>
            <Statistic
              title="Feedback"
              value={1128}
              prefix={<LikeOutlined />}
            />
          </Col>
          <Col span={12}>
            <Statistic title="Unmerged" value={93} suffix="/ 100" />
          </Col>
        </Row>
      </Flex>
      <div className="content_display mt-4">
        <Image
          width={"60%"}
          className="mb-4"
          src="https://imagekit.io/blog/content/images/2020/12/image-resizing-html.jpg"
          fallback={<Index />}
        />
        <Typography>
          <Paragraph>
            In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Paragraph>

          <Paragraph>
            After massive project practice and summaries, Ant Design, a design
            language for background applications, is refined by Ant UED Team,
            which aims to{" "}
            <Text strong>
              uniform the user interface specs for internal background projects,
              lower the unnecessary cost of design differences and
              implementation and liberate the resources of design and front-end
              development
            </Text>
            .
          </Paragraph>

          <Title level={2}>Guidelines and Resources</Title>

          <Paragraph>
            We supply a series of design principles, practical patterns and high
            quality design resources (<Text code>Sketch</Text> and{" "}
            <Text code>Axure</Text>), to help people create their product
            prototypes beautifully and efficiently.
          </Paragraph>

          <Paragraph>
            <ul>
              <li>
                <Link href="/docs/spec/proximity">Principles</Link>
              </li>
              <li>
                <Link href="/docs/spec/overview">Patterns</Link>
              </li>
              <li>
                <Link href="/docs/resources">Resource Download</Link>
              </li>
            </ul>
          </Paragraph>

          <Paragraph>
            Press <Text keyboard>Esc</Text> to exit...
          </Paragraph>

          <Divider />

          <Title>This is HTML</Title>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            cumque consectetur ea.
          </Paragraph>

          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            dicta! <Text mark>Its easy</Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            voluptate consequuntur est repellat architecto velit molestias
            facilis porro perspiciatis itaque, deleniti vitae?
            <Text strong>Not use</Text>。
          </Paragraph>

          <Title level={2}>History</Title>

          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            sapiente eveniet, earum maiores perferendis veritatis aliquam! Ex in
            odio maxime debitis magni?（
            <Text code>Sketch</Text> and <Text code>Axure</Text>
            ），Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae.。
          </Paragraph>

          <Paragraph>
            <ul>
              <li>
                <Link href="/docs/spec/proximity-cn">More</Link>
              </li>
              <li>
                <Link href="/docs/spec/overview-cn">About</Link>
              </li>
              <li>
                <Link href="/docs/resources-cn">Get free version</Link>
              </li>
            </ul>
          </Paragraph>

          <Paragraph>
            <blockquote>{blockContent}</blockquote>
            <pre>{blockContent}</pre>
          </Paragraph>

          <Paragraph>
            Press <Text keyboard>Esc</Text>Exiting……
          </Paragraph>
        </Typography>
      </div>
    </div>
  );
}

export default DetailCourse;
