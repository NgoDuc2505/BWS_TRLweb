import React from "react";
import { PlusOutlined, LikeOutlined } from "@ant-design/icons";
import {
  Menu,
  Typography,
  Flex,
  Breadcrumb,
  Col,
  Row,
  Statistic,
  Divider,
  Image,
} from "antd";
import Index from "../../components/Error_IMG_display/Index";

const { Title, Paragraph, Text, Link } = Typography;
const blockContent = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse impedit architecto quaerat, consequuntur inventore quo accusamus. Eius sunt molestiae ducimus perspiciatis molestias dolore blanditiis corrupti non repellendus? Earum, sed sint hic assumenda reiciendis incidunt deleniti recusandae, dolore, veniam minus natus.`;
const items = [
  {
    key: "sub1",
    label: "Basic",
    icon: <PlusOutlined />,
    children: [
      {
        key: "g1",
        label: "Welcome to HTML",
        type: "group",
        children: [
          {
            key: "1",
            label: "Defination",
          },
          {
            key: "2",
            label: "HTTP Protocol",
          },
        ],
      },
      {
        key: "g2",
        label: "Fundametal",
        type: "group",
        children: [
          {
            key: "3",
            label: "Element",
          },
          {
            key: "4",
            label: "Tag",
          },
        ],
      },
    ],
  },
  {
    key: "sub2",
    label: "Concept",
    icon: <PlusOutlined />,
    children: [
      {
        key: "5",
        label: "Option 5",
      },
      {
        key: "6",
        label: "Option 6",
      },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          {
            key: "7",
            label: "Option 7",
          },
          {
            key: "8",
            label: "Option 8",
          },
        ],
      },
    ],
  },
  {
    key: "sub4",
    label: "Advance",
    icon: <PlusOutlined />,
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
      {
        key: "11",
        label: "Option 11",
      },
      {
        key: "12",
        label: "Option 12",
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "grp",
    label: "Extension",
    type: "group",
    children: [
      {
        key: "13",
        label: "More reference...",
      },
      {
        key: "14",
        label: "Developer Data sheet...",
      },
    ],
  },
];

const navLocation = [
  {
    title: "Concept",
  },
  {
    type: "separator",
    separator: ":",
  },
  {
    href: "",
    title: "HTML",
  },
  {
    type: "separator",
  },
  {
    href: "",
    title: "Basic",
  },
  {
    type: "separator",
  },
  {
    title: "Welcome to HTML",
  },
];

function DetailContent() {
    const handleGetContent = (e)=>{
        console.log(e)
    }
  return (
    <div>
      <Flex vertical={false}>
        <Menu
          onClick={handleGetContent}
          style={{
            width: "25%",
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
        <div className="right_content p-4 w-75">
          <Breadcrumb separator="" items={navLocation} />
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
              width={'60%'}
              className="mb-4"
              src="https://imagekit.io/blog/content/images/2020/12/image-resizing-html.jpg"
              fallback={<Index/>}
            />
            <Typography>
              <Paragraph>
                In the process of internal desktop applications development,
                many different design specs and implementations would be
                involved, which might cause designers and developers
                difficulties and duplication and reduce the efficiency of
                development.
              </Paragraph>

              <Paragraph>
                After massive project practice and summaries, Ant Design, a
                design language for background applications, is refined by Ant
                UED Team, which aims to{" "}
                <Text strong>
                  uniform the user interface specs for internal background
                  projects, lower the unnecessary cost of design differences and
                  implementation and liberate the resources of design and
                  front-end development
                </Text>
                .
              </Paragraph>

              <Title level={2}>Guidelines and Resources</Title>

              <Paragraph>
                We supply a series of design principles, practical patterns and
                high quality design resources (<Text code>Sketch</Text> and{" "}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, dicta! <Text mark>Its easy</Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                voluptate consequuntur est repellat architecto velit molestias
                facilis porro perspiciatis itaque, deleniti vitae?
                <Text strong>Not use</Text>。
              </Paragraph>

              <Title level={2}>History</Title>

              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                sapiente eveniet, earum maiores perferendis veritatis aliquam!
                Ex in odio maxime debitis magni?（
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
      </Flex>
    </div>
  );
}

export default DetailContent;
