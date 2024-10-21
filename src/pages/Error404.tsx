import {Box, Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Error404() {
  const navigate = useNavigate();

  function getBack() {
    navigate("/");
  }
  return (
    <Box sx={{height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Typography variant="h1">Algo inesperado aconteceu...</Typography>
      <Box sx={{padding: "20px"}}>
        <Button variant="contained" onClick={getBack}>
          Voltar à lista
        </Button>
      </Box>
    </Box>
  );
}

export default Error404;
