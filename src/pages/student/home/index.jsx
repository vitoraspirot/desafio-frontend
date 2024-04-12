import { Stack } from "@mui/material";
import { Header } from "../../../components/Header";
import { Main } from "../../../components/Main";
import { CardButton } from "../../../components/CardButton";

export function StudentsHome() {
  return (
    <>
      <Header items={[{ label: "INÍCIO", route: "/" }]} />

      <Main>
        <Stack
          direction="row"
          spacing={8}
          alignItems="center"
          justifyContent="center"
          marginTop="100px"
        >
          <CardButton label="Minhas turmas" route="/estudante/turmas" />

          <CardButton
            label="Matricular-se"
            route="/estudante/turmas/matricular"
          />
        </Stack>
      </Main>
    </>
  );
}
