import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      <p>
        {/*
          The 'relative' prop when used here with ".." determines if the link
          should take us back to "/products" or "/".
          
          Values:
            relative="path | route"
            - "route" value is the default and is relative to the route definitions.
              Using the "route" value would take us back to "/" which is the home page
              because that is the direct parent of the ProductDetailPage component
              as defined in the route definitions.

            - "path" value is relative to what the actual URL is. Here the URL of a
              ProductDetailPage component is /products/productId. Using the "path"
              value would correctly take is back to /products.
        */}
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetailPage;
