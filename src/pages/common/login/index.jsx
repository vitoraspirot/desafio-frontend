import { Button, Stack, TextField, Typography } from "@mui/material";
import { Header } from "../../../components/Header";
import { Main } from "../../../components/Main";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError(false);
    setPassError(false);

    if (email === "") {
      setEmailError(true);
    }
    if (pass === "") {
      setPassError(true);
    }

    if (email && pass) {
      console.log("Entrar!");
    }
  };

  return (
    <>
      <Header items={[{ label: "INÍCIO", route: "/" }]} />

      <Main>
        <Stack
          padding="100px 200px 16px 200px"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h4"
            color="black"
            marginBottom="24px"
            fontWeight="bold"
          >
            Login!
          </Typography>
        </Stack>

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Stack padding="0 200px" alignItems="center" justifyContent="center">
            <TextField
              label="Email"
              type="email"
              sx={{ width: "400px" }}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              error={emailError}
            />

            <TextField
              label="Senha"
              type="password"
              sx={{ width: "400px", marginBottom: "32px" }}
              margin="normal"
              required
              onChange={(e) => {
                setPass(e.target.value);
              }}
              error={passError}
            />
            <Button variant="contained" type="submit">
              Entrar
            </Button>
          </Stack>
        </form>
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
      </Main>
    </>
  );
}
