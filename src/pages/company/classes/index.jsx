import { Typography, Stack } from "@mui/material";
import { Header } from "../../../components/header";
import { Main } from "../../../components/main";
import { ClassSection } from "../../../components/classSection";

export function Classes() {
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
            Página do estudante
          </Typography>

          <Stack spacing="8px">
            <ClassSection info="1º Semestre - Introdução à Engenharia de Computação - Tarde - Prof. Margrit" />
            <ClassSection info="1º Semestre - Introdução à Engenharia de Computação - Tarde - Prof. Margrit" />
            <ClassSection info="1º Semestre - Introdução à Engenharia de Computação - Tarde - Prof. Margrit" />
            <ClassSection info="1º Semestre - Introdução à Engenharia de Computação - Tarde - Prof. Margrit" />
            <ClassSection info="1º Semestre - Introdução à Engenharia de Computação - Tarde - Prof. Margrit" />
            <ClassSection info="1º Semestre - Introdução à Engenharia de Computação - Tarde - Prof. Margrit" />
            <ClassSection info="1º Semestre - Introdução à Engenharia de Computação - Tarde - Prof. Margrit" />
          </Stack>
        </Stack>
      </Main>
    </>
  );
}
