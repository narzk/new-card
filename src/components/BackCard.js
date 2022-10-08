import bc from "../assets/bg-card-back.png";

export default function BackCard({ cvc }) {
  return (
    <>
      <img src={bc} />
      <div>{cvc}</div>
    </>
  );
}
