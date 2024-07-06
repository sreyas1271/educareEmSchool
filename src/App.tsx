import { RouterProvider } from "react-router-dom";
import "./App.css";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import routes from "./routes/routes";

function App() {
  return (
    <>
      <HeaderComponent />
      <NavbarComponent />
      <RouterProvider router={routes} />
      <FooterComponent />
    </>
  );
}

export default App;
