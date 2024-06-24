import product_1 from "./M_Product_13.jpg"
import product_2 from "./W_Product_11.jpg"
import product_3 from "./M_Product_3.jpg"
import product_4 from "./C_Product_14.jpg"
import product_5 from "./W_Product_15.jpg"
import product_6 from "./W_Product_3.jpg"
import product_7 from "./C_Product_10.jpg"
import product_8 from "./M_Product_12.jpg"

let new_Collections = 
    [
        {
            "ID": "001",
            "Name": "Women's Skinny Jeans",
            "Category": "Women",
            "Image":product_2,
            "price": 34.99,
            "discountedPrice": 44.99,
            "description": "Make a statement with this stylish purple A-line dress from ZWERLON. Made with high-quality fabric occasion.",
            "discountPersent": 82,
            "size": [
              {
                "name": "S",
                "quantity": 20
              },
              {
                "name": "M",
                "quantity": 30
              },
              {
                "name": "L",
                "quantity": 50
              }
            ],
            "brand": "MADAME",
            "color": "White",
            
          },
          {
            "ID": "002",
            "Name": "Women's Skinny Jeans",
            "Category": "Women",
            "Image": product_5,
            "price": 34.99,
            "discountedPrice": 44.99,
            "description": "Make a statement with this stylish purple A-line dress from ZWERLON.",
            "size": [
              {
                "name": "S",
                "quantity": 20
              },
              {
                "name": "M",
                "quantity": 30
              },
              {
                "name": "L",
                "quantity": 50
              }
            ],
            "brand": "MADAME",
            "color": "White"
          },
          {
            "ID": "003",
            "Name": "Women Asymmetric Pink Dress",
            "Category": "Women",
            "Image": product_6,
            "price": 2499,
            "discountedPrice": 1299,
            "discountPersent": 50,
            "size": [
              {
                "name": "S",
                "quantity": 20
              },
              {
                "name": "M",
                "quantity": 30
              },
              {
                "name": "L",
                "quantity": 50
              }
            ],
            "brand": "MADAME",
            "description": "Stylish purple A-line dress from ZWERLON. Made with high-quality fabric.",
          },
          {
            "ID": "012",
            "Name": "Men's Crew Neck T-Shirt",
            "Category": "Men",
            "Image": product_1,
            "price": 19.99,
            "discountedPrice": 14.99,
            "discountPersent": 25,
            "size": [
              { "name": "S", "quantity": 20 },
              { "name": "M", "quantity": 30 },
              { "name": "L", "quantity": 50 }
            ],
            "brand": "Adidas",
            "description": "Classic crew neck t-shirt for men. Made from soft and breathable fabric."
          },
          {
            "ID": "013",
            "Name": "Men's Casual Leather Shoes",
            "Category": "Men",
            "Image": product_3,
            "price": 69.99,
            "discountedPrice": 59.99,
            "discountPersent": 14,
            "size": [
              { "name": "S", "quantity": 20 },
              { "name": "M", "quantity": 30 },
              { "name": "L", "quantity": 50 }
            ],
            "brand": "Clarks",
            "description": "Stylish casual leather shoes for men. Perfect for everyday wear."
          },
          {
            "ID": "014",
            "Name": "Men's Formal Dress Shoes",
            "Category": "Men",
            "Image": product_8,
            "price": 99.99,
            "discountedPrice": 79.99,
            "discountPersent": 20,
            "size": [
              { "name": "S", "quantity": 20 },
              { "name": "M", "quantity": 30 },
              { "name": "L", "quantity": 50 }
            ],
            "brand": "Steve Madden",
            "description": "Classic formal dress shoes for men. Ideal for formal occasions and office wear."
          },
        
          {
            "ID": "029",
            "Name": "Kids' Denim Jacket",
            "Category": "kid",
            "Image": product_4,
            "price": 29.99,
            "discountedPrice": 24.99,
            "discountPersent": 17,
            "size": [
              { "name": "XS", "quantity": 20 },
              { "name": "S", "quantity": 30 },
              { "name": "M", "quantity": 40 }
            ],
            "brand": "Gap Kids",
            "description": "Stylish and versatile denim jacket for kids. Features classic design and adjustable waist tabs for the perfect fit."
          },
          {
            "ID": "030",
            "Name": "Kids' Tutu Skirt",
            "Category": "kid",
            "Image": product_7,
            "price": 19.99,
            "discountedPrice": 14.99,
            "discountPersent": 25,
            "size": [
              { "name": "XS", "quantity": 20 },
              { "name": "S", "quantity": 30 },
              { "name": "M", "quantity": 40 }
            ],
            "brand": "Gymboree",
            "description": "Adorable tutu skirt for kids. Features layers of tulle and a comfortable elastic waistband, perfect for dress-up play and special occasions."
          }, 
    ]
    
export default new_Collections;