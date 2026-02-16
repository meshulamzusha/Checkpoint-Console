import { validationResult } from "express-validator";
import service from "./auth.service.js";

export const login = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;
  const operator = service.login(username, password);

  if (operator) {
    const token = service.generateToken(operator);

    return res.status(200).json({
      ok: true,
      code: 200,
      message: "You have successfully connected.",
      token: token,
      operator: { id: operator.id, name: operator.username, role: operator.role },
    });
  }

  return res.status(401).json({
    ok: false,
    code: 401,
    message: "This user is not registered",
  });
};
