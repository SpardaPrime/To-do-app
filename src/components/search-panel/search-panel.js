import React from 'react';
import './search-panel.css';

export default class SearchPanel extends React.Component{
  render(){
    const {filter, search, seacrhData,fil}=this.props;
    return( 
      <>
      <div className="d-flex justify-content-between align-items-center panel">
      <input onChange={search} className="form-control form-control-lg" placeholder="Search" value={seacrhData}/>
  <div className="btn-group btn-group-toggle" data-toggle="buttons">
<button onClick={filter} className={`btn btn-all-date btn-lg ${fil==='All'? 'value-all-date':''}`} >
  All
</button>
<button onClick={filter} className={`btn btn-all-date btn-lg ${fil==='Date'? 'value-all-date':''} `}>
  Date
</button>
<button onClick={filter} className={`btn btn-active btn-lg ${fil==='Active'?'value-active':''}`}>
  Active
</button>
<button onClick={filter} className={`btn btn-done btn-lg ${fil==='Done'?'value-done':''}`}>
  Done
</button>
  </div>
      </div>
 
  </>
  );
  }
}
