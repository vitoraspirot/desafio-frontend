import { TextField } from "@mui/material";
import PropTypes from "prop-types";

export function UniTextField({ label }) {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="disciplina"
      name="disciplina"
      label={label}
      sx={{ width: "400px" }}
    />
  );
}

UniTextField.propTypes = {
  label: PropTypes.string.isRequired,
};
