import { useEmailDetails } from "../context/EmailContext";
export default function EmailInput() {
  const { emailId, handleEmailUpdate,error } = useEmailDetails();
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <div>
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <label htmlFor="email-form" className="text-xs font-bold">
          Email Address
        </label>
        {error ? <span className="text-sm text-red-600 font-bold">Valid email required</span>: null}
        <input
          type="email"
          id="email-form"
          className="w-auto px-5 py-2 border border-black rounded-lg required"
          value={emailId}
          onChange={(e)=>handleEmailUpdate(e.target.value)}
        ></input>
      </form>
    </div>
  );
}
