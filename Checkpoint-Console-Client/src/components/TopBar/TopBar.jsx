import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

function TopBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { operator } = useContext(AuthContext);

  return (
    <div>
      <h3>Welcome - {operator.username}!</h3>
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
