import React, { Component } from 'react';
import './App.css';
class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: 'Account Details',
      act: 0,
      index: '',
      AccData: []
    }
  }

    componentDidMount(){
    this.refs.fname.focus();
  }
  SubmitFunction = (e) =>{
    e.preventDefault();
    let edata = this.state.AccData;
    let accnum = this.refs.accnum.value;
    let fname = this.refs.fname.value;
    let lname = this.refs.lname.value;
    let email = this.refs.email.value;
    e.preventDefault();

    if (this.state.act === 0) { //new
      let data = {
        accnum,fname, lname,email
      }
  
      edata.push(data); 
    } else {                   //update
      let index = this.state.index;
      edata[index].accnum = accnum;
      edata[index].fname = fname;
      edata[index].lanem = lname;
      edata[index].email = email;
    }

    this.setState({
      AccData: edata
    });

    this.refs.myForm.reset();
    this.refs.fname.focus();
  }

  Remove = (i) => {
    let edata  = this.state.AccData;
    edata.splice(i,1);
    this.setState({
      AccData:edata
    });

    this.refs.myForm.reset();
    this.refs.fname.focus();
  }
  
  Edit = (i) => {
    window.confirm('Do you want to edit the values');
    let data = this.state.AccData[i];
    this.refs.accnum.value=data.accnum;
    this.refs.fname.value = data.fname;
    this.refs.lname.value = data.lname;
    this.refs.email.value = data.email;
    

    this.setState({
      act: 1,
      index: i 
    })

    this.refs.fname.focus();
  }
  
  render() {
    let edata = this.state.AccData;
    return (
      <div className="App-header ">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="App-Details">
          Account number:<input type="text" ref="accnum"/>
         First Name: <input type="text"  ref="fname"/>
         Last Name: <input type="text" ref="lname" />
         Email:<input type="text" ref="email"/>
         <button onClick={(e)=>this.SubmitFunction(e)} className="myButton">Submit</button>
          </form>
        
        <pre className ="App-body">          
          {edata.map((data, i) =>
            <li key={i} >
               {data.accnum}{" "}{data.fname}{" "}{data.lname}{" "}{data.email}{" "}
              
              <button onClick={()=>this.Remove(i)} className="App-Remove">Remove</button>
              <button onClick={()=>this.Edit(i)} className="App-Edit">Edit</button>
            </li>
          )}
            </pre>

      </div>
    
    );
  }
}

export default App;