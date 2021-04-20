import { TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

export default function ConvertTemp() {
   const [choice, setchoice] = useState("");
   const [temp, setTemp] = useState("");
   const [result, setResult] = useState("");

   const handleChoice = (e) => {
      setchoice(e.target.value);
   };

   const handleTemp = (e) => {
      setTemp(e.target.value);
      if (Number(choice) === 1) {
         setResult((e.target.value - 32)/1.8)
      } else if (Number(choice) === 2) {
         setResult((e.target.value*1.8)+32)
      }
   }

   return (
      <>
         <Typography
            variant="h6"
         >
            Press 1 to convert from Fahrenheit to Celsius or Press 2 to convert from Celsius to Fahrenheit.
         </Typography>
         <TextField
            id="outlined-basic"
            label="select 1 or 2"
            variant="outlined"
            value={choice}
            onChange={(e) => handleChoice(e)}
         />
         <TextField
            id="outlined-basic"
            label="input"
            variant="outlined"
            value={temp}
            onChange={(e) => handleTemp(e)}
         />
         <TextField
            id="outlined-basic"
            label="result"
            variant="outlined"
            value={result}
         />
      </>
   )
}
