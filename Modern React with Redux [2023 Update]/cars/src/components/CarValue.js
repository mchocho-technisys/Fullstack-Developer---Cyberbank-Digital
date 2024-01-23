import React from "react";
import { useSelector } from "react-redux";

const CarValue = () => {
  const totalValue = useSelector(({ cars: { data, searchTerm } }) => {
    const cars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    let totalCost = 0;
    for (let car of cars) {
      totalCost += car.cost;
    }
    return totalCost;
  });

  return (
    <div className="car-value">
      <label>Total Cost: ${totalValue}</label>
    </div>
  );
};

export default CarValue;
