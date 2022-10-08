import Button from "../components/Button";
import Header from "../components/Header";
import IconComplete from "../components/IconComplete";
export default function ThankYouContainer() {
  return (
    <>
    <Header/>
    <IconComplete/>
    <h1>Thank You!</h1>
    <h3>We have added your card details</h3>
    <Button title="continue"/>
    </>
  );
}
