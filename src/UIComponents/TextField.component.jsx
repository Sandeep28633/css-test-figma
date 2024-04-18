import { TextField } from "@mui/material";

const TextFieldComponent = ({ label, placeholder }) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      InputLabelProps={{ shrink: true }}
      sx={{ width: "100%" }}
    />
  );
};

export default TextFieldComponent;
