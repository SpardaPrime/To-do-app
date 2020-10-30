import React from 'react';
import './add-list-panel.css';

const AddListPanel=(props)=>{
    const {add, input,data} = props;
    return(
        <>
        <form onSubmit={add} encType="text/plain" className="d-flex justify-content-between align-items-center panel add-panel">
            <input onChange={input} placeholder="What do you want to do" type="text" className="form-control form-control-lg" value={data}/>
            <button type="submit" className="btn btn-light  btn-lg">Отправить</button>
        </form>
        </>
    )
};

export default AddListPanel;
