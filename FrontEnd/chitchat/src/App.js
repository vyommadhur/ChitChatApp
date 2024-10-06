import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./containers/LoginForm";

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
