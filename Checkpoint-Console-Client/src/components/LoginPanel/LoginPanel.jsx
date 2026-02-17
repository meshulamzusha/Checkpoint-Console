import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export function LoginPanel({onLogin}) {
  const { setOperator, setToken } = useContext(AuthContext);

  const login = async (credentials) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const { token, operator } = await response.json();

      setOperator(operator);
      setToken(token);
      onLogin(true)
      
    } catch (error) {
      console.log(error);
    }
  }

  const handelSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    login(formJson)
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" id="password" />
        <input type="submit" value={"Login"} />
      </form>
    </div>
  );
}
