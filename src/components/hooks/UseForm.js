import React, { useState } from 'react'

export const UseForm = ( initialstate ) => {


    const [form, setform] = useState(initialstate);


    const handleInput = (event) =>{
        setform({
            ...form,
            [event.target.name] :event.target.value
        });
    }


    const handleReset = (event) =>  {
        setform(event); 
    }




    const handleEdit = (item) => {
        setform(item); 
    }



  return [form, handleInput, handleReset, handleEdit];

}
