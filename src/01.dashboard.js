import React, { Component } from 'react';
import './commancss.css'


class DashBoard extends Component {
    state = { employees:[
                            {No: 11, Name: "Sagar", Address: "Maharastra"},
                            {No: 15, Name: "Gagan", Address: "Gujarat"},
                            {No: 18, Name: "Sagun", Address: "Jammu"},
                            {No: 14, Name: "Suman", Address: "Hariyana"},
                            {No: 21, Name: "Raghav", Address: "Punjab"},
                            {No: 13, Name: "Ravi", Address: "Chennai"},
                            {No: 17, Name: "Shobha", Address: "Delhi"}
                       ],
                       searchText: "",
                       employee: {No: 0, Name: "", Address: ""}
            } ;

    Add = ()=>{
        debugger;
        var copyOfEmployee = {...this.state.employee};
        var copyofCollection = [...this.state.employees];
        copyofCollection.push(copyOfEmployee);

        this.setState({employees: copyofCollection});
        this.setState({employee : {No:0,Name: "", Address: ""}}) ;
    }
    Clear = ()=>{
       this.setState({employee : {No:0,Name: "", Address: ""}});
    }
    Delete = (args)=>{
        var filteredCollection = [];
        this.state.employees.map((emp)=>
        {
            if(emp.No !== parseInt(args.target.id)){
                filteredCollection.push(emp);
            }
        });
        this.setState({employees: filteredCollection});
    }

    HandleAdd = (args)=>{
        debugger;
        var copyOfEmployee = {...this.state.employee};
        copyOfEmployee[args.target.name] = args.target.value;
        this.setState({employee : copyOfEmployee});
    }

    HandleChange = (args)=>{
        var dataSearch = args.target.value;
        this.setState({searchText: dataSearch});
    }

    render() { 
        return (<>
                    <hr></hr>
                    <center>
                        No: <input type={"text"} 
                                    name="No"
                                    value={this.state.employee.No}
                                    onChange={this.HandleAdd}/>
                        Name: <input type={"text"} 
                                    name="Name"
                                    value={this.state.employee.Name}
                                    onChange={this.HandleAdd}/>
                        Address: <input type={"text"} 
                                    name="Address"
                                    value={this.state.employee.Address}
                                    onChange={this.HandleAdd}/>    
                    
                        <button onClick={this.Add}>Add Record</button>
                        <button onClick={this.Clear}>Clear</button>
                    </center>

                    <hr></hr>
                    <hr></hr>

                    
                    <center>
                            Search : <input type={"text"} 
                                            value={this.state.searchText} 
                                            onChange={this.HandleChange}/>
                    </center>
                    <hr></hr>

                    <div className='myContainer'>
                        {
                            this.state.employees.map((emp)=>{
                                if(this.state.searchText!=""){
                                    if(emp.Address.toLowerCase().includes(this.state.searchText.toLowerCase())){
                                        return (<div className='myContent' key={emp.No}>
                                                    <button className='btnDelete'
                                                    id={emp.No}
                                                    onClick={this.Delete}>X</button>

                                                    <h1>No: {emp.No}</h1>
                                                    <h1>Name: {emp.Name}</h1>
                                                    <h1>Address: {emp.Address}</h1>
                                            </div>)
                                    }
                                }
                                else{
                                    return (<div className='myContent' key={emp.No}>
                                                    <button className='btnDelete'
                                                    id={emp.No}
                                                    onClick={this.Delete}>X</button>

                                                    <h1>No: {emp.No}</h1>
                                                    <h1>Name: {emp.Name}</h1>
                                                    <h1>Address: {emp.Address}</h1>
                                            </div>)
                                }
                            })
                        }
                    </div>
        
        
        
        
        
        
        
        
        </>);
    }
}
 
export default DashBoard;