import React, {useState} from 'react'
import './style/Todos.css';
import TodosItem from './TodosItem';
const Todos = () => {
  const [inputlist,setinputlist]= useState("");
  const [Item,setItems]=useState([
  ]);
  // const[togglesubmit,settogglesubmit]=useState(true)
  const itemevent =(event)=>{
    setinputlist(event.target.value);

  }

  const addList =()=>{
    if(!inputlist){
      
    }
    else{
      const inputdata ={id:new Date().getTime().toString(),name:inputlist}
      setItems((oldItems)=>{
        return[...oldItems,inputdata];
      });
      setinputlist("");
    };
    }
    

  const  DeleteItem=(index)=>{
    setItems((oldItems)=>{
      return oldItems.filter((itemval)=>{
        return index!=itemval.id;
      });
    });
    // localStorage.getItem(Item)
  };

 const RemoveAll=()=>{
  {
    setItems([]);
  }
 }

 const EditItem=(id)=>{
  let neweditItem = Item.find((itemval)=>{
    return itemval.id === id
  });
  console.log(neweditItem )
 }

  return (
      <div className="container">
        <h3>ToDo List</h3>
        <br/>
        <input type="text" value={inputlist} placeholder='add your item' id="additem" onChange={itemevent}/>
        <button className='addbtn' onClick={addList}>+</button>
        
        <ol >
          {Item.map((itemval)=> {
           return  <TodosItem key ={itemval.id}
           id={itemval.id}
           text={itemval.name}
           onSelect ={DeleteItem}
           onSelect1={EditItem}
           />
          })}
        </ol>
        <br/>
        
        <button id='deletebtnAll' onClick={RemoveAll}>DeleteAll</button>
      </div>
  )
}

export default Todos
