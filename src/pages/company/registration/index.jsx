import {
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Stack,
  Button,
} from "@mui/material";
import { Header } from "../../../components/Header";
import { Main } from "../../../components/Main";
import { UniTextField } from "../../../components/UniTextField";

export function RegisterClass() {
  return (
    <>
      <Header items={[{ label: "INÍCIO", route: "/" }]} />

      <Main>
        <Stack padding="100px 200px 0 200px">
          <Typography
            variant="h4"
            color="black"
            marginBottom="24px"
            fontWeight="bold"
          >
            Cadastrar turma
          </Typography>
        </Stack>
        <Stack padding="0 200px" alignItems="center" justifyContent="center">
          <UniTextField label="Disciplina" />

          <UniTextField label="Professor(a)" />

          <UniTextField label="Semestre" />

          <FormControl
            variant="outlined"
            sx={{ width: "400px", margin: "16px 0" }}
          >
            <Select
              label="Turno"
              defaultValue=""
              style={{ width: "394px", height: "60px" }}
              required
            >
              <MenuItem value="Manhã">Manhã</MenuItem>
              <MenuItem value="Noite">Noite</MenuItem>
            </Select>
            <InputLabel id="turno-label">Turno</InputLabel>
          </FormControl>

          <FormControl
            variant="outlined"
            sx={{ width: "400px", marginBottom: "32px" }}
          >
            <InputLabel id="diaSemana-label">Dia da semana</InputLabel>
            <Select
              labelId="diaSemana-label"
              id="diaSemana"
              name="diaSemana"
              label="Dia da semana"
              defaultValue=""
              style={{ width: "394px", height: "60px" }}
              required
            >
              <MenuItem value="Segunda-feira">Segunda-feira</MenuItem>
              <MenuItem value="Terça-feira">Terça-feira</MenuItem>
              <MenuItem value="Quarta-feira">Quarta-feira</MenuItem>
              <MenuItem value="Quinta-feira">Quinta-feira</MenuItem>
              <MenuItem value="Sexta-feira">Sexta-feira</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained">Cadastrar</Button>
        </Stack>
      </Main>
    </>
  );
}
