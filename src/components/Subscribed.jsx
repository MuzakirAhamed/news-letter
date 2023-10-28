import { useEmailDetails } from "../context/EmailContext";
import Button from "./Button";

export default function Subscribed() {
  const { Subscription, emailId } = useEmailDetails();
  function handleDismiss() {
    Subscription();
  }
  console.log(emailId);
  return (
    <div className="sm:w-1/4 w-full sm:h-auto h-screen flex flex-col rounded-2xl bg-slate-50 px-14 py-10 space-y-4">
      <div>
        <img src="./Assets/icon-success.svg" />
      </div>
      <p className="font-bold text-4xl text-[#242742]">
        Thanks for Subscribing!
      </p>
      <p className="text-sm">
        A confirmation email has been sent to {" "}
        <span className="font-bold">{emailId}</span>. Please open it and click
        the button inside to confirm your subscription.
      </p>
      <Button onClick={handleDismiss}>Dismiss message</Button>
    </div>
  );
}
