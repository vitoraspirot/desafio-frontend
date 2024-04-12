import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Outlet />

      <Footer />
    </>
  );
}
