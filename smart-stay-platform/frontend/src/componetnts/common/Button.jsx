const Button = ({ text, onClick, loading }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full bg-blue-600 text-white p-2 rounded"
    >
      {loading ? "Please wait..." : text}
    </button>
  );
};

export default Button;
