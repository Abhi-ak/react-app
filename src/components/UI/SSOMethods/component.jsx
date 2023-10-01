import React from "react";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const SSOMethods = ({ data }) => {
  return (
    <Stack direction="row" spacing={2}>
      {data.map((value, index) => {
        return (
          <Avatar
            key={index}
            alt={value.alt}
            src={value.src}
            sx={{ width: 48, height: 48 }}
          />
        );
      })}
    </Stack>
  );
};

export default SSOMethods;
