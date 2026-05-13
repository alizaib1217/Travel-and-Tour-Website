export default function Brand({ onClick }) {
  return (
    <div className="brand" onClick={onClick}>
      <div className="brand-mark">Usman <em>Tour</em></div>
      <div className="brand-sub">Travels &middot; Est. 2006</div>
    </div>
  );
}
