import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { SIGNUP_USER } from "../gqlOperations/mutations";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [signUpUser, { data, loading, error }] = useMutation(SIGNUP_USER);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    signUpUser({
      variables: {
        newUser: formData,
      },
    });
  };

  if (loading) return <h1>Loading ....</h1>;
  if (error) {
    console.log(error.message);
  }
  console.log("iser=>>>>", data);
  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}
      {data && data?.signUpUser && (
        <div className="green card-panel">
          {data?.signUpUser.firstName} is signUp
        </div>
      )}
      <h5>Signup!!</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          required
        />
        <button className="btn #673ab7 deep-purple" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
