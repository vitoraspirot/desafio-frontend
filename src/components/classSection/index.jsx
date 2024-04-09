import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

export function ClassSection({ info }) {
  return (
    <Stack
      direction="row"
      bgcolor="#fAfAfA"
      alignItems="center"
      justifyContent="space-between"
      padding="8px 16px"
      borderRadius="10px"
    >
      <Typography color="black" fontWeight="bold">
        {info}
      </Typography>

      <Typography color="black" fontWeight="bold">
        Matriculado
      </Typography>
    </Stack>
  );
}

ClassSection.propTypes = {
  info: PropTypes.string.isRequired,
};
