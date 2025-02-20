import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import Router from "./router/Router";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </div>
  );
}

export default App;
