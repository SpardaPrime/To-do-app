import React from 'react';
import {useState,useEffect} from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import AddListPanel from '../add-list-panel/'


const App =() =>{
    const stor=JSON.parse(localStorage.getItem('data'));
    const newDate= new Date()
    const [filter, setFilter] =useState('All');
    const [searchData, setSearchData]=useState('');
    const [todoData, setTodoData] = useState (stor?stor:[
            {label:'Add to do', important:true,done:false,id:idGen(),date:{
            year:newDate.getFullYear(),
            month:addZero(newDate.getMonth()+1),
            day:addZero(newDate.getDate()),
            hour:addZero(newDate.getHours()),
            minute:addZero(newDate.getMinutes())}
        },
    ]);

    let data ;
    let doneLength=todoData.filter(({done})=>done===true).length;
    let todoLength = todoData.length-doneLength;

    function addZero(num){
        if(num<10){
            return '0'+num;
        }else{
            return num;
        }
    }

    const changeFilter=(event)=>{
        setFilter(()=>event.target.textContent);
    }

    const searchList=(event)=>{
        setSearchData(()=>event.target.value);
    }

    function idGen(){
        let text='';
        let words='qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
        let leng= words.length-1;
        for(let i=0;i<5;i++){
            let random = Math.floor(Math.random()*leng);
           text+=words.slice(random,random+1) 
        }
        return text;
    }

     const deleteItem = (id) => {
        todoData.forEach((item,i)=>{
            if(item.id===id){
                setTodoData([...todoData.slice(0,i),...todoData.slice(i+1,todoData.length)])
            }
        });
    }

    const addItem = (event) =>{
        event.preventDefault();
        let cont= true;
        if(data==null){
            event.target.firstChild.focus();
            return;
        }
        todoData.forEach(({label})=>{
            if(label===data){
                cont=false;
            }
        });
        if(!cont){
            event.target.firstChild.value='';
            return
        }

        setTodoData([...todoData, {label:data, important:false,done:false,id:idGen(),date:{
            year:newDate.getFullYear(),
            month:addZero(newDate.getMonth()+1),
            day:addZero(newDate.getDate()),
            hour:addZero(newDate.getHours()),
            minute:addZero(newDate.getMinutes())}}]);
        event.target.firstChild.value='';
    }

    const inputText = (event) =>{
        data=event.target.value;
    }

   const onLabelclick=(iD)=>{
    let newArr;
    todoData.forEach(({label,important,done,id,date},i)=>{
        if(id===iD){
           newArr=[...todoData.slice(0,i),{label, important,done:!done,id,date},...todoData.slice(i+1,todoData.length)];
        }
    });
    setTodoData(()=>newArr);
    };

   const toggleImportant=(iD)=>{
       let newArr;
    todoData.forEach(({label,important,done,id,date},i)=>{
        if(id===iD){
           newArr=[...todoData.slice(0,i),{label, important:!important,done,id,date},...todoData.slice(i+1,todoData.length)];
        }
    });
    setTodoData(()=>newArr);
    };

    useEffect(()=>localStorage.setItem('data',JSON.stringify(todoData)));
   

    return (
        <>
        <AppHeader done={doneLength} todo={todoLength}/>
        <SearchPanel filter={changeFilter} search={searchList} seacrhData={searchData} fil={filter}/>
        <TodoList todos={todoData} onDelete={deleteItem} impotant={toggleImportant} done={onLabelclick} filter={filter} searchData={searchData}/>
        <AddListPanel add={addItem} input={inputText} data={data}/>
        </>
    );
};
export default App;