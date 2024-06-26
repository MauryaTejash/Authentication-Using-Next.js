'use client'
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
function loginPage(){

    const router = useRouter()
    const [user,setUser] = React.useState({
        email:"",
        password:""
    })

    const [buttonDisabled,setButtonDisabled] = useState(false)

    const [loading, setLoading] = useState(false)

    const onlogin = async()=>{
        try {
            setLoading(true);
            const response = await axios.post('/api/users/login',user)
            console.log("login success",response.data);
            router.push('/profile')
            
        } catch (error:any) {
            console.log("login failed");
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        if (user.email.length > 0 && user.password.length >0) {
            setButtonDisabled(false)
        }
        else{
            setButtonDisabled(true)
        }
    },[user])

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>{loading ? "Processing...." : "login"}</h1>
        <hr />
        
        <label htmlFor="email">email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
        <label htmlFor="password">password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onlogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "No login" : "Login"}</button>
            <Link href="/signup">Visit signup page</Link>
        </div>
    )
}
export default loginPage