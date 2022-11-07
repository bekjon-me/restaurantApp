import { ImageSourcePropType } from "react-native";

 export interface discountedProductsType {
  img: ImageSourcePropType;
  discountLabel: string;
  discountDate: string;
 }
 
 export const discountedProducts: discountedProductsType[] = [
    {
      img: require("../assets/productImg.png"),
      discountLabel: "Discount all Excelsa 20% in all stores",
      discountDate: "20/04/20 - 06/09/2020",
    },
    {
      img: require("../assets/productImg.png"),
      discountLabel: "Discount all Excelsa 20% in all stores",
      discountDate: "20/04/20 - 06/09/2020",
    },
    {
      img: require("../assets/productImg.png"),
      discountLabel: "Discount all Excelsa 20% in all stores",
      discountDate: "20/04/20 - 06/09/2020",
    },
    {
      img: require("../assets/productImg.png"),
      discountLabel: "Discount all Excelsa 20% in all stores",
      discountDate: "20/04/20 - 06/09/2020",
    },
  ];
  