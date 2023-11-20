// Button.js

// import PropTypes; // Remove this line

// Define your Button component here
function Button() {
  // Component logic goes here
}
import { useState } from 'react';

const Button = ({ onClick, label, color, disabled }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    if (!disabled) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    if (!disabled) {
      setIsPressed(false);
    }
  };

  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  // Function to darken a color by a specified percentage
  const darkenColor = (color, percent) => {
    const num = parseInt(color.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = ((num >> 8) & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return `#${(1 << 24 | R << 16 | G << 8 | B).toString(16).slice(1)}`;
  };

  return (
    <button
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{
        backgroundColor: isPressed ? darkenColor(color, 20) : color,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  color: '#3498db',
  disabled: false,
};
        }

        .button {
            font-size: 18px;
            padding: 10px 20px;
            border: none;
            border-radius: 25px;
            background-color: #6a7da6;
            color: #fff;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
        }

        .button:hover {
            background-color: #815998;
        }

        .button:active {
            background-color: #3e264c;
        }

        hr {
            margin-top: 50px;
        }

        .letter-buttons {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
        }

        .letter-buttons button {
            margin: 0 10px;
            font-size: 18px;
            padding: 10px 20px;
            border: none;
            border-radius: 25px;
            background-color: #6a7da6;
            color: #fff;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
        }

        .letter-buttons button:hover {
            background-color: #815998;
        }

        .letter-buttons button:active {
            background-color: #3e264c;
        }
export default Button;
