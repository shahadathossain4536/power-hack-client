import React from "react";
import BillingDetails from "./BillingDetails";
import BillingHeader from "./BillingHeader";
import Pagination from "./Pagination";

const Billing = () => {
  return (
    <div>
      <BillingDetails></BillingDetails>
      <Pagination></Pagination>
    </div>
  );
};

export default Billing;
