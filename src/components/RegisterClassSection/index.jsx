import { Button, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

export function RegisterClassSection({ info }) {
  const [isRegistered, setIsRegistered] = useState(false);

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

      <Button
        onClick={() => setIsRegistered(!isRegistered)}
        variant={isRegistered ? "outlined" : "contained"}
      >
        {isRegistered ? "Matriculado" : "Matricular"}
      </Button>
    </Stack>
  );
}

RegisterClassSection.propTypes = {
  info: PropTypes.string.isRequired,
};
