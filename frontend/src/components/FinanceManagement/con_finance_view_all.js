import React, { Component } from 'react';
import axios from 'axios';
class Con_finance_view_all extends Component {
  constructor(props){
  super(props);

  this.state={
    con_finance:[]
  };


  }

  componentDidMount(){
    this.retrieveCon_finance();
  }

  retrieveCon_finance(){
    axios.get("/contract_finances/view").then(res =>{
    if(res.data.success){
      this.setState({
        con_finance:res.data.existingCon_finance
      });

      console.log(this.state.con_finance)
    }


    });
  }

  onDelete = (id) =>{
    axios.delete(`/contract_finance/${id}`).then((res) =>{
      alert("delete success");

      this.retrieveCon_finance();
    });
  }

  render(){
    return(


      <div className="container">
          <div className="hero">
                    <nav className="prmenu">
                        <ul className="">
                            <li><a href="/">Home</a></li>                    
                            <li><a href="/add">Loan and Insurance</a></li>
                            <li><a href="/machinery">Contract Finance</a></li>
                            <li><a href="#portfolio">Income and Outcome</a></li>
                            <li><a href="#contact_form">Generate Report</a></li>
                        </ul>
                    </nav>       
                </div>
          <div>
          <u><h2 className="h-tag">All Contract Finances</h2></u>
        <table className="table">
          <thead>
            <tr>
              <th scope ="col">#</th>
              <th scope ="col">Contract ID</th>
              <th scope ="col">Material cost</th>
              <th scope ="col">Roughly cal cost</th>
              <th scope ="col">Expenditure of crew</th>
              <th scope ="col">Description</th>
              <th scope ="col">Estimated cost</th>
              <th scope ="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.con_finance.map((con_finance ,index) =>(
                <tr key = {index}>
                    <th scope = "row">{index+1}</th>

                    <td>
                      <a href = {`/con-one-view/${con_finance._id}`} style = {{textDecoration:'none'}}>
                      {con_finance.con_id}
                      </a>
                      </td>
                    <td>{con_finance.material_cost}</td>
                    <td>{con_finance.rough_cost}</td>
                    <td>{con_finance.ex_crew}</td>
                    <td>{con_finance.con_des}</td>
                    <td>{con_finance.estimated_cost}</td>
                    <td>
                        <a className = "btn btn-warning" href = {`/Edit_con_finance/${con_finance._id}`}>
                            <i className ="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;
                        <a className = "btn btn-danger" href = "#" onClick = {() =>this.onDelete(con_finance._id)}>
                            <i className ="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
                    </td>



                </tr>
            
            ))}
          </tbody>
        </table>

        <button className="btn btn-success"><a href="/con-finance-add" style ={{textDecoration : 'none', color:'white'}}>Create new contract finance</a></button>
          
      
      </div>
      </div>


    )
            }
}


export default Con_finance_view_all;

