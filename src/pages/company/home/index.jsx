import { Stack } from "@mui/material";
import { Header } from "../../../components/Header";
import { Main } from "../../../components/Main";
import { CardButton } from "../../../components/CardButton";

export function CompanyHome() {
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
          <CardButton label="Turmas" route="/instituicao/turmas" />

          <CardButton
            label="Cadastrar turma"
            route="/instituicao/turmas/cadastrar"
          />
        </Stack>
      </Main>
    </>
  );
}
