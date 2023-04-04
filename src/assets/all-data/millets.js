// all images imported from images directory
import product_01_image_01 from "../images/millet.jpg";

import product_02_image_01 from "../images/ragi.jpg";

import product_03_image_01 from "../images/Samai.jpg";

import product_04_image_01 from "../images/kuthiraivali.jpg";


const products = [
  {
    id: "01",
    title: "Thinai",
    price: 24.0,
    image01: product_01_image_01,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "02",
    title: "Ragi",
    price: 115.0,
    image01: product_02_image_01,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "03",
    title: "Samai",
    price: 110.0,
    image01: product_03_image_01,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "04",
    title: "kuthiraivali",
    price: 110.0,
    image01: product_04_image_01,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

];

export default products;
