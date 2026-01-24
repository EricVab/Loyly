import { Link } from "react-router";
import Shop from "./components/Shop"

function App() {
  return (
    <>
      <h1>loyly</h1>
      <Link to="/sauna">
        <button>
          go to sauna
        </button>
      </Link>
      <Shop />
      <div>
        <strong>How to play:</strong>
        <ul>
          <li>Go in the sauna and try to outlast all other NPCs.</li>
          <li>Remember to exit the sauna before your stamina runs out or you will faint!</li>
          <li>Outlasting other NPCs will give you money which you can spend on items in the store.</li>
          <li>Smacking NPCs with a birch whisk will lower their stamina and is free!</li>
          <table>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Effect</th>
            </tr>
            <tr>
              <td>Water</td>
              <th>Free</th>
              <td>Throw water on the hot coals, everyone in the sauna takes a random amount of damage</td>
            </tr>
            <tr>
              <td>Beer</td>
              <th>5</th>
              <td>Drink beer to make you numb and lower your stamina drain rate</td>
            </tr>
            <tr>
              <td>Wood</td>
              <th>Free</th>
              <td>Add wood to the stove increasing the temperaturue in the sauna, increases stamina drain rate for all</td>
            </tr>
            <tr>
              <td>Ice Cream</td>
              <th>5</th>
              <td>Cold treat in the sauna to restore your stamina</td>
            </tr>
            <tr>
              <td>Hat</td>
              <th>10</th>
              <td>Wear a proper sauna hat, you take less damage when throwing water on the stones</td>
            </tr>
            <tr>
              <td>Plunge</td>
              <th>2</th>
              <td>Take a cold plunge before entering the sauna, increases your stamina before entering the sauna</td>
            </tr>
            <tr>
              <td>Xray</td>
              <th>5</th>
              <td>Allows you to seee the remaining stamina of other NPCs</td>
            </tr>
          </table>
        </ul>
      </div>
    </>
  );
}

export default App
