import fc from "../assets/bg-card-front.png";
import '../style.css'


export default function FrontCard({ name="Niloofar Arazkhani", cardNumber="1234 5678 9098 7654", date="09/01" }) {
  return (
    <>
      <img src={fc} className="card_size"/>
      <div className="card_name">{name}</div>
      <div className="card_number">{cardNumber}</div>
      <div className="card_date">{date}</div>
    </>
  );
}
