import React, {useContext} from "react"
import { UserContext } from "./Component_A.jsx"


function ComponentD(){

    const user = useContext(UserContext)

    return(<div className="box">
        <h1>Component D</h1>
        <h2>{`Bey ${user}`}</h2>
    </div>)
}

export default ComponentD