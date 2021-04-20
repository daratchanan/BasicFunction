import { Button, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

export default function TodoList() {
   const [input, setInput] = useState("");
   const [showAc, setShowAc] = useState([]);

   const handleInput = (e) => {
      setInput(e.target.value);
   };

   const handleAdd = () => {
      let arr = [...showAc];
      arr.push(input);
      setShowAc(arr);
      setInput("");
      console.log(arr);
   }

   return (
      <>
         <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={input}
            onChange={(e) => handleInput(e)}
         />
         <Button
            variant="contained"
            color="primary"
            onClick={handleAdd}
         >
            Add
         </Button>
         {showAc.map((data, idx) => 
            <Typography
               key={idx}
               variant="h6"
            >
              {data}
         </Typography>
         )}
      </>
   )
}
