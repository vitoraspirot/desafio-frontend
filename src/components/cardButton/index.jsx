import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

export function CardButton({ label, route }) {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      style={{
        backgroundColor: "white",
        color: "#000000",
        width: 308,
        height: 334,
      }}
      onClick={() => navigate(route)}
    >
      <Typography height="100%" display="flex" alignItems="flex-end">
        {label}
      </Typography>
    </Button>
  );
}

CardButton.propTypes = {
  label: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};
