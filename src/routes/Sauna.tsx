import NPC from "../components/NPC";
import User from "../components/User"

export default function Sauna() {
  return (
    <>
      <h2>welcome to the sauna!</h2>
      <button>exit</button>
      <button>reset</button>
      <User />
      <NPC id={1} />
      <NPC id={2} />
      <NPC id={3} />
    </>
  );
}
