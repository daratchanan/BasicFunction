import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Checkbox, FormControlLabel, Grid } from '@material-ui/core';

const useStyles = makeStyles();

export default function Agreement() {
   const classes = useStyles();
   const [stateA, setStateA] = useState(false);
   const [stateB, setStateB] = useState(false);
   const [stateC, setStateC] = useState(false);
   const [isShow, setIsShow] = useState(true);

   const handleClickA = (e) => {
      setStateA(e.target.checked);
      if (e.target.checked && stateB && stateC) {
         setIsShow(false);
      } else {
         setIsShow(true)
      }
   };

   const handleClickB = (e) => {
      setStateB(e.target.checked);
      if (e.target.checked && stateA && stateC) {
         setIsShow(false);
      } else {
         setIsShow(true)
      }
   };

   const handleClickC = (e) => {
      setStateC(e.target.checked);
      if (e.target.checked && stateA && stateB) {
         setIsShow(false);
      } else {
         setIsShow(true)
      }
   };

   const handleSubmit = () => {
      alert("success");
   }

   // const [state, setState] = useState({
   //    checkedA: true,
   //    checkedB: true,
   //    checkedC: true,
   // });

   // const handleChange = (event) => {
   //    setState({ ...state, [event.target.name]: event.target.checked });
   // };

   return (
      <>
         <Grid container direction="column" spacing={2}>
            <Grid item>
               <FormControlLabel
                  control={
                     <Checkbox
                        // checked={state.checkedA}
                        checked={stateA}
                        onChange={(e) => handleClickA(e)}
                        // name="checkedA"
                        color="primary"
                     />
                  }
                  label="Policy 1"
               />
            </Grid>
            <Grid item>
               <FormControlLabel
                  control={
                     <Checkbox
                        checked={stateB}
                        onChange={(e) => handleClickB(e)}
                        name="checkedB"
                        color="primary"
                     />
                  }
                  label="Policy 2"
               />
            </Grid>
            <Grid item>
               <FormControlLabel
                  control={
                     <Checkbox
                        checked={stateC}
                        onChange={(e) => handleClickC(e)}
                        name="checkedC"
                        color="primary"
                     />
                  }
                  label="Policy 3"
               />
            </Grid>
            <Grid item>
               <Button
                  variant="contained"
                  color="primary"
                  disabled={isShow}
                  onClick={handleSubmit}
               >
                  Submit
               </Button>
            </Grid>
         </Grid>
      </>
   )
}
