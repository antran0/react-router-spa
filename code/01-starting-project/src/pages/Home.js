import React from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        {/*
          The Link component is the react-router-dom equivalent of the anchor
          <a> tag in HTML. It uses an anchor tag under the hood and will update
          the address bar with the new path as usual. However, the Link component
          listens to clicks and prevents sending a new request to the server, thus
          avoiding having to reload the page.
          
          Equivalent to:
            <a href="/products">the list of products</a>
         */}
        Go to <Link to="/products">the list of products</Link>.
      </p>
    </>
  );
};

export default HomePage;
