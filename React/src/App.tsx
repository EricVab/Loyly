import { Link } from "react-router";
import Shop from "./components/Shop";
import User from "./components/User";

function App() {
  return (
    <>
      <Link to="/sauna">
        <button>go to sauna</button>
      </Link>
      <User />
      <Shop />
    </>
  );
}

export default App;
