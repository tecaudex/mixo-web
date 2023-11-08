import PropTypes from "prop-types";
import React from "react";

const variants = {
  primary: "bg-primary text-white font-semibold",
  primaryLight: "bg-primaryLight text-primary font-bold",
  gray: "bg-gray-50 text-gray-400 font-semibold",
};

const Button = ({ title, icon: Icon, iconPosition, classNames, variant }) => {
  return (
    <button
      className={`px-3 py-2 rounded-md  min-w-[120px] flex gap-2 justify-center ${classNames} ${variants[variant]}`}
    >
      {Icon && iconPosition === "left" && <Icon className="mt-1" />}
      {title}
      {Icon && iconPosition === "right" && <Icon className="mt-1" />}
    </button>
  );
};

Button.propTypes = {
  icon: React.ReactNode,
  // icon: React.Component,
  title: PropTypes.string,
  classNames: PropTypes.string,
  iconPosition: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  title: "Button",
  iconPosition: "left",
  variant: "primary",
};

export default Button;
