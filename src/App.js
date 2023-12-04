import "react-toastify/dist/ReactToastify.css";
import { Container } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import Home from "./pages/Home";

const notify = (msg, type = "success") => {
  const options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  if (type === "success") {
    toast.success(msg, options);
  } else if (type === "error") {
    toast.error(msg, options);
  } else {
    toast.info(msg, options);
  }
};

function App() {
  return (
    <Container
      sx={{
        border: "1px solid #ccc",
        borderRadius: "4px",
        pb:1,
        mt:5,
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      }}
    >
      <ToastContainer />
      <Home notify={notify} />
    </Container>
  );
}

export default App;
