import { Suspense, useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

import { Menu, Flex, Breadcrumb, Skeleton, Spin } from "antd";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

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
  const [crCourse, setCourse] = useState(undefined);
  
  const handleGetContent = (e) => {
    console.log(e.keyPath);
  };
  const { course } = useSelector((state) => {
    return state.course;
  });
  useEffect(() => {
    setCourse(course);
  }, [course]);
  console.log(crCourse);
  const courseId = crCourse ? crCourse.id : "main1"; 
  const items = [
    {
      key: courseId,
      label: "Basic",
      icon: <PlusOutlined />,
      children: [
        {
          key: "g1",
          label: `Welcome to ${crCourse?.nameCourse}`,
          type: "group",
          children: [
            {
              key: "needed",
              label: "Why we need ?",
            },
            {
              key: "history",
              label: "History",
            },
            {
              key: "bestPractise",
              label: "Best Practice",
            },
          ],
        },
        {
          key: "g2",
          label: "Fundametal",
          type: "group",
          children: [
            {
              key: "definition",
              label: "Definition",
            },
            {
              key: "firstLook",
              label: "First Look",
            },
            {
              key: "roadmap",
              label: "Road Map",
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
          key: "beginProp",
          label: "Beginner",
        },
        {
          key: "middle",
          label: "Middle Level",
        },
        {
          key: "advance",
          label: "Advance",
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
  const isDataPulled = crCourse ? true : false;
  return (
    <div>
      <Flex vertical={false}>
        {isDataPulled ? (
          <Menu
            onClick={handleGetContent}
            style={{
              width: "25%",
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={[`${courseId}`]}
            mode="inline"
            items={items}
          />
        ) : (
          <Spin tip="Loading">Data...</Spin>
        )}
        <div className="right_content p-4 w-75">
          <Breadcrumb separator="" items={navLocation} />
          <Suspense
            fallback={
              <div>
                <Skeleton active></Skeleton>
              </div>
            }
          >
            <Outlet></Outlet>
          </Suspense>
        </div>
      </Flex>
    </div>
  );
}

export default DetailContent;
