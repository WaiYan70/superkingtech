// const img1 = require("../image/slide_1.png").default;
// const img2 = require("../image/slide_2.png").default;
// const img3 = require("../image/slide_3.png").default;

import img1 from "../image/slide_1.png";
import img2 from "../image/slide_2.png";
import img3 from "../image/slide_3.png";

const heroSliderData = [
    {
        title: "Monitor",
        description: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptate quidem. Hic, quaerat. Qui molestiae voluptates tempore praesentium perferendis animi!",
        img: img1,
        imgalt: "SKT",
        color: "blue",
        path: "/catalog"
    },
    {
        title: "Key Board",
        description: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptate quidem. Hic, quaerat. Qui molestiae voluptates tempore praesentium perferendis animi!",
        img: img2,
        imgalt: "SKT",
        color: "pink",
        path: "/catalog"
    },
    {
        title: "Mouse",
        description: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptate quidem. Hic, quaerat. Qui molestiae voluptates tempore praesentium perferendis animi!",
        img: img3,
        imgalt: "SKT",
        color: "orange",
        path: "/catalog"
    }
];

export default heroSliderData;