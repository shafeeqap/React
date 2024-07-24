import React, {useState, createContext} from "react"
import ComponentB from "./Component_B.jsx"


export const UserContext = createContext();


function ComponentA(){

    const [user ,setUser] = useState("Shafeeq")


    return(<div className="box">
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>
        <ComponentB prop={'shafeeq'}></ComponentB>
        <UserContext.Provider value={user}>
            <ComponentB user={user}/>
        </UserContext.Provider>
    </div>)
}

export default ComponentA