import Stamina from "./Stamina";

export default function NPC(props: any) {
  const { id } = props;
  return (
    <>
      <h2>NPC {id}</h2>
      <Stamina />
    </>
  );
}
