import React from "react";
import Loader from "react-loader-spinner";

const WithSpinner = () => {
  return (
    <div className="loader mySpinner">
      <Loader type="Oval" color="#D02B87" height={100} width={100} />
      <p style={{ color: "#FFFFFF", width: "200px" }}>Fetching Movies...</p>
    </div>
  );
};

export default WithSpinner;

// const WithSpinner = (ComponentToRender) => ({ isLoading, ...otherProps }) => {
//   return isLoading ? (
//     <div className="mySpinner">
//       <Loader type="Oval" color="#D02B87" />
//     </div>
//   ) : (
//     <ComponentToRender {...otherProps} />
//   );
// };
