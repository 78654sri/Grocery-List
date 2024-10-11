import { useState,useEffect } from "react"

export default function Login(){
    const [email,setEmail] = useState("abc@gmail.com");
    const [password,setPassword] = useState("pass123");

    useEffect(()=>{
        console.log("render")
    });
    return(
        <div className="container mt-5">
            <form>
                <div className="mb-3">
                    <input type="text" className="form-control" id="email" name="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="password" name="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value); console.log(password)} }></input>
                </div>
            </form>
        </div>
    )
}