import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

export function TopBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { operator } = useContext(AuthContext);

  return (
    <div>
      <h3>Welcome - {operator.name}!</h3>
      <button
        onClick={() => {
          const nextTheme = theme == "light" ? "dark" : "light";
          setTheme(nextTheme);
        }}
      >
        Dark/Light
      </button>
    </div>
  );
}

export default TopBar;
