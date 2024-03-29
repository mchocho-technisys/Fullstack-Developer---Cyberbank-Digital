import React from "react";
import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    } else {
      event.preventDefault();
      navigate(to);
    }
  };

  return (
    <a className={classes} onClick={handleClick} href={to}>
      {children}
    </a>
  );
};

export default Link;
