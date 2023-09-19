import React from "react";
import "../styles/globals.css";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
function App({ Component, pageProps }) {
  return (
    // Adding state context means we want to pass data from StateContext into all the components.
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default App;
