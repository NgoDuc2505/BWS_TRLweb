import { Suspense } from "react";
import { PlusOutlined } from "@ant-design/icons";

import { Menu, Flex, Breadcrumb } from "antd";
import { Outlet } from "react-router";

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
  const handleGetContent = (e) => {
    console.log(e);
  };
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
          <Suspense fallback={<h1>Loading...</h1>}>
            <Outlet></Outlet>
          </Suspense>
        </div>
      </Flex>
    </div>
  );
}

export default DetailContent;
