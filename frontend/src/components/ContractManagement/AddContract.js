import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default class AddContract extends Component{
    constructor(props){
        super(props);
        this.state={
            contractID:"",
            customerID:"",
            contractCategory:"",
            cusReqFormlinks:"",
            suggestedBluePrintlinks:"",
            estimatedCost:"",
            status:"",
            errors : {}
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value,

        })
    }

    demofill = ()=>{

        // const {con_id,material_cost,rough_cost,ex_crew,con_des,estimated_cost} = this.state;
    
        this.setState({
            contractID:"CON099",
            customerID:"CUS099",
            contractCategory:"House",
            cusReqFormlinks:"hnujgyufgyguygih",
            suggestedBluePrintlinks:"hgyufuytgk8iuylo9o",
            estimatedCost:"Rs.80,000,000.00",
            status:"Ongoing Contract"
        })
    
       }

    formValidation = () =>{
        const {contractID,customerID,contractCategory,cusReqFormlinks,suggestedBluePrintlinks,estimatedCost,status} = this.state;
        let isValid = true;
        const errors = {};

        if(!contractID.includes("CON")){
            errors.contractIDCON = "Contract id should start with CON."
            isValid = false;
        }

        if(!customerID.includes("CUS")){
            errors.customerIDCUS = "Contract id should start with CUS."
            isValid = false;
        }

        if(!estimatedCost.includes("Rs")){
            errors.estimatedCostRs = "Contract id should start with Rs"
            isValid = false;
        }
        this.setState({errors});
        return isValid;
    }




    onSubmit = (e) =>{
        e.preventDefault();
        const isValid = this.formValidation();
        if(isValid){
        const {contractID,customerID,contractCategory,cusReqFormlinks,suggestedBluePrintlinks,estimatedCost,status} = this.state;

        const data = {
            contractID: contractID,
            customerID: customerID,
            contractCategory: contractCategory,
            cusReqFormlinks: cusReqFormlinks,
            suggestedBluePrintlinks:suggestedBluePrintlinks,
            estimatedCost: estimatedCost,
            status: status
        }
        console.log(data)

        axios.post("/addContracts/save", data).then((res)=>{
            if(res.data.success){
                alert("New Contract Added.");
                window.location = "/all-contracts"

                this.setState(
                    {
                        contractID:"",
                        customerID:"",
                        contractCategory:"",
                        cusReqFormlinks:"",
                        suggestedBluePrintlinks:"",
                        estimatedCost:"",
                        status:""
                    }
                )
            }
        })
    }
    }


    render(){
        const {contractID,customerID,contractCategory,cusReqFormlinks,suggestedBluePrintlinks,estimatedCost,status, errors} = this.state;

        return(
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
                <h2 className="h-tag">Add Contract Details</h2>
                <div className="input-form">
                <form className="forms" noValidate>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contract ID :</label>&nbsp;<br></br>
                        <input type="text"
                        className="inputcell"
                        name="contractID"
                        placeholder="Enter contract ID"
                        value={this.state.contractID}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Customer ID :</label>&nbsp;<br></br>
                        <input type="text"
                        className="inputcell"
                        name="customerID"
                        placeholder="Enter Customer ID "
                        value={this.state.customerID}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contract Category :</label>&nbsp;<br></br>
                        <input type="text"
                        className="inputcell"
                        name="contractCategory"
                        placeholder="Enter Contract Category"
                        value={this.state.contractCategory}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Customer Requirements Form :</label>&nbsp;<br></br>
                        <input type="file"
                        className="inputcell"
                        name="cusReqFormlinks"
                        placeholder="Enter expenditure of crew"
                        value={this.state.cusReqFormlinks}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Suggested Blue Print :</label>&nbsp;<br></br>
                        <input type="file"
                        className="inputcell"
                        name="suggestedBluePrintlinks"
                        placeholder="Enter contract description"
                        value={this.state.suggestedBluePrintlinks}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Estimated Cost :</label>&nbsp;<br></br>
                        <input type="text"
                        className="inputcell"
                        name="estimatedCost"
                        placeholder="Enter estimated cost"
                        value={this.state.estimatedCost}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contract Status :</label>&nbsp;<br></br>
                        {/* <input type="text"
                        className="form-control"
                        name="status"
                        placeholder="Enter Status as Completed/Ongoing/Pending/Rejected"
                        value={this.state.status}
                        onChange={this.handleInputChange}/> */
                        }

                        <select className="inputcell"
                        name="status"
                        placeholder="Enter Status as Completed/Ongoing/Pending/Rejected"
                        value={this.state.status}
                        onChange={this.handleInputChange}>

                        <option value="Ongoing">Ongoing Contract</option>
                        <option value="Pending">Pending Contract</option>
                        <option value="Completed">Completed Contract</option>
                        <option value="Rejected">Rejected Contract</option>
                        </select>
                    </div>

                    {Object.keys(errors).map((key)=>{
                            return <div style={{color : "red"}} key = {key}>{errors[key]}</div>})}


                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>


                </form>

                <button className="btn btn-success" type="demo"  style={{marginTop:'15px'}} onClick={this.demofill} >

                   

                    <i className="far fa-check-square"></i>

                    &nbsp; Demo

                   

                </button>
                </div>
            </div>
            
        )
    }
}








