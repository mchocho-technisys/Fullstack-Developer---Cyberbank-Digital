import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const [selected, setSelected] = useState(null);
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  const handleSelected = (option) => {
    setSelected(option);
  };

  return (
    <div className="flex">
      <Dropdown options={options} onChange={handleSelected} value={selected} />
    </div>
  );
}

export default DropdownPage;
