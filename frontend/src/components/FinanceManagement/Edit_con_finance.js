

import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams,useNavigate } from 'react-router-dom'
import { updatedata } from './context/ContextProvider'

//export default class Edit_con_finance extends Component{
  //  constructor(props){
    //    super(props);
      //  this.state={
        //    con_id:"",
          //  material_cost:"",
            //rough_cost:"",
            //ex_crew:"",
            //con_des:"",
            //estimated_cost:""
       // }
    //}


    //onSubmit = (e) =>{
        
      //  e.preventDefault();

        //const id = this.props.match.params.id;
        //const {con_id,material_cost,rough_cost,ex_crew,con_des,estimated_cost} = this.state;

        //const data = {
          //  con_id: con_id,
            //material_cost: material_cost,
            //rough_cost: rough_cost,
            //ex_crew: ex_crew,
            //con_des: con_des,
            //estimated_cost: estimated_cost
       // }
       // console.log(data)

        //axios.put(`/contract_finance/update/${id}`, data).then((res)=>{
          //  if(res.data.success){
            //    this.setState(
              //      {
                //        con_id:"",
                  //      material_cost:"",
                    //    rough_cost:"",
                      //  ex_crew:"",
                        //con_des:"",
                        //estimated_cost:""
                    //}
                //)
            //}
        //})
    //}

    //componentDidMount(){
      //  const id = this.props.match.params.id;

        //axios.get(`/contract_finance_one/${id}`).then((res) =>{
           //if(res.data.success){
          // this.setState({
        //         con_finance:res.data.con_finance
      //      });

    //            console.log(this.state.con_finance);
  //          }
    //})
//}

const Edit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

   const { setUPdata} = useContext(updatedata)

   const navigate = useNavigate("");

    const [inpval, setINP] = useState({
        con_id:"",
        material_cost:"",
        rough_cost:"",
        ex_crew:"",
        con_des:"",
        estimated_cost:""
    });

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`/contract_finance_one/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data.con_finance);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data.con_finance)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
        console.log("test inpval",inpval);
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();

        const {con_id,material_cost,rough_cost,ex_crew,con_des,estimated_cost} = inpval;

        const res2 = await fetch(`/contract_finance/update/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                con_id,material_cost,rough_cost,ex_crew,con_des,estimated_cost
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            navigate("/con-finance-view-all")
            setUPdata(data2);
        }

    }



    
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
                        value={inpval.con_id}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Material cost for the contract</label>
                        <input type="text"
                        className="form-control"
                        name="material_cost"
                        placeholder="Enter material cost"
                        value={inpval.material_cost}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Roughly calculated cost by Architectures</label>
                        <input type="text"
                        className="form-control"
                        name="rough_cost"
                        placeholder="Enter roughly calculated cost"
                        value={inpval.rough_cost}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Expenditure of crew </label>
                        <input type="text"
                        className="form-control"
                        name="ex_crew"
                        placeholder="Enter expenditure of crew"
                        value={inpval.ex_crew}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contract description</label>
                        <input type="text"
                        className="form-control"
                        name="con_des"
                        placeholder="Enter contract description"
                        value={inpval.con_des}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Estimated cost for the contract</label>
                        <input type="text"
                        className="form-control"
                        name="estimated_cost"
                        placeholder="Enter estimated cost"
                        value={inpval.estimated_cost}
                        onChange={setdata}/>
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={updateuser} >
                        <i className="far fa-check-square"></i>
                        
                        
                        &nbsp; Save
                    </button>

                </form>
                </div>
            </div>
            
        )
    }

export default Edit;

