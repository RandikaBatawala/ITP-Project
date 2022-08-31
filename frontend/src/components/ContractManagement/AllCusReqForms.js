import React, { Component ,useRef } from 'react';
import axios from 'axios';
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";

export default class AllCusReqForms extends Component {
  constructor(props){
    super(props);

    this.state={
        contractforms:[]
    };
  }
  
  componentDidMount(){
    this.retrievecontractforms();
  }

  retrievecontractforms(){
    axios.get("/contractforms").then(res =>{
      if(res.data.success){
        this.setState({
            contractforms:res.data.existingContractforms
        });

        console.log(this.state.contractforms)
      
      }
    });
  }
  
  onDelete = (id) => {
    axios.delete(`/contractforms/delete/${id}`).then((res) => {
      alert("Deleted Successfuly");
      this.retrievecontractforms();
    });
  }


  filterData(contractforms,searchkey){
    const result =contractforms.filter((contractforms) =>
    contractforms.contractID.includes(searchkey)
    )
this.setState({contractforms:result})
  }


  handleSearchArea = (e) =>{
    const searchkey = e.currentTarget.value;

    axios.get("/contractforms").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingContractforms, searchkey)
        
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

                <u><h2 className="h-tag">Customer Requirements Form Details</h2></u>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Contract ID</th>
                            <th scope='col'>Contract Category</th>
                            <th scope='col'>Site Location</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Expected Budget</th>
                            <th scope='col'>Expected Start Date</th>
                            <th scope='col'>Expected End Date</th>
                            <th scope='col'>Breif description of Requirements</th>
                            <th scope='col'>Expected Output Images</th>
                            <th scope='col'>Prefered Meterial Types Description</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contractforms.map((contractforms,index) =>(
                            
                              <tr>
                              
                                <th scope='row'>{index+1}</th>
                                <td><a href={`/Cus-Req-One-View/${contractforms._id}`} style={{textDecoration:'none'}}> {contractforms.contractID}</a></td>
                                <td>{contractforms.contractCategory}</td>
                                <td>{contractforms.siteLocation}</td>
                                <td>{contractforms.email}</td>
                                <td>{contractforms.expectedBudget}</td>
                                <td>{contractforms.expectedSdate}</td>
                                <td>{contractforms.expectedEdate}</td>
                                <td>{contractforms.breifDescription}</td>
                                <td>{contractforms.expectedOutputImagelinks}</td>
                                <td>{contractforms.preferedMeterialDescription}</td>

                                <td>
                                    
                                    <a className='btn btn-danger' href="#" onClick={() => this.onDelete(contractforms._id)}>
                                        <i className='far fa-trash-alt'></i>&nbsp; Delete
                                    </a>
                                  
                                </td>
                              
                              </tr>
 
                        ))}
                    </tbody> 
                </table> 
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
      <AllCusReqForms ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

render(<Example />, document.querySelector("#root"));


