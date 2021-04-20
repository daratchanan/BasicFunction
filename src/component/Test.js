import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Checkbox, FormControlLabel, Grid } from '@material-ui/core';

const useStyles = makeStyles();

export default function Test() {
   const classes = useStyles();
   const [isShow, setIsShow] = useState(true);

   const [state, setState] = useState({
      checkA: false,
      checkB: false,
      checkC: false,
   })

   const handleChange = (e) => {
      setState({...state, [e.target.name]: e.target.checked});
      if (e.target.checked && state.checkB && state.checkC ||
         e.target.checked && state.checkA && state.checkC ||
         e.target.checked && state.checkA && state.checkB) {
         setIsShow(false);
      } else {
         setIsShow(true)
      }
   }

   const handleSubmit = () => {
      console.log(state);
   }



   return (
      <>
         <Grid container direction="column" spacing={2}>
            <Grid item>
               <FormControlLabel
                  control={
                     <Checkbox
                        name="checkA"
                        checked={state.checkA}
                        color="primary"
                        onChange={(e) => handleChange(e)}
                     />
                  }
                  label="Policy 1"
               />
            </Grid>
            <Grid item>
               <FormControlLabel
                  control={
                     <Checkbox
                        name="checkB"
                        checked={state.checkB}
                        color="primary"
                        onChange={(e) => handleChange(e)}
                     />
                  }
                  label="Policy 2"
               />
            </Grid>
            <Grid item>
               <FormControlLabel
                  control={
                     <Checkbox
                        name="checkC"
                        checked={state.checkC}
                        color="primary"
                        onChange={(e) => handleChange(e)}
                     />
                  }
                  label="Policy 3"
               />
            </Grid>
            <Grid item>
               <Button
                  variant="contained"
                  color="primary"
                  disabled={state.checkA || state.checkB ||state.checkC}
                  onClick={handleSubmit}
               >
                  Submit
               </Button>
            </Grid>
         </Grid>
      </>
   )
}
