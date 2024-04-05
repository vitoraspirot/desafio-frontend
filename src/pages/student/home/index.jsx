import { Typography } from "@mui/material";
import { Header } from "../../../components/header";
import { Main } from "../../../components/main";

export function StudentHome() {
  return (
    <>
      <Header items={[{ label: "INÍCIO", route: "/" }]} />

      <Main>
        <Typography variant="h3" color="black">
          Página do estudante
        </Typography>
      </Main>
    </>
  );
}
