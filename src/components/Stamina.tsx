import { useState } from "react";
import "../styles/stamina.css";

export default function Stamina() {
  const [health, setHealth] = useState<number>(100);

  return (
    <div className="ly-stamina">
      <div className="ly-stamina__bar" style={{ width: `${health}%` }}></div>
    </div>
  );
}
