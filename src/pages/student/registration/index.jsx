import { Stack, Typography } from "@mui/material";
import { Header } from "../../../components/Header";
import { Main } from "../../../components/Main";
import { RegisterClassSection } from "../../../components/RegisterClassSection";

export function StudentsRegistration() {
  return (
    <>
      <Header items={[{ label: "INÍCIO", route: "/" }]} />

      <Main>
        <Stack padding="100px 200px">
          <Typography
            variant="h4"
            color="black"
            marginBottom="24px"
            fontWeight="bold"
          >
            Matricular-se
          </Typography>
          <Stack spacing="8px">
            <RegisterClassSection info="1º Semestre - Introdução à Engenharia de Computação - Tarde - Prof. Margrit" />
            <RegisterClassSection info="1º Semestre - Introdução à Engenharia de Computação - Tarde - Prof. Margrit" />
            <RegisterClassSection info="1º Semestre - Introdução à Engenharia de Computação - Tarde - Prof. Margrit" />
            <RegisterClassSection info="1º Semestre - Introdução à Engenharia de Computação - Tarde - Prof. Margrit" />
            <RegisterClassSection info="1º Semestre - Introdução à Engenharia de Computação - Tarde - Prof. Margrit" />
            <RegisterClassSection info="1º Semestre - Introdução à Engenharia de Computação - Tarde - Prof. Margrit" />
          </Stack>
        </Stack>
      </Main>
    </>
  );
}
