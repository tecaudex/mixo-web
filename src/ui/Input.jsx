import PropTypes from "prop-types";

const Input = ({ type, placeholder, handleInput }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-gray-300 rounded-md px-3 py-2 w-full"
      onChange={handleInput}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  handleInput: PropTypes.func,
};

export default Input;
