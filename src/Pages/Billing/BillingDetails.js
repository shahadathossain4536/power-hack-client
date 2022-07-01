import React, { useEffect, useState } from "react";
import BillingDetail from "./BillingDetail";
import { useQuery } from "react-query";

const BillingDetails = () => {
  const [BillerDetails, setBillerDetails] = useState([]);
  useEffect(() => {
    fetch("https://protected-reef-52869.herokuapp.com/billing-list")
      .then((res) => res.json())
      .then((data) => setBillerDetails(data));
  }, []);

  // const { data, isLoading, refetch } = useQuery("data", () =>
  //   fetch("https://protected-reef-52869.herokuapp.com/billing-list", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBillerDetails(data);
  //       refetch();
  //     })
  // );
  var a = console.log([...BillerDetails].reverse());
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
          {[...BillerDetails].reverse().map((BillerDetail) => (
            <BillingDetail
              BillerDetail={BillerDetail}
              setBillerDetails={setBillerDetails}
            ></BillingDetail>
          ))}
        </table>
      </div>
    </div>
  );
};

export default BillingDetails;
