import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const WinesByRegion = () => {
  return (
    <Layout>
      <section className="bg-gray-50 dark:bg-gray-900 font-serif">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                WINES BY REGION UNDER CONSTRUCTION 😵
              </h1>
              <Link to="/">
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 py-2 px-4 border hover:bg-red-700 mt-6"
                >
                  Home Page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WinesByRegion;
