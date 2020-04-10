import React from 'react'
import Router from 'next/router'
import User from '../../components/User'
const indexPage = () => {
    return (
        <div>
            <h1>Auth Page </h1>          
            <User name={"Huy"} age={27}/>
            <button onClick={()=> Router.push("/")}>To main page</button>
        </div>
    )
}
export default indexPage