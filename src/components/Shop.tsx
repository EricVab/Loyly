import { useState } from "react";

export default function Shop() {
  const [coins, setCoins] = useState<number>(0);

  function buyItem(item: ShopItem) {
    console.log("buy item", item);
  }

  return (
    <section>
      <h2>shop</h2>
      <h3>coins: {coins}</h3>
      <div>
        <button onClick={() => buyItem("WATER")}>water</button>
        <button onClick={() => buyItem("BEER")}>beer</button>
        <button onClick={() => buyItem("WOOD")}>wood</button>
        <button onClick={() => buyItem("ICE_CREAM")}>ice cream</button>
        <button onClick={() => buyItem("PLUNGE")}>plunge</button>
        <button onClick={() => buyItem("X_RAY")}>x-ray</button>
        <button onClick={() => buyItem("HAT")}>hat</button>
      </div>
    </section>
  );
}

type ShopItem =
  | "WATER"
  | "BEER"
  | "WOOD"
  | "ICE_CREAM"
  | "PLUNGE"
  | "X_RAY"
  | "HAT";
