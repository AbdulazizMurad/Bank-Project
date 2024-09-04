// import logo from "./logo.svg";
import "./App.css";
// import Login from "./Pages/Login";
// import Home from "./Pages/Home";
import UserContext from "./context/userContext";
import Register from "./Pages/Register";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    setUser(checkToken());
  }, []);
  return (
   
    <div>
      <Register />
    </div>
  );
}

export default App;
