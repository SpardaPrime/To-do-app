import React from 'react';
import './todo-list-item.css';

export default class TodoListItem extends React.Component{

   
  
    render(){
        const {label,important,done,date} = this.props.lab;
        const don= done===false?'text-all':'text';
        const imp= important===false?'text-all':'important';

        return(
        <>
        <div className="d-flex align-items-start flex-column time-size ">
            <span className="time-span-float">{`${date.day}.${date.month}.${date.year}`}</span>
        <span className="time-span-float">{`${date.hour} : ${date.minute}`}</span>
        </div>
        <span 
        className={`list ${imp} ${don}`}
        onClick={this.props.done}
        >{label}</span>

        <div className="">
        <button type="button" onClick={this.props.impotant} className="btn btn-light btn-lg button-pading5  button-size btn-important"><svg width="30px" height="30px" viewBox="0 0 16 16" className="bi bi-shield-exclamation " fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z"/>
<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
</svg></button>

        <button type="button" onClick={this.props.onDelete} className="btn btn-light btn-lg button-size btn-del"><svg width="30px" height="30px" viewBox="0 0 16 16" className=" bi bi-x-square " fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
<path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>

        </div>
        </>
        )
    
    }
}



