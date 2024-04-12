import { Typography, MenuItem, Stack, Button, TextField } from "@mui/material";
import { Header } from "../../../components/Header";
import { Main } from "../../../components/Main";
import { useState } from "react";

export function RegisterClass() {
  const [discipline, setDiscipline] = useState("");
  const [teacher, setTeacher] = useState("");
  const [semester, setSemester] = useState("");
  const [shift, setShift] = useState("");
  const [day, setDay] = useState("");
  const [disciplineError, setDisciplineError] = useState(false);
  const [teacherError, setTeacherError] = useState(false);
  const [semesterError, setSemesterError] = useState(false);
  const [shiftError, setShiftError] = useState(false);
  const [dayError, setDayError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setDisciplineError(false);
    setTeacherError(false);
    setSemesterError(false);
    setShiftError(false);
    setDayError(false);

    if (discipline === "") {
      setDisciplineError(true);
    }
    if (teacher === "") {
      setTeacherError(true);
    }
    if (semester === "") {
      setSemesterError(true);
    }
    if (shift === "") {
      setShiftError(true);
    }
    if (day === "") {
      setDayError(true);
    }

    if (discipline && teacher && semester && shift && day) {
      console.log("Cadastrado!");
    }
  };

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

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Stack padding="0 200px" alignItems="center" justifyContent="center">
            <TextField
              label="Disciplina"
              variant="outlined"
              required
              fullWidth
              margin="normal"
              sx={{ width: "400px" }}
              onChange={(e) => {
                setDiscipline(e.target.value);
              }}
              error={disciplineError}
            />

            <TextField
              label="Professor(a)"
              variant="outlined"
              required
              fullWidth
              margin="normal"
              sx={{ width: "400px" }}
              onChange={(e) => setTeacher(e.target.value)}
              error={teacherError}
            />

            <TextField
              label="Semestre"
              variant="outlined"
              required
              fullWidth
              margin="normal"
              sx={{ width: "400px" }}
              onChange={(e) => setSemester(e.target.value)}
              error={semesterError}
            />

            <TextField
              label="Turno"
              required
              select
              margin="normal"
              sx={{ width: "400px" }}
              onChange={(e) => setShift(e.target.value)}
              error={shiftError}
            >
              <MenuItem value="Manhã">Manhã</MenuItem>
              <MenuItem value="Tarde">Tarde</MenuItem>
              <MenuItem value="Noite">Noite</MenuItem>
            </TextField>

            <TextField
              label="Dia da semana"
              margin="normal"
              sx={{ width: "400px", marginBottom: "16px" }}
              required
              select
              onChange={(e) => setDay(e.target.value)}
              error={dayError}
            >
              <MenuItem value="Segunda-feira">Segunda-feira</MenuItem>
              <MenuItem value="Terça-feira">Terça-feira</MenuItem>
              <MenuItem value="Quarta-feira">Quarta-feira</MenuItem>
              <MenuItem value="Quinta-feira">Quinta-feira</MenuItem>
              <MenuItem value="Sexta-feira">Sexta-feira</MenuItem>
            </TextField>

            <Button variant="contained" type="submit">
              Cadastrar
            </Button>
          </Stack>
        </form>
      </Main>
    </>
  );
}
