import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

export default function Calculater() {
   const [input, setInput] = useState(0);

   const handleOne = () => {
      setInput((input*10) + 1);
   };

   const handleTwo = () => {
      setInput((input*10) + 2);
   };

   return (
      <>
         <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={input}
            // onChange={(e) => handleInput(e)}
         />
         <Button
            variant="contained"
            color="primary"
            onClick={handleOne}
         >
            1
         </Button>
         <Button
            variant="contained"
            color="primary"
            onClick={handleTwo}
         >
            2
         </Button>
      </>
   )
}
