import React, { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divElRef = useRef();

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  useEffect(() => {
    const handler = (event) => {
      if (!divElRef || !divElRef.current) {
        return;
      }

      if (!divElRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div className="w-48 relative" ref={divElRef}>
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {value ? <h1>{value.label}</h1> : <h1>Select...</h1>}
        <GoChevronDown className="text-xl" />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full">
          {options?.length > 0 &&
            options.map((option) => (
              <div
                className="hover:bg-sky-100 rounded cursor-pointer p-1"
                onClick={() => handleOptionClick(option)}
                key={option.value}
              >
                {option.label}
              </div>
            ))}
        </Panel>
      )}
    </div>
  );
};

export default Dropdown;
