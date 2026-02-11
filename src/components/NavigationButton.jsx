import { useNavigate } from 'react-router-dom';

function NavigationButton({ to, children }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="min-w-[44px] min-h-[44px] px-8 py-3 bg-gradient-to-r from-wedding-pink to-wedding-cyan text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-wedding-cyan focus:ring-offset-2"
      aria-label={`Navigate to ${to}`}
      type="button"
    >
      {children}
    </button>
  );
}

export default NavigationButton;
