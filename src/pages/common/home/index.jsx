import { Stack, Typography } from "@mui/material";
import { Header } from "../../../components/header";
import { Main } from "../../../components/main";

export function Home() {
  return (
    <>
      <Header items={[{ label: "LOGIN", route: "/login" }]} />

      <Main>
        <Stack spacing="8px" marginTop="200px">
          <Typography
            variant="h4"
            color="black"
            fontWeight="bold"
            textAlign="center"
          >
            Matrículas abertas!
          </Typography>

          <Typography variant="h5" color="grey" textAlign="center">
            Faça login e matricule-se nas turmas disponíveis para você.
          </Typography>
        </Stack>
      </Main>
    </>
  );
}
