import { createContext, useContext, useState } from "react";

const EmailContext = createContext();

export default function EmailProvider({ children }) {
  const [subscribed, setSubscribed] = useState(false);
  const [emailId, setEmailId] = useState("");
  const [error, setError] = useState(false);
  function handleError() {
    if (!emailId) {
      setError(!error);
    }
  }
  function handleEmailUpdate(value) {
    setEmailId(value);
  }
  function Subscription() {
    setSubscribed(!subscribed);
    setEmailId("")
  }
  return (
    <EmailContext.Provider
      value={{
        subscribed,
        Subscription,
        emailId,
        handleEmailUpdate,
        error,
        handleError,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
}
function useEmailDetails() {
  const context = useContext(EmailContext);
  return context;
}
export { useEmailDetails };
