import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Subscribed from "./components/Subscribed";
import { useEmailDetails } from "./context/EmailContext";

export default function App() {
  const {subscribed} = useEmailDetails()
  return (
      <div className="w-full h-screen grid place-items-center">
        {subscribed ? (
          <Subscribed />
        ) : (
          <div className="sm:w-auto sm:h-auto w-full h-full bg-slate-50 rounded-2xl flex sm:flex-row flex-col sm:space-x-4">
            <LeftSide />
            <RightSide />
          </div>
        )}
      </div>
  );
}
