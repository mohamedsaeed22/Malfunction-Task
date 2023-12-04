import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Maint from "./components/Maint";
import { Container } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";

const notifyErr = (msg) =>
  toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
const notifySuc = (msg) =>
  toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
function App() {
  return (
    <Container>
      <ToastContainer />
      <Maint notifyErr={notifyErr} notifySuc={notifySuc}/>
    </Container>
  );
}

export default App;
