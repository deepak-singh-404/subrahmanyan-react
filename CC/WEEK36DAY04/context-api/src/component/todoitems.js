import { useContext } from "react"
import Context from "../DataStore"


const ShowTodo=()=>{
    const Store=useContext(Context)
    const {items}=Store
    return(
        <>
        <h1 style={{textAlign:'center'}}>ALL TODO ITEMS ARE</h1>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',background:"yellow"}}>
            {
                items.map((item,i)=>{
                    return( <div key={i}>{item}</div>)
                })
            }
        </div>
        </>
    )
}
export default ShowTodo