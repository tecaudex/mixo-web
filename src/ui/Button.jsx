import PropTypes from "prop-types";
import React from "react";

const Button = ({ title, icon: Icon, iconPosition, classNames }) => {
  return (
    <button
      className={`px-3 py-2 rounded-md ml-3 min-w-[150px] flex gap-2 justify-center ${classNames}`}
    >
      {Icon && iconPosition === "left" && <Icon className="mt-1" />}
      {title}
      {Icon && iconPosition === "right" && <Icon className="mt-1" />}
    </button>
  );
};

Button.propTypes = {
  icon: React.ReactNode,
  title: PropTypes.string,
  classNames: PropTypes.string,
  iconPosition: PropTypes.string,
};

Button.defaultProps = {
  title: "Button",
  iconPosition: "left",
  classNames: "bg-primary text-white ",
};

export default Button;
