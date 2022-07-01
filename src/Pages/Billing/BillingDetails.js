import React, { useEffect, useState } from "react";
import BillingDetail from "./BillingDetail";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";

const BillingDetails = () => {
  const [BillerDetails, setBillerDetails] = useState([]);
  useEffect(() => {
    fetch("https://protected-reef-52869.herokuapp.com/billing-list")
      .then((res) => res.json())
      .then((data) => setBillerDetails(data));
  }, []);
  const { refetch } = useQuery();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch("https://protected-reef-52869.herokuapp.com/add-billing", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        refetch(true);
        console.log(data);
      });

    // reset();
  };
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
      <section className="grid grid-cols-2 bg-base-300 my-10 py-3 px-3">
        <div className="flex justify-evenly">
          <h2>Billing</h2>
          <input
            type="text"
            placeholder="Search"
            class="input input-sm input-bordered"
          />
        </div>
        <div className="flex justify-end">
          <label for="add-bill-modal" class="btn btn-sm">
            Add New Bill
          </label>
          <input type="checkbox" id="add-bill-modal" class="modal-toggle" />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <label
                for="add-bill-modal"
                class="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>

              {/* react hook from */}
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Biller ID Start */}
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Biller ID</span>
                  </label>
                  <input
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
                <div class="form-control w-full ">
                  <label class="label">
                    <span class="label-text">Biller Email</span>
                  </label>
                  <input
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

                <input class="btn w-full " type="submit" value="Submit"></input>
              </form>
              {/* react hook from */}

              <div>
                <label for="add-bill-modal" class="btn">
                  Yay!
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
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
