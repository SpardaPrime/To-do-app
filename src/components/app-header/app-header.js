import React from 'react';
import './app-header.css';

const AppHeader =({done,todo})=>{
    return (
    <>
    <div className="d-flex justify-content-between align-items-end head ">
        <div className="todo">
        <h1  className="tod">My To Do List</h1>
        </div>
        <div className="info">
        <h4>{` More to do ${todo}`}</h4>
        <h4>{`Done ${done}  ✓ `}</h4>
        </div>
    
    </div>
    
    </>
    )
};

export default AppHeader;