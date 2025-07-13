function Card({ children }) {
  return (
    <>
      <div className="polaroid-film bg-white w-70 h-39 rounded-lg shadow-xl max-w-sm transform">
        {children}
      </div>
    </>
  );
}

export default Card;
