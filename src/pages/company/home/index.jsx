import { Typography, Button, Box, AppBar, Toolbar, Container, Stack } from "@mui/material";
import { Header } from "../../../components/header";
import { Main } from "../../../components/main";

export function CompanyHome() {
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
                color: '#000000',
                width: 308,
                height: 334,
              }}
            >
              <Box height="100%" display="flex" alignItems="flex-end">
                Turmas
              </Box>
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: 'white',
                color: '#000000',
                width: 308,
                height: 334,
              }}
            >
              <Box height="100%" display="flex" alignItems="flex-end">
                Cadastrar turma
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
