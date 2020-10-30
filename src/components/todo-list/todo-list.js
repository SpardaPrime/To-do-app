import React from 'react';
import TodoListItem from '../todo-list-item/';
import './todo-list.css';

export default class TodoList extends React.Component{

       
    
render(){
const {filter, todos, searchData}=this.props;

const newTodos= filter==='All'?
                searchData===''?todos:todos.filter(({label})=>label.toUpperCase().includes(searchData.toUpperCase()))
                : filter==='Active'?
                todos.filter(({done})=>done===false):filter==='Done'?
                todos.filter(({done})=>done===true):searchData===''?todos:todos.filter(({date})=>{
                    let newDate = `${date.day}.${date.month}.${date.year}`;
                    return newDate.includes(searchData);
                });
                

const  element = newTodos.map((item)=>{
        const {...it}=item;
        return (
            <li className='list-group-item d-flex justify-content-between align-items-center list ' key={item.id}>
                <TodoListItem 
                lab={it} 
                onDelete={()=>this.props.onDelete(item.id)}
                impotant={()=>this.props.impotant(item.id)}
                done={()=>this.props.done(item.id)}
                />
            </li>
        )
    });
    
    return(
        <>
        <ul className='list-group todo-list'>
            {element}
        </ul>
        
        </>
    );
}
       
    
}

 