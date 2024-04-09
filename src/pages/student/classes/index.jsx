import { Button, Typography, Box, AppBar, Container, Toolbar, Stack } from "@mui/material";
import { Header } from "../../../components/header";
import { Main } from "../../../components/main";

export function StudentsClasses() {
    return (
        <>
            <Header items={[{ label: "INÍCIO", route: "/" }]} />

            <Main>
                <Typography variant="h3" color="black">
                    Página do estudante
                </Typography>

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
                    <Container style={{ marginBottom: '16px' }}>
                        <Typography
                            variant="h5"
                            style={{ marginBottom: '8px', fontWeight: 'bold', color: 'black' }}
                        >
                            Minhas turmas
                        </Typography>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: 'white',
                                color: '#014A7F',
                                width: 1000,
                                height: 45,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontWeight: 'bold', // Make the text bold
                            }}
                        >
                            <div style={{ marginLeft: '8px', color: 'black' }}>
                                2º Semestre - Algorítimos e Programação II - Manhã - Prof. Margrit
                            </div>
                            <div style={{ marginRight: '8px', color: 'black' }}>Matriculado</div>
                        </Button>
                    </Container>
                    <Container style={{ marginBottom: '16px' }}>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: 'white',
                                color: '#014A7F',
                                width: 1000,
                                height: 45,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontWeight: 'bold', // Make the text bold
                            }}
                        >
                            <div style={{ marginLeft: '8px', color: 'black' }}>
                                1º Semestre - Introdução à Engenharia de Computação - Tarde -
                                Prof. Margrit
                            </div>
                            <div style={{ marginRight: '8px', color: 'black' }}>Concluído</div>
                        </Button>
                    </Container>
                    <Container style={{ marginBottom: '16px' }}>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: 'white',
                                color: '#014A7F',
                                width: 1000,
                                height: 45,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontWeight: 'bold', // Make the text bold
                            }}
                        >
                            <div style={{ marginLeft: '8px', color: 'black' }}>
                                1º Semestre - Introdução à Engenharia de Computação - Tarde -
                                Prof. Margrit
                            </div>
                            <div style={{ marginRight: '8px', color: 'black' }}>Concluído</div>
                        </Button>
                    </Container>
                    <Container style={{ marginBottom: '16px' }}>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: 'white',
                                color: '#014A7F',
                                width: 1000,
                                height: 45,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontWeight: 'bold', // Make the text bold
                            }}
                        >
                            <div style={{ marginLeft: '8px', color: 'black' }}>
                                1º Semestre - Introdução à Engenharia de Computação - Tarde -
                                Prof. Margrit
                            </div>
                            <div style={{ marginRight: '8px', color: 'black' }}>Concluído</div>
                        </Button>
                    </Container>
                    <Container style={{ marginBottom: '16px' }}>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: 'white',
                                color: '#014A7F',
                                width: 1000,
                                height: 45,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontWeight: 'bold', // Make the text bold
                            }}
                        >
                            <div style={{ marginLeft: '8px', color: 'black' }}>
                                1º Semestre - Introdução à Engenharia de Computação - Tarde -
                                Prof. Margrit
                            </div>
                            <div style={{ marginRight: '8px', color: 'black' }}>Concluído</div>
                        </Button>
                    </Container>
                    <Container style={{ marginBottom: '16px' }}>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: 'white',
                                color: '#014A7F',
                                width: 1000,
                                height: 45,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontWeight: 'bold', // Make the text bold
                            }}
                        >
                            <div style={{ marginLeft: '8px', color: 'black' }}>
                                1º Semestre - Introdução à Engenharia de Computação - Tarde -
                                Prof. Margrit
                            </div>
                            <div style={{ marginRight: '8px', color: 'black' }}>Concluído</div>
                        </Button>
                    </Container>
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
