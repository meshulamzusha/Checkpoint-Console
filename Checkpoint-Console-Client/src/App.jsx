import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { LoginPanel } from "./components/LoginPanel/LoginPanel";

function App() {
  return (
    <AuthProvider>
      <LoginPanel />
    </AuthProvider>
  );
}

export default App;
