import { StudentHome } from "../pages/student/home";
import { CompanyHome } from "../pages/company/home";
import { Home } from "../pages/common/home";
import { Login } from "../pages/common/login";

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
    element: <StudentHome />,
  },
  {
    path: "/instituicao",
    element: <CompanyHome />,
  },
];
