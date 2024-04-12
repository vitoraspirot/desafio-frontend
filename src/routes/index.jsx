import { StudentsHome } from "../pages/student/home";
import { CompanyHome } from "../pages/company/home";
import { Home } from "../pages/common/home";
import { Login } from "../pages/common/login";
import { Classes } from "../pages/common/classes";
import { RegisterClass } from "../pages/company/registration";
import { StudentsRegistration } from "../pages/student/registration";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/estudante",
    element: <StudentsHome />,
  },
  {
    path: "/instituicao",
    element: <CompanyHome />,
  },
  {
    path: "/instituicao/turmas",
    element: <Classes />,
  },
  {
    path: "/instituicao/turmas/cadastrar",
    element: <RegisterClass />,
  },
  {
    path: "/estudante/turmas",
    element: <Classes />,
  },
  {
    path: "/estudante/turmas/matricular",
    element: <StudentsRegistration />,
  },
];
