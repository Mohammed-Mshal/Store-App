import React from "react";
import "./FormQuestion.css";

function FormQuestion() {
  return (
    <form className="form_question mx-auto d-flex flex-column justify-content-center align-items-start">
      <input
        type={`email`}
        placeholder={`Enter Your E-mail`}
        className={`border_red  px-4 py-2 rounded-4 outline-0 mb-3 w-100`}
      />
      <input
        type={`text`}
        placeholder={`Enter Name`}
        className={`border_red  px-4 py-2 rounded-4 outline-0 mb-3 w-100`}
      />
      <textarea
        className="border_red  px-4 py-2 rounded-4 outline-0 mb-3 w-100"
        placeholder={`Your Question`}
        style={{ resize: `none` }}
        rows={`10`}
      ></textarea>
      <input type={`submit`} className={`btn btn-secondary px-5 mx-lg-0 mx-auto`} value={`SEND`}/>
    </form> 
  );
}

export default FormQuestion;
