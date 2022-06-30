import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import search from "../../assets/magnifying-glass-solid.svg";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const UpdateBillingData = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [billData, setBillData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/billing-list/${id}`)
      .then((res) => res.json())
      .then((data) => setBillData(data));
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const uri = `http://localhost:5000/update-billing/${id}`;
    console.log(uri);
    fetch(uri, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        navigate(`/`);
        console.log(data);
      });

    // reset();
  };
  return (
    <div class="w-96 px-5 mx-auto">
      <div class="">
        {/* react hook from */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Biller ID Start */}
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Biller ID</span>
            </label>
            <input
              value={billData.billerId}
              type="text"
              placeholder="Biller ID"
              class="input input-bordered w-full font-bold"
              {...register("billerId", { required: true })}
            />
            <label class="label">
              <span class="label-text-alt text-red-500">
                {errors.billerId?.type === "required" &&
                  "Biller Id is required"}
              </span>
            </label>
          </div>
          {/* Biller ID End */}
          {/* Biller Name Start */}
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Biller Name</span>
            </label>
            <input
              defaultValue={billData.billerName}
              type="text"
              placeholder="Biller Name"
              class="input input-bordered w-full font-bold"
              {...register("billerName", { required: true })}
            />
            <label class="label">
              <span class="label-text-alt text-red-500">
                {errors.billerName?.type === "required" &&
                  "Biller name is required"}
              </span>
            </label>
          </div>
          {/* Biller Name End */}
          {/* Biller Email Start */}
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Biller Email</span>
            </label>
            <input
              defaultValue={billData.billerEmail}
              type="text"
              placeholder="Biller Email"
              class="input input-bordered w-full max-full font-bold"
              {...register("billerEmail", { required: true })}
            />
            <label class="label">
              <span class="label-text-alt text-red-500">
                {errors.billerEmail?.type === "required" &&
                  "Biller Email is required"}
              </span>
            </label>
          </div>
          {/* Biller Email End */}
          {/* Biller Phone Start */}
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Biller Phone Number</span>
            </label>
            <input
              defaultValue={billData.billerPhone}
              type="text"
              placeholder="Biller Phone Number"
              class="input input-bordered w-full max-full font-bold"
              {...register("billerPhone", {
                required: {
                  value: true,
                  message: "Biller Phone Number is required",
                },
                pattern: {
                  value: /(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/,
                  message: "Please use Bangladeshi mobile number",
                },
              })}
            />
            <label class="label">
              {errors.billerPhone?.type === "required" && (
                <span class="label-text-alt text-red-600">
                  {errors?.billerPhone?.message}
                </span>
              )}
              {errors.billerPhone?.type === "pattern" && (
                <span class="label-text-alt text-red-600">
                  {errors?.billerPhone?.message}
                </span>
              )}
            </label>
          </div>
          {/* Biller Phone End */}
          {/* Biller PAID AMOUNT Start */}
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Bill Amount</span>
            </label>
            <input
              defaultValue={billData.amount}
              type="text"
              placeholder="Bill Amount"
              class="input input-bordered w-full max-full font-bold"
              {...register("amount", { required: true })}
            />
            <label class="label">
              <span class="label-text-alt text-red-500">
                {errors.amount?.type === "required" &&
                  "Paid Amount is required"}
              </span>
            </label>
          </div>
          {/* Biller PAID AMOUNT End */}

          {/* <input />
              {errors.firstName?.type === "required" &&
                "First name is required"}

              <input {...register("lastName", { required: true })} />
              {errors.lastName && <p>Last name is required</p>}

              <input
                {...register("mail", { required: "Email Address is required" })}
              />
              <p>{errors.mail?.message}</p> */}

          <input class="btn w-full " type="submit" value="Update"></input>
        </form>
        {/* react hook from */}
      </div>
    </div>
  );
};

export default UpdateBillingData;
