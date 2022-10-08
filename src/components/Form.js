import Input from "./Input";
import SubmitButton from "./SubmitButton";

export default function Form() {
  return (
    <form>
      <Input placeholder="e.g. Jane Appleseed" label="CARDHOLDER NAME" />
      <Input placeholder="e.g. 1234 5678 9123 0000" label="CARD NUMBER" />
      <div>
        <Input placeholder="MM" label="exp. date" />
        <Input placeholder="YY" label="(MM/YY)" />
        <Input placeholder="e.g. 123" label="cvc" />
      </div>
      <SubmitButton/>
    </form>
  );

}
