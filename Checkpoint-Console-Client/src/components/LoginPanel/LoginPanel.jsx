import React from "react";

function LoginPanel() {
  const handelSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    
    const {token, operator} = await response.json()
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="username"></label>
        <input type="text" name="username" />
        <label htmlFor="password"></label>
        <input type="text" name="password" />
        <input type="submit" value={"Login"} />
      </form>
    </div>
  );
}

export default LoginPanel;
