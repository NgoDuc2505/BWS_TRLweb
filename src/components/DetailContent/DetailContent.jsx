import { Suspense, useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

import { Menu, Flex, Breadcrumb, Skeleton, Spin } from "antd";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { setCurrentCourse } from "../../Redux/courseSlice";
import { getDebounce } from "../../handler/Global_Handler/useDebounce";
import "./detailContent.css";
import Footer from "../Footer/Footer";
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
  const [isPulled, setIsPulled] = useState(false);
  const handleGetContent = (e) => {
    console.log(e.keyPath);
    const { DETAIL } = course;
    const tabGetter = e.keyPath[0].split("/")[1];
    const subTabGetter = e.keyPath[0].split("/")[0];
    console.log(DETAIL[tabGetter][subTabGetter]);
  };
  const { course } = useSelector((state) => {
    return state.course;
  });
  useEffect(() => {
    console.log("re-setstate");
    setCourse(course);
    setIsPulled(true);
  }, [course]);
  const items = [
    {
      key: "courseID",
      label: "Basic",
      icon: <PlusOutlined />,
      children: [
        {
          key: "g1",
          label: `Welcome to ${crCourse?.nameCourse}`,
          type: "group",
          children: [
            {
              key: "needed/INTRODUCE",
              label: "Why we need ?",
            },
            {
              key: "history/INTRODUCE",
              label: "History",
            },
            {
              key: "bestPractise/INTRODUCE",
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
              key: "definition/FUNDAMENTAL",
              label: "Definition",
            },
            {
              key: "firstLook/FUNDAMENTAL",
              label: "First Look",
            },
            {
              key: "roadmap/FUNDAMENTAL",
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
          key: "beginProp/CORECONCEPT",
          label: "Beginner",
        },
        {
          key: "middle/CORECONCEPT",
          label: "Middle Level",
        },
        {
          key: "advance/CORECONCEPT",
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
  return (
    <>
      <div className="detail_container">
        <Flex vertical={false}>
          {isPulled ? (
            <Menu
              onClick={handleGetContent}
              style={{
                width: "25%",
              }}
              className="menu_antd_custom"
              defaultSelectedKeys={["needed/INTRODUCE"]}
              defaultOpenKeys={[`courseID`]}
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
          <Footer></Footer>
          </div>
        </Flex>
      </div>
      
    </>
  );
}

export default DetailContent;
