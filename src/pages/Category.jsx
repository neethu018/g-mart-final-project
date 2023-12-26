import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Category = ({ products }) => {
  const [showdata, setShowdata] = useState([]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const { category } = useParams();
  console.log("category : ", category);
  console.log("products : ", products);
  let filteredProducts;
//   if (category == "apples-pears") {
//     filteredProducts = [...products.apples,...products.pears];
//     // return filteredProducts
//     console.log("filteredProducts : ", filteredProducts);
//   }
  if (category === "apples-pears") {
    // Check if 'apples' and 'pears' properties exist in the products object
    if (products && products.apples && products.pears) {
      filteredProducts = [...products.apples, ...products.pears];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  } else if (category === "avacado-peach-plum") {
    // Check if 'apples' and 'pears' properties exist in the products object
    if (products && products.avacados && products.peaches&& products.nectarines) {
      filteredProducts = [...products.avacados, ...products.peaches,...products.nectarines];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "banana-melons-coconut") {
    // Check if 'apples' and 'pears' properties exist in the products object
    if (products && products.coconuts && products.melons && products.bananas) {
      filteredProducts = [...products.coconuts, ...products.melons,...products.bananas];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "cherries-berries-exotic-fruits") {
    // Check if 'apples' and 'pears' properties exist in the products object
    if (products && products.cherries && products.berries && products.dragonfruits) {
      filteredProducts = [...products.cherries, ...products.berries,...products.dragonfruits];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "citrus-mango-grapes") {
    // Check if 'apples' and 'pears' properties exist in the products object
    if (products && products.grapes && products.citrus) {
      filteredProducts = [...products.grapes, ...products.citrus];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "dates") {
    // Check if 'apples' and 'pears' properties exist in the products object
    if (products && products.wetdates) {
      filteredProducts = [...products.wetdates];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "gift-assorted-xl-packs") {
    // Check if 'apples' and 'pears' properties exist in the products object
    if (products && products.giftpacks) {
      filteredProducts = [...products.giftpacks];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "pomegranate-papaya-pineapple") {
    // Check if 'apples' and 'pears' properties exist in the products object
    if (products && products.pomegranates && products.papayas && products.pineapples) {
      filteredProducts = [...products.pineapples,...products.pomegranates,...products.papayas];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "seasonal-minor-fruits") {
    // Check if 'apples' and 'pears' properties exist in the products object
    if (products && products.guavas && products.custardapples) {
      filteredProducts = [...products.guavas,...products.custardapples];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else {
    // Handle other categories or render an appropriate message
    return <div>Invalid category specified.</div>;
  }
  filteredProducts = shuffleArray(filteredProducts);

  return (
    <Container className="product-list-container">
      <h3>Premiumfruits</h3>
      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.productId} xs={12} md={6} lg={4}>
            <ProductCard product={product} category={category}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
