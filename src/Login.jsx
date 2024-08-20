import { useState } from "react"

export const login=()=>{
    const [email,setemail]=useState('');
    return(
        
        <form>
            <label For="email">email</label>
            <input type="email" name="email" id="" />
            <label For="name">name</label>
            <input type="text" name="name" id="" />
            <label For="password">password</label>
            <input type="password" name="password" id="" />
            <button>signup</button>
        </form>
    )
}