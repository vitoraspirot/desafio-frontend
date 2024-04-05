import { Button, Stack, Typography } from "@mui/material";
import { Header } from "../../../components/header";
import { Main } from "../../../components/main";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  return (
    <>
      <Header items={[{ label: "INÍCIO", route: "/" }]} />

      <Main>
        <Stack alignItems="center" justifyContent="center" paddingTop="200px">
          <Typography
            variant="h4"
            color="black"
            fontWeight="bold"
            textAlign="center"
          >
            Login!
          </Typography>
          <Stack
            direction="row"
            marginTop="64px"
            spacing="16px"
            alignItems="center"
            justifyContent="center"
          >
            <Button variant="contained" onClick={() => navigate("/estudante")}>
              Página do estudante
            </Button>
            <Button variant="outlined" onClick={() => navigate("/instituicao")}>
              Página do funcionário
            </Button>
          </Stack>
        </Stack>
      </Main>
    </>
  );
}
