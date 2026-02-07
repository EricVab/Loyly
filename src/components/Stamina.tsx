import { useEffect, useState, Children } from "react";
import "../styles/stamina.css";

export default function Stamina() {
  const [stamina, setStamina] = useState<number>(100);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setStamina(prevStamina => {
  //       if (prevStamina == 0) {
  //         return 0;
  //       }
  //       return prevStamina - 1;
  //     })
  //   }, 100);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div className="ly-stamina">
        <div className="ly-stamina__bar" style={{ width: `${stamina}%` }}></div>
      </div>
    </>
  );
}
