import { Stack } from "@mui/material";
import { Header } from "../../../components/header";
import { Main } from "../../../components/main";
import { CardButton } from "../../../components/cardButton";

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
