import uiux from "../assets/internship/UIUX.webp"
import da from "../assets/internship/DA.webp";
import fsdp from "../assets/internship/FSDP.webp";
import ds from "../assets/internship/DS.webp";
import dm from "../assets/internship/DM.webp";
import fsdj from "../assets/internship/FSDP.webp";
import ba from "../assets/internship/BA.webp";
import mern from "../assets/internship/MERN.webp";
import mean from "../assets/internship/MEAN.webp";
import st from "../assets/internship/ST.webp";

const internshipData = [
  {
    id: 1,
    title: "UI / UX Design",
    category: "UI/UX",
    duration: "6 months",
    description: "Master user-centered design, Figma, wireframing, and prototyping with real business projects.",
    accentColor: "#534AB7",
    iconBg: "#EEEDFE",
    image: uiux,
    icon: "design",
  },
  {
    id: 2,
    title: "Data Analytics",
    category: "Data",
    duration: "6 months",
    description: "Python, SQL, and Tableau — turn raw data into actionable business insights that drive decisions.",
    accentColor: "#0F6E56",
    iconBg: "#E1F5EE",
    image: da,
    icon: "data",
  },
  {
    id: 3,
    title: "Full Stack (Python)",
    category: "DevelopmentP",
    duration: "6 months",
    description: "Build robust full-stack applications using Python, Django, and React from backend to frontend.",
    accentColor: "#993C1D",
    iconBg: "#FAECE7",
    image: fsdp,
    icon: "code",
  },
  {
    id: 4,
    title: "Data Science",
    category: "dataScience",
    duration: "6 months",
    description: "ML, deep learning, and data pipelines — from exploration to full model deployment in production.",
    accentColor: "#185FA5",
    iconBg: "#E6F1FB",
    image: ds,
    icon: "science",
  },
  {
    id: 5,
    title: "Digital Marketing",
    category: "Marketing",
    duration: "6 months",
    description: "SEO, social media strategy, Google Ads, and analytics — become a full-stack digital marketer.",
    accentColor: "#854F0B",
    iconBg: "#FAEEDA",
    image: dm,
    icon: "marketing",
  },
  {
    id: 6,
    title: "Full Stack (Java)",
    category: "Development",
    duration: "6 months",
    description: "Enterprise-grade full-stack development with Java Spring Boot, REST APIs, and React.",
    accentColor: "#3B6D11",
    iconBg: "#EAF3DE",
    image:fsdj,
    icon: "code",
  },
  {
    id: 7,
    title: "Business Analytics",
    category: "businessAnaly",
    duration: "6 months",
    description: "Bridge business and data — live BA projects, stakeholder communication, and requirements gathering.",
    accentColor: "#993556",
    iconBg: "#FBEAF0",
    image:ba,
    icon: "analytics",
  },
  {
    id: 8,
    title: "MERN Stack",
    category: "mernStack",
    duration: "6 months",
    description: "Build modern full-stack web apps with MongoDB, Express.js, React, and Node.js end-to-end.",
    accentColor: "#0C447C",
    iconBg: "#B5D4F4",
    image: mern,
    icon: "code",
  },
  {
    id: 9,
    title: "MEAN Stack",
    category: "meanStack",
    duration: "6 months",
    description: "Full-stack development with MongoDB, Express, Angular, and Node.js — scalable SPA architecture.",
    accentColor: "#534AB7",
    iconBg: "#EEEDFE",
    image: mean,
    icon: "code",
  },
  {
    id: 10,
    title: "Software Testing ",
    category: "softwareTest",
    duration: "6 months",
    description: "Manual and automated testing — Selenium, JIRA, and real-world QA workflows on live projects.",
    accentColor: "#5F5E5A",
    iconBg: "#F1EFE8",
    image: st,
    icon: "testing",
  },
];

export default internshipData;