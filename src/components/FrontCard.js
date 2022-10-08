import fc from "../assets/bg-card-front.png";

export default function FrontCard({ name, cardNumber, date }) {
  return (
    <>
      <img src={fc} />
      <div>{name}</div>
      <div>{cardNumber}</div>
      <div>{date}</div>
    </>
  );
}
