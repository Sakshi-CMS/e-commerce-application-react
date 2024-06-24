import product_1 from "./W_Product_1.jpg"
import product_2 from "./W_Product_10.jpg"
import product_3 from "./W_Product_17.jpg"
import product_4 from "./W_Product_12.jpg"


let data_product = [
    {
        "ID": "008",
        "Name": "Women Fit and Flare Yellow Dress",
        "Category": "Women",
        "Image": product_1,
        "price": 4999,
        "discountedPrice": 1779,
        "discountPercent": 64,
        "size": [
          { "name": "S", "quantity": 20 },
          { "name": "M", "quantity": 30 },
          { "name": "L", "quantity": 50 }
        ],
        "brand": "W",
        "description": "A statement with this stylish purple A-line dress from ZWERLON.",
      },
      {
        "ID": "009",
        "Name": "Women Maxi Maroon Dress",
        "brand": "Daevish",
        "description": "purple A-line dress from ZWERLON. Made with high-quality fabric, this dress is perfect for any occasion.",
        "Category": "Women",
        "Image": product_2,
        "price": 1899,
        "discountedPrice": 341,
        "discountPercent": 82,
        "size": [
          { "name": "S", "quantity": 20 },
          { "name": "M", "quantity": 30 },
          { "name": "L", "quantity": 50 }
        ]
      },
     {
        "ID": "010",
        "Name": "Women A-line Purple Dress",
        "brand": "Sheetal Associates",
        "description": " stylish purple A-line dress from ZWERLON. Made with high-quality fabric",
        "Category": "Women",
        "Image": product_3,
        "price": 3999,
        "discountedPrice": 349,
        "discountPercent": 65,
        "size": [
          { "name": "S", "quantity": 20 },
          { "name": "M", "quantity": 30 },
          { "name": "L", "quantity": 50 }
        ]
      },
      {
        "ID": "011",
        "Name": "Women Gown Brown Dress",
        "brand": "Miss Chase",
        "description": "Make a statement with this stylish purple A-line dress from ZWERLON.",
        "Image": product_4,
        "price": 2899,
        "discountedPrice": 899,
        "discountPercent": 68,
        "size": [
          { "name": "S", "quantity": 20 },
          { "name": "M", "quantity": 30 },
          { "name": "L", "quantity": 50 }
        ]
      },
];
export default data_product;