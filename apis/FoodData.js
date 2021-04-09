import headerImg from "../images/cherry0.png";
import productImg1 from "../images/cherry1.jpg";
import productImg2 from "../images/cherry2.jpg";
import productImg3 from "../images/cherry3.jpg";

export const FoodData = {
  title: "Australian Cherry",
  offerPrice: "Rs.2450",
  price: "Rs.2500",
  image: headerImg,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus",

  products: [
    {
      productId: "1",
      productName: "American Cherry",
      productImg: productImg1,
    },
    {
      productId: "2",
      productName: "Japanesse Cherry",
      productImg: productImg2,
    },
    {
      productId: "3",
      productName: "Indian Cherry",
      productImg: productImg3,
    },
    {
      productId: "4",
      productName: "Indian Cherry",
      productImg: headerImg,
    },
  ],
};
