import bg from "../assets/bg-main-mobile.png";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import '../style.css'
export default function Header() {
  return (
    <div className="header">
      <img src={bg} className="header_bg"/>
      <div className="card_back">

      <BackCard />
      </div>
      <div className="card_front">

      <FrontCard />
      </div>

    </div>
  );
}
