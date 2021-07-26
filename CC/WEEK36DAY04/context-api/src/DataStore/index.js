import {createContext, useState} from "react"
const Context=createContext([])

export function Store({children}){
    const [items,setItems]=useState([])
    return (
        <>
        <Context.Provider value={{items,setItems}}>
          {children}
        </Context.Provider>
        </>
    )
}







export default Context