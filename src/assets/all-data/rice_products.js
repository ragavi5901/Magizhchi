// all images imported from images directory
import product_01_image_01 from "../images/Rice_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";

import product_02_image_01 from "../images/brown-rice.jpg";

import product_03_image_01 from "../images/black_rice.jpg";

import product_04_image_01 from "../images/Jeera-Samba-Rice.jpg";


const rice_products = [
  {
    id: "01",
    title: "Raw Rice",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "02",
    title: "Brown Rice",
    price: 115.0,
    image01: product_02_image_01,
    category: "Rice",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "03",
    title: "Black Rice",
    price: 110.0,
    image01: product_03_image_01,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "04",
    title: "Jeera Rice",
    price: 110.0,
    image01: product_04_image_01,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  
];

export default rice_products;
