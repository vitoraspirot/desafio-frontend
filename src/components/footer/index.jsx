import { AppBar, Stack, Typography } from "@mui/material";

export function Footer() {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Stack alignItems="center" justifyContent="center">
        <Typography
          variant="subtitle2"
          color="info"
          padding="24px"
          textAlign="center"
        >
          Designed and developed by Vitor Aspirot, Angelo and Wesley Rocha
        </Typography>
      </Stack>
    </AppBar>
  );
}
