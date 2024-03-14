import React, { useState } from "react";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="rounded-full md:h-4 md:w-4 lg:h-5 lg:w-5 ">
      <input type="checkbox" checked={checked} onChange={handleChange} />
    </div>
  );
};

export default Checkbox;
