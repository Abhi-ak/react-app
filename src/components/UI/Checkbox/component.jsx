import React, { useState } from "react";

import { CheckboxWrapper } from "./style";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <FormControlLabel
      control={<CheckboxWrapper checked={checked} onChange={handleChange} />}
      label={label}
    />
  );
};

export default Checkbox;
