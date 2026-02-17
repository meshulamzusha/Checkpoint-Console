import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { LoginPanel } from "./components/LoginPanel/LoginPanel";
import { ThemeProvider } from "./context/ThemeContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useState } from "react";
import SendMessage from "./components/SendMessage/SendMessage";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <ThemeProvider>
      <AuthProvider>
        <SendMessage/>
        {isLogin || <LoginPanel onLogin={setIsLogin} />}
        {isLogin && <Dashboard />}
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
