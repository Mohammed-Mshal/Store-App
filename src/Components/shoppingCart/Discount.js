import React from "react";
import "./discount.css";
function Discount() {
  return (
    <div className="discount text-center text-md-start">
      <h2>DISCOUNT</h2>
      <p>
        To apply your discount enter number of your coupon and press 'submit'
        button
      </p>
      <form
        className="row justify-content-center justify-content-md-between mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type={`text`}
          placeholder={`Enter Your Coupon`}
          className={`px-4 py-2 border_red rounded-2  my-3 my-md-0 col-md-8 col-10`}
        />
        <input
          type={`submit`}
          value={`submit`}
          className={`btn btn-secondary my-3 my-md-0 py-2 col-md-3 col-4`}
        />
      </form>
    </div>
  );
}

export default Discount;
