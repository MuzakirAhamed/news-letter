export default function Button({ children, onClick }) {
  return (
    <button className="bg-gradient-to-r bg-[#36384e] px-5 py-3 rounded-lg w-auto font-bold text-slate-50 text-sm hover:from-[#ff6257] hover:to-orange-600" onClick={onClick}>
      {children}
    </button>
  );
}
