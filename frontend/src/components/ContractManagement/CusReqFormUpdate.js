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
        contractCategory:"",
        siteLocation:"",
        email:"",
        expectedBudget:"",
        expectedSdate:"",
        expectedEdate:"",
        breifDescription:"",
        expectedOutputImagelinks:"",
        preferedMeterialDescription:""
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

        const res = await fetch(`/contractforms/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data.contractforms);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data.contractforms)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
        console.log("test inpval",inpval);
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();

        const {contractID,contractCategory,siteLocation,email,expectedBudget,expectedSdate,expectedEdate,breifDescription,expectedOutputImagelinks,preferedMeterialDescription} = inpval;

        const res2 = await fetch(`/contractforms/update/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                contractID,contractCategory,siteLocation,email,expectedBudget,expectedSdate,expectedEdate,breifDescription,expectedOutputImagelinks,preferedMeterialDescription
            })
        });

        const data2 = await res2.json();
        console.log(data2);
        alert("Do you want to  edit that data?");

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            alert("Data added succesfully!");
            setUPdata(data2);
        }

    }



    
        return(
            <div className="container">
                
                <h2 className="h-tag">Edit Contract Requirements Details</h2>
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
                        <label style={{marginBottom:'5px'}}>Site Location :</label>
                        <input type="text"
                        className="form-control"
                        name="siteLocation"
                        placeholder="Enter Site Location"
                        defaultValue={inpval.siteLocation}
                        onChange={setdata}/>
                    </div>
                    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email :</label>
                        <input type="text"
                        className="form-control"
                        name="email"
                        placeholder="Enter Email"
                        defaultValue={inpval.email}
                        onChange={setdata}/>
                    </div>

                   
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Expected Budget:</label>
                        <input type="text"
                        className="form-control"
                        name="expectedBudget"
                        placeholder="Enter Expected Budget"
                        defaultValue={inpval.expectedBudget}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Expected Start Date:</label>
                        <input type="text"
                        className="form-control"
                        name="expectedSdate"
                        placeholder="Enter Expected Start Date"
                        defaultValue={inpval.expectedSdate}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Expected End Date:</label>
                        <input type="text"
                        className="form-control"
                        name="expectedEdate"
                        placeholder="Enter Expected End Date"
                        defaultValue={inpval.expectedEdate}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Breif description of Requirements:</label>
                        <input type="text"
                        className="form-control"
                        name="breifDescription"
                        placeholder="Enter Breif description of Requirements"
                        defaultValue={inpval.breifDescription}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Expected Output Images :</label>
                        <input type="text"
                        className="form-control"
                        name="expectedOutputImagelinks"
                        placeholder="Enter Expected Output Images"
                        defaultValue={inpval.expectedOutputImagelinks}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Prefered Meterial Types Description :</label>
                        <input type="text"
                        className="form-control"
                        name="preferedMeterialDescription"
                        placeholder="Enter Prefered Meterial Types Description "
                        defaultValue={inpval.preferedMeterialDescription}
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

