import React, { Component ,useRef } from 'react';
import axios from 'axios';
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";

export default class AllContracts extends Component {
  constructor(props){
    super(props);

    this.state={
      addContracts:[]
    };
  }
  
  componentDidMount(){
    this.retrieveaddContracts();
  }

  retrieveaddContracts(){
    axios.get("/addContracts").then(res =>{
      if(res.data.success){
        this.setState({
          addContracts:res.data.existingContracts
        });

        console.log(this.state.addContracts)
      
      }
    });
  }
  
  onDelete = (id) => {
    axios.delete(`/addContracts/delete/${id}`).then((res) => {
      alert("Deleted Successfuly");
      this.retrieveaddContracts();
    });
  }


  filterData(addContracts,searchkey){
    const result =addContracts.filter((addContracts) =>
    addContracts.contractID.includes(searchkey)
    )
this.setState({addContracts:result})
  }


  handleSearchArea = (e) =>{
    const searchkey = e.currentTarget.value;

    axios.get("/addContracts").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingContracts, searchkey)
        
      }
  
  
      });

  }

  render(){
    return (
        
      <div className="container">
                <div className="hero">
                    <nav className="prmenu">
                        <ul className="">
                            <li><a href="/contract-home">Contract Home</a></li>
                            <li><a href="/all-contracts">All Contracts</a></li>                        
                            <li><a href="/add-contract">Add Contract</a></li>
                            <li><a href="/All-Cus-Req-Forms">Customer Requirments Form Details</a></li>
                            {/* <li><a href="#">Rejected Contracts</a></li> */}
                        </ul>
                    </nav>       
                </div>
                <input
                className="form-control"
                type="search"
                placeholder="Search"
                name="searchQuery"
                onChange={this.handleSearchArea}>

                </input>

                <u><h2 className="h-tag">All Contracts</h2></u>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Contract ID</th>
                            <th scope='col'>Customer ID</th>
                            <th scope='col'>Contract Category</th>
                            <th scope='col'>Customer Requirments Form Links</th>
                            <th scope='col'>Suggested Blue Print Links</th>
                            <th scope='col'>Estimated Cost</th>
                            <th scope='col'>Contract Status</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.addContracts.map((addContracts,index) =>(
                            
                              <tr>
                              
                                <th scope='row'>{index+1}</th>
                                <td><a href={`/contract-profile/${addContracts._id}`} style={{textDecoration:'none'}}> {addContracts.contractID}</a></td>
                                <td><a href={'#'} >{addContracts.customerID}</a></td>
                                <td>{addContracts.contractCategory}</td>
                                <td>{addContracts.cusReqFormlinks}</td>
                                <td>{addContracts.suggestedBluePrintlinks}</td>
                                <td>{addContracts.estimatedCost}</td>
                                <td>{addContracts.status}</td>

                                <td>
                                    <a className='btn btn-warning' href={`/update-contract/${addContracts._id}`}>   
                                        <i className='fas fa-edit'></i>&nbsp; Edit
                                    </a>
                                    &nbsp;
                                    <a className='btn btn-danger' href="#" onClick={() => this.onDelete(addContracts._id)}>
                                        <i className='far fa-trash-alt'></i>&nbsp; Delete
                                    </a>
                                  
                                </td>
                              
                              </tr>
 
                        ))}
                    </tbody> 
                </table>
              <div>
                <button className='btn btn-success'><a href='/add-contract' style={{textDecoration:'none', color:'white'}}>Add a New Contract</a></button>
                <button className='btn btn-success'><a href='/Print-Table-All-Contracts' style={{textDecoration:'none', color:'white'}}>Get Contracts Report</a></button>

              </div>
            </div>
      

    )
  }
}


const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <AllContracts ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

render(<Example />, document.querySelector("#root"));


