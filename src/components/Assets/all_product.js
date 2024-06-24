import p1_img from "./C_Product_1.jpg"
import p2_img from "./C_Product_2.jpg"
import p3_img from "./C_Product_3.jpg"
import p4_img from "./C_Product_4.jpg"
import p5_img from "./C_Product_5.jpg"
import p6_img from "./C_Product_6.jpg"
import p7_img from "./C_Product_7.jpg"
import p8_img from "./C_Product_15.jpg"
import p9_img from "./C_Product_9.jpg"
import p10_img from "./C_Product_10.jpg"
import p11_img from "./C_Product_13.jpg"
import p12_img from "./C_Product_12.jpg"
import p13_img from "./W_Product_1.jpg"
import p14_img from "./W_Product_2.jpg"
import p15_img from "./W_Product_3.jpg"
import p16_img from "./W_Product_4.jpg"
import p17_img from "./W_Product_5.jpg"
import p18_img from "./W_Product_17.jpg"
import p19_img from "./W_Product_7.jpg"  
import p20_img from "./W_Product_9.jpg"
import p22_img from "./W_Product_10.jpg"
import p23_img from "./W_Product_8.jpg"
import p21_img from "./W_Product_11.jpg"
import p24_img from "./W_Product_12.jpg"
import p25_img from "./M_Product_1.jpg"
import p26_img from "./M_Product_2.jpg"
import p27_img from "./M_Product_3.jpg"
import p28_img from "./M_Product_4.jpg"
import p29_img from "./M_Product_5.jpg"
import p30_img from "./M_Product_6.jpg"
import p31_img from "./M_Product_7.jpg"
import p32_img from "./M_Product_8.jpg"
import p33_img from "./M_Product_9.jpg"
import p34_img from "./M_Product_10.jpg"
import p35_img from "./M_Product_11.jpg"
import p36_img from "./M_Product_12.jpg"




let all_product=
[
  
    {
      "ID": "001",
      "Name": "Women's Skinny Jeans",
      "Category": "Women",
      "Image":p13_img,
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
      "Image": p14_img,
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
      "Image": p15_img,
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
      "ID": "004",
      "Name": "Women Maxi Blue Dress",
      "Category": "Women",
      "Image": "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/1/h/g/m-pw333-purshottam-wala-original-imag8zf6ybkmhehy-bb.jpeg?q=70",
      "price": 1899,
      "discountedPrice": 341,
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
      "brand": "Daevish",
      "description": " A-line dress from ZWERLON. Made with high-quality fabric, this dress is perfect for any occasion."
    },
    {
      "ID": "005",
      "Name": "Women A-line Purple Dress",
      "Category": "Women",
      "Image": "https://rukminim1.flixcart.com/image/612/612/xif0q/dress/z/s/i/s-a1-zwerlon-original-imagn9uycxbhshur.jpeg?q=70",
      "price": 1999,
      "discountedPrice": 499,
      "discountPersent": 75,
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
      "brand": "ZWERLON",
      "description": "Make high-quality fabric, this dress is perfect for any occasion."
    },
    {
      "ID": "006",
      "Name": "Women Fit and Flare Black Dress",
      "Category": "Women",
      "Image": "https://rukminim1.flixcart.com/image/612/612/xif0q/dress/q/7/v/s-pwd322-purshottam-wala-original-imagm7ypaavduvnm.jpeg?q=70",
      "price": 2099,
      "discountedPrice": 359,
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
      "brand": "Purshottam Wala",
      "description": "This dress is perfect for any occasion."
    },
    {
      "ID": "007",
      "Name": "Women Fit and Flare Blue Dress",
      "Category": "Women",
      "Image": "https://rukminim1.flixcart.com/image/612/612/xif0q/dress/e/a/p/s-pwd322-purshottam-wala-original-imagm6ywr7vz95sz.jpeg?q=70",
      "price": 2099,
      "discountedPrice": 359,
      "discountPersent": 80,
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
      "brand": "Purshottam Wala",
      "description": " A-line dress from ZWERLON. Made with high-quality fabric'",
    },

    {
    "ID": "008",
    "Name": "Women Fit and Flare Yellow Dress",
    "Category": "Women",
    "Image": "https://rukminim1.flixcart.com/image/612/612/l3xcr680/dress/p/l/3/l-22few17901-118335-w-original-imagexn4zahxcu3a.jpeg?q=70",
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
    "Image": p16_img,
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
    "Image": "https://rukminim1.flixcart.com/image/612/612/k6xxua80/dress/z/z/3/l-286-shivay-style-original-imafp9yphyyf9ypv.jpeg?q=70",
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
    "Image": p16_img,
    "price": 2899,
    "discountedPrice": 899,
    "discountPercent": 68,
    "size": [
      { "name": "S", "quantity": 20 },
      { "name": "M", "quantity": 30 },
      { "name": "L", "quantity": 50 }
    ]
  },
  {
    "ID": "012",
    "Name": "Women Ruffled Brown Dress",
    "brand": "Selvia",
    "description": "Made with high-quality fabric, this dress is perfect for any occasion.",
    "Category": "Women",
    "Image": p17_img,
    "price": 2063,
    "discountedPrice": 349,
    "discountPercent": 83,
    "size": [
      { "name": "S", "quantity": 20 },
      { "name": "M", "quantity": 30 },
      { "name": "L", "quantity": 50 }
    ]
  },
  {
    "ID": "013",
    "Name": "Women Ruffled Brown Dress",
    "brand": "Selvia",
    "description": "Made with high-quality fabric, this dress is perfect for any occasion.",
    "Category": "Women",
    "Image": p19_img,
    "price": 2063,
    "discountedPrice": 349,
    "discountPercent": 83,
    "size": [
      { "name": "S", "quantity": 20 },
      { "name": "M", "quantity": 30 },
      { "name": "L", "quantity": 50 }
    ]
  },
     {
    "ID": "008",
    "Name": "Men's Slim Fit Denim Jeans",
    "Category": "Men",
    "Image": p25_img,
    "price": 49.99,
    "discountedPrice": 39.99,
    "discountPersent": 20,
    "size": [
      { "name": "S", "quantity": 20 },
      { "name": "M", "quantity": 30 },
      { "name": "L", "quantity": 50 }
    ],
    "brand": "Levi's",
    "description": "Classic denim jeans for men. Slim fit design for a modern look."
  },
  {
    "ID": "009",
    "Name": "Men's Casual Slim Fit Shirt",
    "Category": "Men",
    "Image":p26_img,
    "price": 29.99,
    "discountedPrice": 24.99,
    "discountPersent": 17,
    "size": [
      { "name": "S", "quantity": 20 },
      { "name": "M", "quantity": 30 },
      { "name": "L", "quantity": 50 }
    ],
    "brand": "Tommy Hilfiger",
    "description": "Casual slim fit shirt for men. Perfect for everyday wear."
  },
  {
    "ID": "010",
    "Name": "Men's Formal Slim Fit Suit",
    "Category": "Men",
    "Image": p27_img,
    "price": 199.99,
    "discountedPrice": 149.99,
    "discountPersent": 25,
    "size": [
      { "name": "S", "quantity": 20 },
      { "name": "M", "quantity": 30 },
      { "name": "L", "quantity": 50 }
    ],
    "brand": "Calvin Klein",
    "description": "Formal slim fit suit for men. Perfect for weddings and formal occasions."
  },
  {
    "ID": "011",
    "Name": "Men's Sports Jogger Pants",
    "Category": "Men",
    "Image": p28_img,
    "price": 39.99,
    "discountedPrice": 29.99,
    "discountPersent": 25,
    "size": [
      { "name": "S", "quantity": 20 },
      { "name": "M", "quantity": 30 },
      { "name": "L", "quantity": 50 }
    ],
    "brand": "Nike",
    "description": "Comfortable sports jogger pants for men. Ideal for workouts and casual wear."
  },
  {
    "ID": "012",
    "Name": "Men's Crew Neck T-Shirt",
    "Category": "Men",
    "Image": p29_img,
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
    "Image": p30_img,
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
    "Image": p31_img,
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
    "ID": "015",
    "Name": "Men's Hooded Sweatshirt",
    "Category": "Men",
    "Image":p32_img,
    "price": 49.99,
    "discountedPrice": 39.99,
    "discountPersent": 20,
    "size": [
      { "name": "S", "quantity": 20 },
      { "name": "M", "quantity": 30 },
      { "name": "L", "quantity": 50 }
    ],
    "brand": "Gap",
    "description": "Comfortable hooded sweatshirt for men. Perfect for casual outings and chilly weather."
  },
  {
    "ID": "016",
    "Name": "Men's Slim Fit Chinos",
    "Category": "Men",
    "Image": p33_img,
    "price": 39.99,
    "discountedPrice": 29.99,
    "discountPersent": 25,
    "size": [
      { "name": "S", "quantity": 20 },
      { "name": "M", "quantity": 30 },
      { "name": "L", "quantity": 50 }
    ],
    "brand": "Dockers",
    "description": "Classic slim fit chinos for men. Versatile and stylish, suitable for both casual and semi-formal occasions."
  },
  {
    "ID": "017",
    "Name": "Men's Casual Polo Shirt",
    "Category": "Men",
    "Image": p34_img,
    "price": 29.99,
    "discountedPrice": 24.99,
    "discountPersent": 17,
    "size": [
      { "name": "S", "quantity": 20 },
      { "name": "M", "quantity": 30 },
      { "name": "L", "quantity": 50 }
    ],
    "brand": "Ralph Lauren",
    "description": "Classic polo shirt for men. Made from soft and breathable fabric, perfect for everyday wear."
  },
  {
    "ID": "018",
    "Name": "Men's Casual Sneakers",
    "Category": "Men",
    "Image": p35_img,
    "price": 59.99,
    "discountedPrice": 49.99,
    "discountPersent": 17,
    "size": [
      { "name": "S", "quantity": 20 },
      { "name": "M", "quantity": 30 },
      { "name": "L", "quantity": 50 }
    ],
    "brand": "Converse",
    "description": "Stylish and comfortable casual sneakers for men. Perfect for everyday wear and casual outings."
  },
  {
    "ID": "019",
    "Name": "Men's Classic Crewneck Sweater",
    "Category": "Men",
    "Image": p36_img,
    "price": 39.99,
    "discountedPrice": 29.99,
    "discountPersent": 25,
    "size": [
      { "name": "S", "quantity": 20 },
      { "name": "M", "quantity": 30 },
      { "name": "L", "quantity": 50 }
    ],
    "brand": "H&M",
    "description": "Classic crewneck sweater for men. Made from soft and cozy fabric, perfect for layering in colder weather."
  },
  {
    "ID": "020",
    "Name": "Kids' Graphic T-Shirt",
    "Category": "kid",
    "Image": p10_img,
    "price": 14.99,
    "discountedPrice": 9.99,
    "discountPersent": 33,
    "size": [
      { "name": "XS", "quantity": 20 },
      { "name": "S", "quantity": 30 },
      { "name": "M", "quantity": 40 }
    ],
    "brand": "Old Navy",
    "description": "Colorful and fun graphic t-shirt for kids. Made from soft cotton fabric, perfect for playtime and everyday wear."
  },
  {
    "ID": "021",
    "Name": "Kids' Denim Jeans",
    "Category": "kid",
    "Image": p2_img,
    "price": 24.99,
    "discountedPrice": 19.99,
    "discountPersent": 20,
    "size": [
      { "name": "XS", "quantity": 20 },
      { "name": "S", "quantity": 30 },
      { "name": "M", "quantity": 40 }
    ],
    "brand": "Carter's",
    "description": "Classic denim jeans for kids. Durable and comfortable, suitable for both casual and semi-formal occasions."
  },
  {
    "ID": "022",
    "Name": "Kids' Printed Dress",
    "Category":"kid",
    "Image": p3_img,
    "price": 29.99,
    "discountedPrice": 24.99,
    "discountPersent": 17,
    "size": [
      { "name": "XS", "quantity": 20 },
      { "name": "S", "quantity": 30 },
      { "name": "M", "quantity": 40 }
    ],
    "brand": "GAP Kids",
    "description": "Adorable printed dress for kids. Made from lightweight and breathable fabric, perfect for summer outings and parties."
  },
  {
    "ID": "023",
    "Name": "Kids' Puffer Jacket",
    "Category": "kid",
    "Image":p4_img,
    "price": 39.99,
    "discountedPrice": 29.99,
    "discountPersent": 25,
    "size": [
      { "name": "XS", "quantity": 20 },
      { "name": "S", "quantity": 30 },
      { "name": "M", "quantity": 40 }
    ],
    "brand": "The North Face",
    "description": "Warm and cozy puffer jacket for kids. Insulated design provides excellent protection against cold weather."
  },
  {
    "ID": "024",
    "Name": "Kids' Striped Sweater",
    "Category": "kid",
    "Image": p5_img,
    "price": 19.99,
    "discountedPrice": 14.99,
    "discountPersent": 25,
    "size": [
      { "name": "XS", "quantity": 20 },
      { "name": "S", "quantity": 30 },
      { "name": "M", "quantity": 40 }
    ],
    "brand": "H&M Kids",
    "description": "Cute and stylish striped sweater for kids. Made from soft and stretchy fabric, perfect for layering in cooler weather."
  },
  {
    "ID": "025",
    "Name": "Kids' Sneakers",
    "Category": "kid",
    "Image": p6_img,
    "price": 29.99,
    "discountedPrice": 24.99,
    "discountPersent": 17,
    "size": [
      { "name": "XS", "quantity": 20 },
      { "name": "S", "quantity": 30 },
      { "name": "M", "quantity": 40 }
    ],
    "brand": "Nike Kids",
    "description": "Sporty and comfortable sneakers for kids. Features cushioned sole for all-day comfort and support."
  },
  {
    "ID": "026",
    "Name": "Kids' Printed Leggings",
    "Category": "kid",
    "Image": p7_img,
    "price": 12.99,
    "discountedPrice": 9.99,
    "discountPersent": 23,
    "size": [
      { "name": "XS", "quantity": 20 },
      { "name": "S", "quantity": 30 },
      { "name": "M", "quantity": 40 }
    ],
    "brand": "Crazy 8",
    "description": "Fun and colorful printed leggings for kids. Made from stretchy and breathable fabric, perfect for active play."
  },
  {
    "ID": "027",
    "Name": "Kids' Hooded Jacket",
    "Category": "kid",
    "Image":p8_img,
    "price": 34.99,
    "discountedPrice": 24.99,
    "discountPersent": 29,
    "size": [
      { "name": "XS", "quantity": 20 },
      { "name": "S", "quantity": 30 },
      { "name": "M", "quantity": 40 }
    ],
    "brand": "Gap Kids",
    "description": "Versatile hooded jacket for kids. Features water-resistant fabric and cozy lining, perfect for outdoor adventures."
  },
  {
    "ID": "028",
    "Name": "Kids' Plaid Shirt",
    "Category": "kid",
    "Image": p9_img,
    "price": 22.99,
    "discountedPrice": 16.99,
    "discountPersent": 26,
    "size": [
      { "name": "XS", "quantity": 20 },
      { "name": "S", "quantity": 30 },
      { "name": "M", "quantity": 40 }
    ],
    "brand": "Carter's",
    "description": "Classic plaid shirt for kids. Made from soft and durable fabric, perfect for casual outings and family gatherings."
  },
  {
    "ID": "029",
    "Name": "Kids' Denim Jacket",
    "Category": "kid",
    "Image": p10_img,
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
    "Image": p11_img,
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
  }, {
    "ID": "024",
    "Name": "Kids' Striped Sweater",
    "Category": "kid",
    "Image": p12_img,
    "price": 19.99,
    "discountedPrice": 14.99,
    "discountPersent": 25,
    "size": [
      { "name": "XS", "quantity": 20 },
      { "name": "S", "quantity": 30 },
      { "name": "M", "quantity": 40 }
    ],
    "brand": "H&M Kids",
    "description": "Cute and stylish striped sweater for kids. Made from soft and stretchy fabric, perfect for layering in cooler weather."
  },
    
  ]
  export default all_product;

