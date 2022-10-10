import bc from "../assets/bg-card-back.png";
import '../style.css'

export default function BackCard({ cvc }) {
  return (
    <>
      <img src={bc} className="card_size" />
      <div>{cvc}</div>
    </>
  );
}
