import bg from "../assets/bg-main-mobile.png";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
export default function Header() {
  return (
    <>
      <img src={bg} />
      <BackCard />
      <FrontCard />
    </>
  );
}
