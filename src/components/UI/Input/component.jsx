import React, { useState } from "react";

import Styled from "./style";

const Input = (props) => {
  const [value, setValue] = useState("");
  const { label, id, type, autoFocus } = props;
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Styled.MainWrapper>
      <Styled.InputWrapper
        id={id}
        label={label}
        value={value}
        onChange={handleOnChange}
        type={type}
        autoComplete={"off"}
        autoFocus={autoFocus || false}
      />
    </Styled.MainWrapper>
  );
};

export default Input;
