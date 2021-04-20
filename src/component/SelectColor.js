import { Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'

export default function Selectcolor() {
   const [color, setColor] = useState("");

   const handleA = () => {
      setColor("red")
   };

   const handleB = () => {
      setColor("yellow")
   };

   const handleC = () => {
      setColor("green")
   };


   return (
      <div style={{ textAlign: "center", height: "100vh", backgroundColor: color }}>
         <Button variant="contained" onClick={handleA}>
            Red
         </Button>
         <Button variant="contained" onClick={handleB}>
            Yellow
         </Button>
         <Button variant="contained" onClick={handleC}>
            Green
         </Button>

      </div>
   )
}
