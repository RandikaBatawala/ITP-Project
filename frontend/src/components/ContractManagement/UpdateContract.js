import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams,useNavigate } from 'react-router-dom'
import { updatedata } from './context/ContextProvider'



const Edit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

   const { setUPdata} = useContext(updatedata)

   const navigate = useNavigate("");

    const [inpval, setINP] = useState({
        
        contractID:"",
        customerID:"",
        contractCategory:"",
        cusReqFormlinks:"",
        suggestedBluePrintlinks:"",
        estimatedCost:"",
        status:""
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

        const res = await fetch(`/addContracts/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data.addContracts);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data.addContracts)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
        console.log("test inpval",inpval);
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();

        const {contractID,customerID,contractCategory,cusReqFormlinks,suggestedBluePrintlinks,estimatedCost,status} = inpval;

        const res2 = await fetch(`/addContracts/update/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                contractID,customerID,contractCategory,cusReqFormlinks,suggestedBluePrintlinks,estimatedCost,status
            })
        });

        const data2 = await res2.json();
        console.log(data2);
        alert("Do you want to  edit that data?");

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            navigate("/all-contracts")
            setUPdata(data2);
        }

    }



    
        return(
            <div className="container">
                <h2 className="h-tag">Edit Contract Details</h2>
                <div className="input-form">
                <form className="needs-validation" noValidate>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contract ID</label>
                        <input type="text"
                        className="form-control"
                        name="contractID"
                        placeholder="Enter contract ID"
                        defaultValue={inpval.contractID}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Customer ID :</label>
                        <input type="text"
                        className="form-control"
                        name="customerID"
                        placeholder="Enter Customer ID"
                        defaultValue={inpval.customerID}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contract Category :</label>
                        <input type="text"
                        className="form-control"
                        name="contractCategory"
                        placeholder="Enter Contract Category"
                        defaultValue={inpval.contractCategory}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Customer Requirements Form :</label>
                        <input type="text"
                        defaultValue={inpval.cusReqFormlinks}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Suggested Blue Print :</label>
                        <input type="text"
                        defaultValue={inpval.suggestedBluePrintlinks}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Estimated Cost :</label>
                        <input type="text"
                        className="form-control"
                        name="estimatedCost"
                        placeholder="Enter estimated cost"
                        defaultValue={inpval.estimatedCost}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contract Status :</label>
                        <select className="form-control"
                            name="status"
                            defaultValue={inpval.status}
                            onChange={setdata}>
                            <option value="Ongoing">Ongoing Contract</option>
                            <option value="Pending">Pending Contract</option>
                            <option value="Completed">Completed Contract</option>
                            <option value="Rejected">Rejected Contract</option>
                        </select>
                        
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

