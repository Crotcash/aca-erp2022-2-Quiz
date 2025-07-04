import Quiz from "./components/Quiz";
import AuthForm from "./components/AuthForm";
import { useAuth } from "./components/AuthContext";
import { logout } from "./auth";
import "./App.css"; 
function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="app-container">
      {}
      <div className="app-header">
        <h1>ACA Quiz App</h1>
        {user && (
          <div className="top-right">
            <span>Welcome, {user.email}!</span>
            <button onClick={logout} className="logout-btn">Logout</button>
          </div>
        )}
      </div>

      {}
      <div className="app-content">
        {user ? <Quiz /> : <AuthForm />}
      </div>
    </div>
  );
}

export default App;
