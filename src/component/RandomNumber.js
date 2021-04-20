import { Button, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

export default function RandomNumber() {
   const [minVal, setMinVal] = useState("");
   const [maxVal, setMaxVal] = useState("");
   const [result, setResult] = useState("");

   const handleMin = (e) => {
      setMinVal(Number(e.target.value))
   };

   const handleMax = (e) => {
      setMaxVal(Number(e.target.value))
   };

   const handleRandom = () => {
      // setResult(Math.floor((Math.random() * 10) + 1))
      if(Math.random()*10 >= minVal && Math.random()*10 <= maxVal){
         console.log(Math.random()*10);
      }
   };

   return (
      <>
         <Typography
            variant="h6"
         >
            Please input Number
         </Typography>
         <TextField
            id="outlined-basic"
            label="min"
            variant="outlined"
            value={minVal}
            onChange={(e) => handleMin(e)}
         />
         <TextField
            id="outlined-basic"
            label="max"
            variant="outlined"
            value={maxVal}
            onChange={(e) => handleMax(e)}
         />
         <Button
            variant="contained"
            color="primary"
            onClick={handleRandom}
         >
            Random
         </Button>
         <TextField
            id="outlined-basic"
            label="result"
            variant="outlined"
            value={result}
         />

      </>
   )
}
