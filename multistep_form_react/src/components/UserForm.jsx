import React from "react";

const UserForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <h2>
        <div className="form-control">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
            required
            value={data.name || ""}
            onChange={(e) => updateFieldHandler("name", e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu Email"
            required
            value={data.email || ""}
            onChange={(e) => updateFieldHandler("email", e.target.value)}
          />
        </div>
      </h2>
    </div>
  );
};

export default UserForm;
