import { Link } from "react-router";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <Link to="/sauna">
        <button>go to sauna</button>
      </Link>
      <Shop />
    </>
  );
}

export default App;
