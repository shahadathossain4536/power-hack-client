import React from "react";
import { useNavigate } from "react-router-dom";
const BillingDetail = ({ BillerDetail }) => {
  const { _id, billerId, billerName, billerEmail, billerPhone, amount } =
    BillerDetail;
  const navigate = useNavigate();
  const editData = (id) => {
    navigate(`/update-billing-data/${id}`);
    console.log(id);
  };
  return (
    <tr>
      <th>{billerId}</th>
      <td>{billerName}</td>
      <td>{billerEmail}</td>
      <td>{billerPhone}</td>
      <td>{amount}</td>
      <td>
        <div className="flex">
          <button class="btn btn-xs mr-2 " onClick={() => editData(_id)}>
            Edit
          </button>
          <button class="btn btn-error text-white btn-xs">Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default BillingDetail;
