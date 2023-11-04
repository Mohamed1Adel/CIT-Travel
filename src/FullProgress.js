import React from 'react'
import { Box, CircularProgress } from "@mui/material";
function FullProgress() {
    return (
        <div style={{width:"100%", height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <CircularProgress />
        </div>
      );
}

export default FullProgress