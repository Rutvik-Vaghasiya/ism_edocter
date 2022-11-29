import React from 'react';
import  '../css/login.css';
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {

  const { register, handleSubmit } = useForm();

  const loginConfirm = async(data)=>{
        await axios.get("url",data).then(res=>{
            if(res.status === 'true' || res.status === 2000){
                console.warn("Successfull Login");
                localStorage.setItem("Id",res.data.Id)
            }
        })
  }
  const submit= (data)=>{
        console.log(data);
        loginConfirm(data);
  }
    
  return (
    <div>
        <div>
            <h2 className='cent'>Login Page </h2>
        </div>
        <div>
            <p>You are Docter ?<Link to='#' id='cleckhere'>Click Here</Link></p>
        </div>
        
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <p>You are Docter? <input type="checkbox" id="Docterlog" name="Docter" value="yes"/> Yes </p>
            </div><br/><br/>
            <div>
                <label >Email :</label>&nbsp;
                <input type='email' id='emailId' name='emailId' {...register("email")} />
            </div>
            <br/>
            <div>
                <label >Password :</label> &nbsp;
                <input type='password' id='passwordId' name='passwors' {...register("password")} />
            </div><br/>
            <button type='submit' id='btnsubmit' name='btnsubmit'>Login </button>
        </form>
        <div>
            <p>You are Not Register ? <Link to='/Register' name='Register' id='Register' >Click Here</Link></p>
        </div>
    </div>
  )
}
