import { Typography, Button, Box, AppBar, Toolbar, Container, FormControl, TextField, Grid, Select, InputLabel, MenuItem } from "@mui/material";
import { Header } from "../../../components/header";
import { Main } from "../../../components/main";

export function RegisterClass() {
    return (
        <>
            <Header items={[{ label: "INÍCIO", route: "/" }]} />

            <Main>
                <AppBar
                    position="static"
                    color="primary"
                    style={{ backgroundColor: 'white', color: '#014A7F' }}
                >
                    <Toolbar>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            Uniesquina
                        </Typography>
                        <Button color="inherit">Sair</Button>
                    </Toolbar>
                </AppBar>
                <Container
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '100vh',
                    }}
                >
                    <Typography variant="h4" component="h1" style={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'left', marginRight: '470px' }}>
                        Cadastrar turma
                    </Typography>
                    <form style={{ width: '300px' }}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            style={{ marginBottom: '-10px' }}
                        >
                            Disciplina
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="disciplina"
                            name="disciplina"
                            autoComplete="off"
                            label="Digite aqui sua disciplina"
                            style={{ width: '394px', height: '60px', marginBottom: '16px' }}
                        />
                        <Typography
                            variant="h6"
                            gutterBottom
                            style={{ marginBottom: '-10px' }}
                        >
                            Professor(a)
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="professor"
                            name="professor"
                            autoComplete="off"
                            label="Digite aqui o nome do(a) professor(a)"
                            style={{ width: '394px', height: '60px', marginBottom: '16px' }}
                        />
                        <Typography
                            variant="h6"
                            gutterBottom
                            style={{ marginBottom: '-10px' }}
                        >
                            Semestre
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="numero"
                            name="numero"
                            type="number"
                            label="Digite aqui o semestre"
                            inputProps={{ min: 1, max: 20 }}
                            style={{ width: '394px', height: '60px', marginBottom: '16px' }}
                        />
                        <Typography variant="h6" gutterBottom style={{ marginBottom: '7px' }}>
                            Turno
                        </Typography>
                        <FormControl
                            variant="outlined"
                            fullWidth
                            style={{ marginBottom: '16px' }}
                        >
                            <InputLabel id="turno-label">Turno</InputLabel>
                            <Select
                                labelId="turno-label"
                                id="turno"
                                name="turno"
                                label="Turno"
                                defaultValue=""
                                style={{ width: '394px', height: '60px' }}
                                required
                            >
                                <MenuItem value="Manhã">Manhã</MenuItem>
                                <MenuItem value="Noite">Noite</MenuItem>
                            </Select>
                        </FormControl>
                        <Typography variant="h6" gutterBottom style={{ marginBottom: '7px' }}>
                            Dia da semana
                        </Typography>
                        <FormControl
                            variant="outlined"
                            fullWidth
                            style={{ marginBottom: '16px' }}
                        >
                            <InputLabel id="diaSemana-label">Dia da semana</InputLabel>
                            <Select
                                labelId="diaSemana-label"
                                id="diaSemana"
                                name="diaSemana"
                                label="Dia da semana"
                                defaultValue=""
                                style={{ width: '394px', height: '60px' }}
                                required
                            >
                                <MenuItem value="Segunda-feira">Segunda-feira</MenuItem>
                                <MenuItem value="Terça-feira">Terça-feira</MenuItem>
                                <MenuItem value="Quarta-feira">Quarta-feira</MenuItem>
                                <MenuItem value="Quinta-feira">Quinta-feira</MenuItem>
                                <MenuItem value="Sexta-feira">Sexta-feira</MenuItem>
                            </Select>
                        </FormControl>
                        <Grid container justifyContent="center">
                            <Grid item xs={12} style={{ marginBottom: '16px' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{
                                        width: '394px',
                                        height: '60px',
                                        backgroundColor: '#014A7F',
                                    }}
                                >
                                    Cadastrar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
                <AppBar
                    position="static"
                    color="primary"
                    style={{ top: 'auto', bottom: 0 }}
                >
                    <Toolbar
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            backgroundColor: '#014A7F',
                        }}
                    >
                        <Typography variant="body1" color="inherit">
                            Designed and developed by Vitor Aspirot, Angelo and Wesley Rocha
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Main>
        </>
    );
}
