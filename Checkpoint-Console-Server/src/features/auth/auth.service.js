import "dotenv/config"
import jwt from "jsonwebtoken";
import { operators } from "../../data/data.js";

const login = (username, password) => {
  const operator = operators.find(
    (o) => o.username == username && o.password == password,
  );

  return operator;
};

const generateToken = (operator) => {
  const token = jwt.sign(
    {
      operatorId: operator.id,
      name: operator.name,
      role: operator.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  return token;
};

export default {
  login,
  generateToken,
};
