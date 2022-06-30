import React from "react";

const BillingDetail = ({ BillerDetail }) => {
  const { billerId, name, email, phone, paidAmount } = BillerDetail;
  return (
    <tr>
      <th>{billerId}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{paidAmount}</td>
      <td>
        <div className="flex">
          <button class="btn btn-xs mr-2">Edit</button>
          <button class="btn btn-error text-white btn-xs">Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default BillingDetail;
