import React, {Component} from "react";
import axios from "axios";
import { Link, renderMatches, useParams } from 'react-router-dom';


export default class Con_one_view extends Component{

   constructor(props){
        super(props);

      this.state ={
            con_finance:{} 
        };
    }


    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/contract_finance_one/${id}`).then((res) =>{
           if(res.data.success){
           this.setState({
                 con_finance:res.data.con_finance
            });

                console.log(this.state.con_finance);
            }
    })
}

    render(){
        const {con_id,material_cost,rough_cost,ex_crew,con_des,estimated_cost} = this.state.con_finance;

        return (
            <div style={{marginTop:'20px'}}>
                <h4>{con_id}</h4>
                <hr/>
                <dl className="row">
                    <dt className="col-sm-3">Cost for materials</dt>
                    <dd className="col-sm-9">{material_cost}</dd>

                    <dt className="col-sm-3">Roughly Calculated cost</dt>
                   <dd className="col-sm-9">{rough_cost}</dd>

                   <dt className="col-sm-3">Expenditure of crew</dt>
                    <dd className="col-sm-9">{ex_crew}</dd>

                    <dt className="col-sm-3">Contract Description</dt>
                    <dd className="col-sm-9">{con_des}</dd>

                    <dt className="col-sm-3">Estimated cost</dt>
                    <dd className="col-sm-9">{estimated_cost}</dd>

                </dl>
                
                
            </div>
        )
    }
}