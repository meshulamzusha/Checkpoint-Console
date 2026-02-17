import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [operator, setOperator] = useState();
  const [token, setToken] = useState();

  return (
    <AuthContext value={{ operator, setOperator, token, setToken }}>
      {children}
    </AuthContext>
  );
};
