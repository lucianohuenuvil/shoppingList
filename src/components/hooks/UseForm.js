import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';

export const UseForm = ( initialstate ) => {


    const [form, setform] = useState(initialstate);


    const handleInput = (event) =>{
        setform({
            ...form,
            [event.target.name] :event.target.value
        });
    }


    const handleReset = () =>  {

        setform({
            id:uuid(),
            nombre:'',
            cantidad:'',
            precio:''
        }); 
    }



  return [form, handleInput, handleReset];

}
