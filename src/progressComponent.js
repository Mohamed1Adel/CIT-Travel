import { Box, CircularProgress } from "@mui/material";

export const Progress = () => {
  return (
    <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <CircularProgress />
      <h4 style={{display:"inline-block"}}>wait a moment</h4>
    </div>
  );
};
