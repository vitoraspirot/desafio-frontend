import { AppBar, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

export function Header({ items }) {
  const navigate = useNavigate();

  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        marginBottom: "92px",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding="32px"
      >
        <Typography variant="subtitle1" color="primary" fontWeight="bold">
          UNIESQUINA
        </Typography>

        <Stack direction="row">
          {items.map((item) => (
            <Button
              key={item.label}
              variant="text"
              color="primary"
              sx={{ padding: 0 }}
              onClick={() => navigate(item.route)}
            >
              <Typography variant="subtitle1" color="primary" fontWeight="bold">
                {item.label}
              </Typography>
            </Button>
          ))}
        </Stack>
      </Stack>
    </AppBar>
  );
}

Header.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    })
  ).isRequired,
};
