import React from "react";
import FormBilling from "./FormBilling";
import InfoBill from "./InfoBill";

function BillingDetails() {
  return (
    <div className="billing_details">
      <div className="container row mx-auto justify-content-between mt-5">
        <div className="col-lg-6 my-lg-4 py-lg-4 d-flex flex-column">
          <h2 className="fw-bold text-uppercase">Billing Details</h2>
          <FormBilling />
        </div>
        <InfoBill />
      </div>
    </div>
  );
}

export default BillingDetails;
