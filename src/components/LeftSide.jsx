import { useEmailDetails } from "../context/EmailContext";
import Button from "./Button";
import EmailInput from "./EmailInput";

export default function LeftSide() {
  const { Subscription, emailId, handleError, handleEmailUpdate } =
    useEmailDetails();
  function handleClick() {
    if (!emailId) {
      handleError();
      return null;
    }
    Subscription();
    handleEmailUpdate(emailId);
  }
  return (
    <div className="sm:w-1/2 sm:h-5/6 w-full h-full px-5 py-3 flex flex-col space-y-4 sm:order-1 order-2">
      <p className="font-bold text-4xl text-[#242742] mt-20">Stay Updated!</p>
      <p className="text-sm">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <div className="flex space-x-3">
        <img src="./Assets/icon-list.svg" />
        <p className="text-sm">Product discovery and building what matters</p>
      </div>
      <div className="flex space-x-3">
        <img src="./Assets/icon-list.svg" />
        <p className="text-sm">Measuring to ensure updates are a success</p>
      </div>
      <div className="flex space-x-3">
        <img src="./Assets/icon-list.svg" />
        <p className="text-sm">And much more</p>
      </div>
      <EmailInput />
      <Button onClick={handleClick}>Subscribe to monthly newsletter</Button>
    </div>
  );
}
