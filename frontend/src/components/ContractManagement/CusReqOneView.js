import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useParams,useNavigate } from 'react-router-dom';
import { updatedata } from './context/ContextProvider';
import ReactToPrint from 'react-to-print'



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

    // const setdata = (e) => {
    //     console.log(e.target.value);
    //     const { name, value } = e.target;
    //     setINP((preval) => {
    //         return {
    //             ...preval,
    //             [name]: value
    //         }
    //     })
    // }


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

        // const data2 = await res2.json();
        // console.log(data2);
        // alert("Do you want to  edit that data?");
        // if(res2.status === 422 || !data2){
        //     alert("fill the data");
        // }else{
        //     navigate("/con-finance-view-all")
        //     setUPdata(data2);
        // }

    }



    
    return(
        <div className="container"
        // ref={el=>(this.componentRef=el)}
        >
            <div className="hero">
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
            </div>
            <div >
            <h2 className="h-tag">Contract Requirements Details</h2>
            <div className="input-form">
            <form className="forms" noValidate>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Contract ID:</label>&nbsp;<br></br>
                    <input type="text"
                    className="inputcell"
                    name="contractID"
                    placeholder="Enter contract ID"
                    defaultValue={inpval.contractID}
                    />
                </div>

                
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Site Location :</label>&nbsp;<br></br>
                    <input type="text"
                    className="inputcell"
                    name="siteLocation"
                    placeholder="Enter Site Location"
                    defaultValue={inpval.siteLocation}
                    />
                </div>
                
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Email :</label>&nbsp;<br></br>
                    <input type="text"
                    className="inputcell"
                    name="email"
                    placeholder="Enter Email"
                    defaultValue={inpval.email}
                    />
                </div>

               
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Expected Budget:</label>&nbsp;<br></br>
                    <input type="text"
                    className="inputcell"
                    name="expectedBudget"
                    placeholder="Enter Expected Budget"
                    defaultValue={inpval.expectedBudget}
                    />
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Expected Start Date:</label>&nbsp;<br></br>
                    <input type="text"
                    className="inputcell"
                    name="expectedSdate"
                    placeholder="Enter Expected Start Date"
                    defaultValue={inpval.expectedSdate}
                    />
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Expected End Date:</label>&nbsp;<br></br>
                    <input type="text"
                    className="inputcell"
                    name="expectedEdate"
                    placeholder="Enter Expected End Date"
                    defaultValue={inpval.expectedEdate}
                    />
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Breif description of Requirements:</label>&nbsp;<br></br>
                    <input type="text"
                    className="inputcell"
                    name="breifDescription"
                    placeholder="Enter Breif description of Requirements"
                    defaultValue={inpval.breifDescription}
                    />
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Expected Output Images :</label>&nbsp;<br></br>
                    <input type="text"
                    className="inputcell"
                    name="expectedOutputImagelinks"
                    placeholder="Enter Expected Output Images"
                    defaultValue={inpval.expectedOutputImagelinks}
                    />
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Prefered Meterial Types Description :</label>&nbsp;<br></br>
                    <input type="text"
                    className="inputcell"
                    name="preferedMeterialDescription"
                    placeholder="Enter Prefered Meterial Types Description "
                    defaultValue={inpval.preferedMeterialDescription}
                    />
                </div>
                

                {/* <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={updateuser} >
                    <i className="far fa-check-square"></i>
                    
                    
                    &nbsp; Print
                </button> */}

            </form>
            </div>
            
 
            </div>
            {/* <div className='text-right mb-3'>
                        <ReactToPrint
                            trigger={()=>{
                            return <button className="btn btn-success" ><i class="fa-solid fa-file-pdf"></i>&nbsp; Print Report </button>
                            }}
                            content={()=>this.componentRef}
                            documentTitle = 'Contract Requirements Details'
                            pageStyle= "print"
                        />
                    </div> */}
        </div>
        
    )
}

export default Edit;
