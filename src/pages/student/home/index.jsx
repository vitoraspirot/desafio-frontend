import { Button, Typography, Box, AppBar, Container, Toolbar, Stack } from "@mui/material";
import { Header } from "../../../components/header";
import { Main } from "../../../components/main";

export function StudentsHome() {
  return (
    <>
      <Header items={[{ label: "INÍCIO", route: "/" }]} />

      <Main>
        <AppBar
          position="static"
          color="primary"
          style={{ backgroundColor: 'white', color: '#014A7F' }}
        >
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Uniesquina
            </Typography>
            <Button color="inherit">Sair</Button>
          </Toolbar>
        </AppBar>
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
          }}
        >
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              style={{
                backgroundColor: 'white',
                color: '#014A7F',
                width: 308,
                height: 334,
              }}
            >
              <Box height="100%" display="flex" alignItems="flex-end">
                Minhas turmas
              </Box>
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: 'white',
                color: '#014A7F',
                width: 308,
                height: 334,
              }}
            >
              <Box height="100%" display="flex" alignItems="flex-end">
                Matricular-se
              </Box>
            </Button>
          </Stack>
        </Container>
        <AppBar
          position="static"
          color="primary"
          style={{ top: 'auto', bottom: 0 }}
        >
          <Toolbar
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: '#014A7F',
            }}
          >
            <Typography variant="body1" color="inherit">
              Designed and developed by Vitor Aspirot, Angelo and Wesley Rocha
            </Typography>
          </Toolbar>
        </AppBar>
      </Main>
    </>
  );
}
