import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

export function ClassSection({ info }) {
  const location = useLocation();

  const isCompany = location.pathname.includes("instituicao");

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

      {!isCompany && (
        <Typography color="black" fontWeight="bold">
          Matriculado
        </Typography>
      )}
    </Stack>
  );
}

ClassSection.propTypes = {
  info: PropTypes.string.isRequired,
};
