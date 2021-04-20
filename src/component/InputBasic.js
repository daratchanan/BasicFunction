import { Button, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

export default function InputBasic() {
   const [name, setName] = useState("");
   const [lName, setLName] = useState("");
   const [input, setInput] = useState("");
   
   const handleShowName = () => {
     setInput(`สวัสดี ${name}`);
   }

   return (
      <>
         <TextField
            id="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <TextField
            id="lname"
            label="Lastname"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
         />
         <Typography
            style={{ color: "blue" }}
            variant="h6"
         >
            {name} ชื่อของคุณมี {name.length} ตัว
         </Typography>
         <Typography
            style={{ color: "pink" }}
            variant="h6"
         >
            {lName} นามสกุลของคุณมี {lName.length} ตัว
         </Typography>
         <Typography
            style={{ color: "green" }}
            variant="h6"
         >
            {lName} ชื่อและนามสกุลของคุณมี  {name.length + lName.length} ตัว
         </Typography>
         <Typography
            style={{ color: "blue" }}
            variant="h6"
         >
            {input}
         </Typography>
         <Button
            variant="contained"
            color="primary"
            onClick={handleShowName}
         >
            Hello
         </Button>
      </>
   )
}
