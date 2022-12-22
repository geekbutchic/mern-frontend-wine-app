import React, { useState } from "react";
import { Link } from "react-router-dom";
//CONTEXT VERSION
// import React, { useContext } from "react";
// import { userContext } from "../context/userContext";
import sampleUserData from "../components/Data/Data-2";
import Layout from "../components/Layout";
//REDUX HOOK
import { useDispatch, useSelector } from "react-redux";
import { signInAction, signOutAction } from "../redux-state/userSlice";

const SignInPage = () => {
  //USE CONTEXT VERSION
  // const { user, signIn, signOut } = useContext(userContext);

  //USER REDUX VERSION
  const user = useSelector((state) => state.user);
  //DISPATCH AN ACTION
  const dispatch = useDispatch();

  const [signInForm, setSignInForm] = useState({
    email: "",
    password: ""
  });

  const onSubmit = () => {
    //DATA FOR CONTEXT VERSION
    // signInAction(sampleUserData);
    dispatch(signInAction(sampleUserData));
  };

  const handleSignOut = () => {
    dispatch(signOutAction());
  };

  if (user) {
    return (
      <Layout>
        <section className="bg-gray-50 dark:bg-gray-900 font-serif">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                  Welcome back {user.firstName} {user.lastName}
                </h1>
                <Link to="/">
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 py-2 px-4 border hover:bg-red-700 mt-6"
                  >
                    Home Page
                  </button>
                </Link>
                <Link to="/sign-in">
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 py-2 px-4 border hover:bg-red-700 mt-6"
                    onClick={handleSignOut}
                  >
                    Log Out
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div></div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-gray-50 dark:bg-gray-900 font-serif">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                LOGIN TO YOUR ACCOUNT
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@email.com"
                    onChange={(event) =>
                      signInForm({
                        ...setSignInForm,
                        email: event.target.value
                      })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(event) =>
                      signInForm({
                        ...setSignInForm,
                        password: event.target.value
                      })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 py-2 px-4 border hover:bg-red-700"
                  onClick={onSubmit}
                >
                  LOGIN
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                  Don’t have an account yet?{" "}
                  {/* <Link
                    to="/"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 "
                  >
                    
                  </Link> */}
                </p>
                <Link to="/sign-up">
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 py-2 px-4 border hover:bg-green-700 mt-6"
                  >
                    CREATE ACCOUNT
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SignInPage;
