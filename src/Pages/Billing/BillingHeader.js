import React from "react";

const BillingHeader = () => {
  return (
    <section className="grid grid-cols-2 bg-base-300 my-10 py-3 px-3">
      <div className="flex justify-evenly">
        <h2>Billing</h2>
        <div>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <label for="add-bill-modal" class="btn btn-sm">
          Add New Bill
        </label>
      </div>
    </section>
  );
};

export default BillingHeader;
