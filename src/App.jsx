import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer";

export function App() {
  return (
    <>
      <Outlet />

      <Footer />
    </>
  );
}
