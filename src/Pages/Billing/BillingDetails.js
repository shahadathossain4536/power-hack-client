import React, { useEffect, useState } from "react";
import BillingDetail from "./BillingDetail";

const BillingDetails = () => {
  const [BillerDetails, setBillerDetails] = useState([]);
  useEffect(() => {
    fetch("billing.json")
      .then((res) => res.json())
      .then((data) => setBillerDetails(data));
  }, []);

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th>BillerId</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Paid Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          {BillerDetails.map((BillerDetail) => (
            <BillingDetail BillerDetail={BillerDetail}></BillingDetail>
          ))}
        </table>
      </div>
    </div>
  );
};

export default BillingDetails;
