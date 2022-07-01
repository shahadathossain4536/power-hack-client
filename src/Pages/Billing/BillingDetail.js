import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, queryFn } from "react-query";

const BillingDetail = ({ BillerDetail, BillerDetails, setBillerDetails }) => {
  const { _id, billerId, billerName, billerEmail, billerPhone, amount } =
    BillerDetail;
  const navigate = useNavigate();
  const editData = (id) => {
    navigate(`/update-billing-data/${id}`);
  };
  const { refetch } = useQuery(queryFn);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you went to delete");
    if (proceed) {
      console.log(id);
      const url = `http://localhost:5000/delete-billing/${id}`;
      fetch(url, {
        method: "DELETE",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = BillerDetails.filter(
              (BillerDetailDelete) => BillerDetailDelete._id !== id
            );
            setBillerDetails(remaining);
          }
        });
    }
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
          <button
            class="btn btn-error text-white btn-xs"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BillingDetail;
