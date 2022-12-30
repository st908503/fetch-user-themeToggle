import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const DarkMode = () => {
    const [user, setUser] = useState({});
    const [theme, setTheme] = useState("light-theme")
  
    useEffect(() => {
      axios.get("https://reqres.in/api/users").then((res) => { setUser(res.data) }).catch((error) =>{
        console.log(error)
      });
      document.body.className = theme;
    }, [theme])
  
  
    const toggleTheme = () => {
      if (theme === 'dark-theme') {
        setTheme('light-theme')
  
      }
      else {
        setTheme('dark-theme')
      }
    }
  
  
    return (
  
  
        <div className='container'>
  
          <table >
            <tbody>
              <tr>
                <td></td>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
              </tr>
  
  
              {user?.data?.map((post, ind) => {
                const { id, avatar, first_name, last_name, email } = post
                return (
                  <tr key={ind}>
                    <td><img height="70px" src={avatar} alt="" /></td>
                    <td>{id}</td>
                    <td>{first_name + " " + last_name}</td>
                    <td className='email' >{email} </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className='btn-container'>
            <button onClick={()=>toggleTheme()}>Change Theme</button>
          </div>
  
  
  
  
  
  
        </div>
    );
}

export default DarkMode