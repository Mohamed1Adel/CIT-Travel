import { Box, CircularProgress } from "@mui/material";

export const Progress = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
    <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fc4c03"}}>
      <CircularProgress />
    </div>
      <h4 style={{display:"block",color:"#fc4c03"}}>wait a moment</h4>
    </div>
  );
};
