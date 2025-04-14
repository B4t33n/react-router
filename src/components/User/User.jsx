import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="rounded-xl mt-7 bg-amber-200 p-10 space-y-6">
      <h1>{name}</h1>
      <p>{email}</p>
      <p>
        <small>no: {phone}</small>
      </p>
      <Link to={`/users/${id}`}>
        <button className="btn btn-primary">details</button>
      </Link>
    </div>
  );
};

export default User;
