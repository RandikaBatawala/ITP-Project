import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default class Add_con_finance extends Component{
    constructor(props){
        super(props);
        this.state={
            con_id:"",
            material_cost:"",
            rough_cost:"",
            ex_crew:"",
            con_des:"",
            estimated_cost:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value,

        })
    }

    onSubmit = (e) =>{
        e.preventDefault();

        const {con_id,material_cost,rough_cost,ex_crew,con_des,estimated_cost} = this.state;

        const data = {
            con_id: con_id,
            material_cost: material_cost,
            rough_cost: rough_cost,
            ex_crew: ex_crew,
            con_des: con_des,
            estimated_cost: estimated_cost
        }
        console.log(data)

        axios.post("/contract_f/save", data).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                        con_id:"",
                        material_cost:"",
                        rough_cost:"",
                        ex_crew:"",
                        con_des:"",
                        estimated_cost:""
                    }
                )
            }
        })
    }


    render(){
        return(
            <div className="container">
                <h2 className="h-tag">Add Estimated Cost for Contract</h2>
                <div className="input-form">
                <form className="needs-validation" noValidate>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contract ID</label>
                        <input type="text"
                        className="form-control"
                        name="con_id"
                        placeholder="Enter contract ID"
                        value={this.state.con_id}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Material cost for the contract</label>
                        <input type="text"
                        className="form-control"
                        name="material_cost"
                        placeholder="Enter material cost"
                        value={this.state.material_cost}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Roughly calculated cost by Architectures</label>
                        <input type="text"
                        className="form-control"
                        name="rough_cost"
                        placeholder="Enter roughly calculated cost"
                        value={this.state.rough_cost}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Expenditure of crew </label>
                        <input type="text"
                        className="form-control"
                        name="ex_crew"
                        placeholder="Enter expenditure of crew"
                        value={this.state.ex_crew}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contract description</label>
                        <input type="text"
                        className="form-control"
                        name="con_des"
                        placeholder="Enter contract description"
                        value={this.state.con_des}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Estimated cost for the contract</label>
                        <input type="text"
                        className="form-control"
                        name="estimated_cost"
                        placeholder="Enter estimated cost"
                        value={this.state.estimated_cost}
                        onChange={this.handleInputChange}/>
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>

                </form>
                </div>
            </div>
            
        )
    }
}