"use client";
// import React, { useActionState } from "react";
import Form from "next/form";
// import { submitUserForm } from "./actions";
// import { submitUserForm } from "./actions";

const RegisterForm = () => {
  //   const [state, actions, isLoading] = useActionState(submitUserForm, {
  //     email: "",
  //     password: "",
  //   });

  return (
    <div className="card">
      <legend className="fieldset-legend">Join Us</legend>
      <Form className="card card-actions card-title " action="martin">
        <input className="input" name="email" placeholder="Email" />
        <input className="input" name="password" placeholder="Passworld" />
        <button className="btn btn-info rounded-full " type="submit">
          {/* {isLoading ? "Registering..." : "Register"} */}
        </button>
      </Form>
    </div>
  );
};

export default RegisterForm;
