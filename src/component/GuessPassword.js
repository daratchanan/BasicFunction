import React, { useState } from 'react';
import { Button, Snackbar, TextField, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

export default function GuessPassword() {
   const [password, setPassword] = useState("");
   const [userGuess, setUserGuess] = useState("");
   const [answer, setAnswer] = useState("");
  
   const handlePassword = (e) => {
      setPassword(e.target.value);
   };

   const handleGuess = (e) => {
      setUserGuess(e.target.value);
   };

   const handleCheck = () => {
      if (password === userGuess) {
         setAnswer(true);
      } else {
         setAnswer(false);
      }
   }

   
   return (
      <>
         <Typography
            variant="h6"
         >
            UserGuess Password
         </Typography>
         <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => handlePassword(e)}
         />

         <TextField
            id="outlined-basic"
            label="useGuess"
            variant="outlined"
            value={userGuess}
            onChange={(e) => handleGuess(e)}
         />

         <Button
            variant="contained"
            color="primary"
            onClick={handleCheck}
         >
            Check
         </Button>

         { answer ? <Typography
            variant="h6"
         >
            Correct
           </Typography>
            :
            <Typography
               variant="h6"
            >
               Incorrect
           </Typography>}
      </>
   )
}
