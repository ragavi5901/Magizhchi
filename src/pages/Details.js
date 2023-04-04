import React, { useEffect } from 'react'
import { useState } from 'react';

function Details() {

    const [loginData,setLoginData]= useState();

    const customer =()=>{
        const getuser =localStorage.getItem("user_login")

        if(getuser && getuser.length){
            const user =JSON.parse(getuser);
           setLoginData(user);

           const cus_order=loginData.map((el,k)=>{
            return el.d
           })
        }
    }
    useEffect(()=>{
        customer();
    },[])
  return (
    <div>Details</div>
  )
}

export default Details