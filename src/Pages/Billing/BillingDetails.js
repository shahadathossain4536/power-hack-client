import React, { useEffect, useState } from "react";
import BillingDetail from "./BillingDetail";
import { useQuery } from "react-query";

const BillingDetails = () => {
  const [BillerDetails, setBillerDetails] = useState([]);
  //   useEffect(() => {
  //     fetch("http://localhost:5000/billing-list")
  //       .then((res) => res.json())
  //       .then((data) => setBillerDetails(data));
  //   }, []);

  const { data, isLoading, refetch } = useQuery("data", () =>
    fetch("http://localhost:5000/billing-list", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setBillerDetails(data);
        refetch();
      })
  );
  console.log(BillerDetails);
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
