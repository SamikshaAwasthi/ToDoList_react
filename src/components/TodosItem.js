import React from 'react'
import "./style/TodosItem.css"
const TodosItem = (props) => {
   
    return(
    <> 
    <div className="items">
       <li>{props.text}</li>
       {/* <button id='editbtn' onClick={()=>{props.onSelect1(props.id)}}>EditItem</button> */}
       <button id='deletebtn' onClick={()=>{props.onSelect(props.id)}}>Delete</button>
    </div>
       
    </>);
}

export default TodosItem
