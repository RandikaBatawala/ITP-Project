
import React, {useState} from "react";
import axios from "axios";

function CusReqForm(){

    const [contractID, setContractID] = useState("");
    const [contractCategory, setContractCategory] = useState("");
    const [siteLocation, setSiteLocation] = useState("");
    const [email, setEmail] = useState("");
    const [expectedBudget, setExpectedBudget] = useState("");
    const [expectedSdate, setExpectedSdate] = useState("");
    const [expectedEdate, setExpectedEdate] = useState("");
    const [breifDescription, setBreifDescription] = useState("");
    // const [expectedOutputImagelinks, setExpectedOutputImagelinks] = useState("");
    const [preferedMeterialDescription, setPreferedMeterialDescription] = useState("");

    function sendData(e){
        
        e.preventDefault();
        
        const newReqForm ={
            contractID,
            contractCategory,
            siteLocation,
            email,
            expectedBudget,
            expectedSdate,
            expectedEdate,
            breifDescription,
            // expectedOutputImagelinks,
            preferedMeterialDescription
        }

        axios.post("/contractforms/save", newReqForm).then(()=>{
            alert("New Contract Added.");
            setContractID("");            
            setContractCategory("");
            setSiteLocation("");
            setEmail("");
            setExpectedBudget("");
            setExpectedSdate("");
            setExpectedEdate("");
            setBreifDescription("");
            // setExpectedOutputImagelinks("");
            setPreferedMeterialDescription("");
        }).catch((err)=>{
            alert(err);
        })

    }


    return(
        <div className="container">
            
            <u><h2 className="h-tag">Customer Requirements Form</h2></u>
            <div className="input-form">
            <form className="forms" onSubmit={sendData}>
                <div className="form-group">
                    <label for="ID">Contract ID :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="ID" placeholder="Enter Contract ID" pattern="[CON]{0-9}{0-9}{0-9}" title="Three letter country code"onChange={(e) =>{

                        setContractID(e.target.value);

                    }}></input>
                </div>
                
                <div className="form-group">
                    <label for="description">Contract Category :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="description" placeholder="Enter Contract Category" onChange={(e) =>{

                        setContractCategory(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="description">Site Location : </label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="description" placeholder="Enter Your Site Location" onChange={(e) =>{

                        setSiteLocation(e.target.value);

                    }}></input>
                </div>

                
                <div className="form-group">
                    <label for="date">Email :</label>&nbsp;<br></br>
                    <input type="email"  className="inputcell" id="Quantity" onChange={(e) =>{

                        setEmail(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="date">Expected Budget :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="date" placeholder="Enter your Expected Budget" onChange={(e) =>{

                        setExpectedBudget(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="ID">Expected Start Date :</label>&nbsp;<br></br>
                    <input type="date" className="inputcell" id="ID" placeholder="Enter Your Expected Start Date" pattern="[CON]{0-9}{0-9}{0-9}" title="Three letter country code"onChange={(e) =>{

                        setExpectedSdate(e.target.value);

                    }}></input>
                </div>
                
                <div className="form-group">
                    <label for="description">Expected End Date :</label>&nbsp;<br></br>
                    <input type="date" className="inputcell" id="description" placeholder="Expected End Date" onChange={(e) =>{

                        setExpectedEdate(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="Quantity">Breif description of Requirements:</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="Quantity" placeholder="Enter a Breif Description About Contract" onChange={(e) =>{

                        setBreifDescription(e.target.value);

                    }}></input>
                </div>

                {/* <div className="form-group">
                    <label for="date">Expected Output Images :</label>&nbsp;<br></br>
                    <input type="text"  onChange={(e) =>{

                        setExpectedOutputImagelinks(e.target.value);

                    }}></input>
                </div>   */}

                <div className="form-group">
                    <label for="date">Prefered Meterial Types Description :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="date" placeholder="Enter  Description of Prefered Meterial Types " onChange={(e) =>{

                        setPreferedMeterialDescription(e.target.value);

                    }}></input>
                    
                </div>
                <button type="submit" className="btn-Search">Submit</button>
            </form>

            </div>
            
        </div>
    )
}
export default CusReqForm;
