import React from "react";
import Layout from "../components/Layout";
import ProductScreen from "./ProductScreen";
import productList from "../components/Data/Data";

const HomeScreen = () => {
  return (
    <Layout>
      {productList.map((product) => (
        <ProductScreen key={product.id} productData={product} />
      ))}
    </Layout>
  );
};

export default HomeScreen;
