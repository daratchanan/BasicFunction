import React, { useEffect, useRef, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
   box: {
      width: 80,
      height: 15,
      marginRight: 10,
   }
}))


export default function ButtonOtp() {
   const classes = useStyles();
   const [numberOne, setNumberOne] = useState("");
   const [numberTwo, setNumberTwo] = useState("");
   const [numberThree, setNumberThree] = useState("");
   const [numberFour, setNumberFour] = useState("");
   const [isShow, setIsShow] = useState(true);

   const firstRef = useRef(null);
   const secondRef = useRef(null);
   const thirdRef = useRef(null);
   const fouthRef = useRef(null);
   const verifiledRef = useRef(null);

   const handleVerifiled = () => {
      alert("Verifiled success");
   };

   const handleOne = (e) => {
      setNumberOne(e.target.value)
      secondRef.current.focus();
      if (e.target.value && numberTwo && numberThree && numberFour) {
         setIsShow(false)
      } else {
         setIsShow(true)
      }
   }

   const handleTwo = (e) => {
      setNumberTwo(e.target.value);
      thirdRef.current.focus();
      if (e.target.value && numberOne && numberThree !== "" && numberFour !== "") {
         setIsShow(false)
      } else {
         setIsShow(true)
      }
   }

   const handleThree = (e) => {
      setNumberThree(e.target.value)
      fouthRef.current.focus();
      if (e.target.value && numberOne !== "" && numberTwo !== "" && numberFour !== "") {
         setIsShow(false)
      } else {
         setIsShow(true)
      }
   }

   const handleFour = (e) => {
      setNumberFour(e.target.value);
      // verifiledRef.current.focus();
      verifiledRef.current.focusVisible();
      if (e.target.value && numberOne !== "" && numberThree !== "" && numberTwo !== "") {
         setIsShow(false)
      } else {
         setIsShow(true)
      }
   }

   useEffect(() => {
      firstRef.current.focus();
   }, [])

   return (
      <>
         <Grid container direction="column" spacing={10}>
            <Grid item>
               <TextField
                  className={classes.box}
                  variant="outlined"
                  value={numberOne}
                  inputProps={{ style: { textAlign: "center" }, maxLength: 1 }}
                  onChange={(e) => handleOne(e)}
                  inputRef={firstRef}
                  
               />
               <TextField
                  className={classes.box}
                  variant="outlined"
                  value={numberTwo}
                  inputProps={{ style: { textAlign: "center" }, maxLength: 1 }}
                  onChange={(e) => handleTwo(e)}
                  inputRef={secondRef}
               />
               <TextField
                  className={classes.box}
                  variant="outlined"
                  value={numberThree}
                  inputProps={{ style: { textAlign: "center" }, maxLength: 1 }}
                  onChange={(e) => handleThree(e)}
                  inputRef={thirdRef}
               />
               <TextField
                  className={classes.box}
                  variant="outlined"
                  value={numberFour}
                  inputProps={{ style: { textAlign: "center" }, maxLength: 1 }}
                  onChange={(e) => handleFour(e)}
                  inputRef={fouthRef}
               />
            </Grid>
            <Grid item>
               <Button
                  variant="contained"
                  color="primary"
                  disabled={isShow}
                  onClick={handleVerifiled}
                  action={verifiledRef}
               >
                  Verifiled
               </Button>
            </Grid>

         </Grid>
      </>
   )
}
