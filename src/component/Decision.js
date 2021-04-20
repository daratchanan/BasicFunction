import { Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'

export default function Decision() {
   const [page, setPage] = useState("A");
  
   const handleA = () => {
      setPage("A")
   };

   const handleB = () => {
      setPage("B")
   };

   const handleC = () => {
      setPage("C")
   };

   return (
      <>
         <Button
            variant="contained"
            color="primary"
            onClick={handleA}
         >
            Page 1
         </Button>
         <Button
            variant="contained"
            color="secondary"
            onClick={handleB}
         >
            Page 2
         </Button>
         <Button
            variant="contained"
            color="secondary"
            onClick={handleC}
         >
            Page 3
         </Button>

         {page === "A" && <Typography variant="h6" >
            Page 1
         </Typography>}
         {page === "B" && <Typography variant="h6">
            Page 2
         </Typography>}
         {page === "C" &&<Typography variant="h6">
            Page 3
         </Typography>}
      </>
   )
}
