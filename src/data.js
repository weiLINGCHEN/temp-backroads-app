import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    heading: "saving money",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    heading: "endless hiking",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    heading: "amazing comfort",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    cost: "from $2100",
    duration: "6 days",
    location: "china",
    img: img1,
  },
  {
    id: 2,
    date: "october 1th, 2020",
    title: "best of java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    cost: "from $1400",
    duration: "11 days",
    location: "indonesia",
    img: img2,
  },
  {
    id: 3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    cost: "from $5000",
    duration: "8 days",
    location: "hong kong",
    img: img3,
  },
  {
    id: 4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    cost: "from $3300",
    duration: "20 days",
    location: "kenya",
    img: img4,
  },
];
