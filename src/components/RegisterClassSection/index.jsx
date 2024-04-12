import { Button, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

export function RegisterClassSection({ info }) {
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

      <Button variant="contained">Matricular</Button>
    </Stack>
  );
}

RegisterClassSection.propTypes = {
  info: PropTypes.string.isRequired,
};
