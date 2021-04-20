import React, { useState } from 'react';
import { Button, Snackbar, TextField, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { TvRounded } from '@material-ui/icons';

export default function GuessPassword() {
   const [password, setPassword] = useState("");
   const [userGuess, setUserGuess] = useState("");
   const [success, setSuccess] = useState(false);
   const [wrong, setWrong] = useState(false);


   const handlePassword = (e) => {
      setPassword(e.target.value);
   };

   const handleGuess = (e) => {
      setUserGuess(e.target.value);
   };

   const handleCheck = () => {
      if (password === userGuess) {
         setSuccess(true);
      } else {
         setWrong(true);
      }
   }

   const handleSuccessSnack = () => {
      setSuccess(false)
   };

   const handleWrongSnack = () => {
      setWrong(false)
   };

   const handleCloseSuccess = () => {
      setSuccess(false)
   };

   const handleCloseWrong = () => {
      setWrong(false)
   };



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

         <Snackbar
            open={success}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={handleSuccessSnack}
         >
            <Alert onClose={handleCloseSuccess} severity="success">
               This is a success message!
            </Alert>
         </Snackbar>

         <Snackbar
            open={wrong}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={handleWrongSnack}
         >
            <Alert onClose={handleCloseWrong} severity="error">
               This is wrong message!
            </Alert>
         </Snackbar>

      </>
   )
}
