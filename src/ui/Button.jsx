import PropTypes from "prop-types";
import React from "react";

const Button = ({ title, icon: Icon, iconPosition, classNames }) => {
  return (
    <button
      className={`bg-primary text-white px-3 py-2 rounded-md ml-3 min-w-[150px] flex gap-2 justify-center ${classNames}`}
    >
      {Icon && iconPosition === "left" && <Icon className="mt-1" />}
      {title}
      {Icon && iconPosition === "right" && <Icon className="mt-1" />}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  icon: React.ReactNode,
  iconPosition: PropTypes.string,
  classNames: PropTypes.string,
};

Button.defaultProps = {
  title: "Button",
  iconPosition: "left",
};

export default Button;
