import React, { Component , PureComponent } from 'react';
import axios from 'axios';
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";
// import { ReactToPrint } from "react-to-print";
// let jsPDF = require('jspdf');let jsPDF = require('jspdf');
import jsPDF from "jspdf";
import "jspdf-autotable";

class PrintTable extends PureComponent {
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

  // onDelete = (id) =>{
  //   axios.delete(`/contract_finance/${id}`).then((res) =>{
  //     alert("delete success");

  //     this.retrieveCon_finance();
  //   });
  // }

  jsPdfGenerator = ()=>{
    //new document in jspdf
    var doc = new jsPDF('P','pt');

    //doc some text to pdf document
    // doc.text(20,  20, 'Report of all Contract Finances.')

    //set the font of the pdf document
    doc.setFont('Bold');
    // doc.text(40,40, 'Sky Line constructions');

    // doc.text(80,60, 'Sky Line constructions');

    // doc.text(90,60, 'Sky Line constructions');
    //set the font type
    const headers = [["ContractID", "Customer ID","Contract Category", "Customer Requirments Form Links","Suggested Blue Print Links","Estimated Cost","Contract Status"]];
    doc.setFont(undefined, 'normal');
    const data = this.state.addContracts.map(addContracts=> [addContracts.contractID,addContracts.customerID,addContracts.contractCategory,addContracts.cusReqFormlinks ,addContracts.suggestedBluePrintlinks,addContracts.estimatedCost,addContracts.status]);
    
    doc.text(40,40, 'Sky Line constructions all Contracts.');

    // doc.text(80,80, 'We possess a design portfolio of 500+ designs that had been developed for our clients.');
    // doc.text(80,90, 'We provide with the service of “Design Only” for our clients, who are interested in doing construction from someone known to them as well.'); 

    // doc.text(90,60, 'Sky Line constructions');

    let content = {
      startY: 100,
      head: headers,
      body: data
    };
    doc.autoTable(content);

    //save the pdf document
    doc.save("generated.pdf");

  }

  render(){
    return(


      <div className="container">
          
          {/* <ReactToPrint
          trigger={()=>{
              return <button>Print this</button>
          }}
          content = {()=>this.componentRef}
          documentTitle='new document'
          pageStyle = "print"

        /> */}
          <div>
          <u><h2 className="h-tag">All Contracts Report</h2></u>
        <table className="table">
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
                 {/* <th scope='col'>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {this.state.addContracts.map((addContracts ,index) =>(
                <tr key = {index}>
                    
                    <th scope='row'>{index+1}</th>
                                <td><a href={`/contract-profile/${addContracts._id}`} style={{textDecoration:'none'}}> {addContracts.contractID}</a></td>
                                <td><a href={'#'} >{addContracts.customerID}</a></td>
                                <td>{addContracts.contractCategory}</td>
                                <td>{addContracts.cusReqFormlinks}</td>
                                <td>{addContracts.suggestedBluePrintlinks}</td>
                                <td>{addContracts.estimatedCost}</td>
                                <td>{addContracts.status}</td>

                    {/* <td>
                        <a className = "btn btn-warning" href = {`/Edit_con_finance/${con_finance._id}`}>
                            <i className ="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;
                        <a className = "btn btn-danger" href = "/con-finance-view-all" onClick = {() =>this.onDelete(con_finance._id)}>
                            <i className ="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
                    </td> */}



                </tr>
            
            ))}
          </tbody>
        </table>
        <div> 
          <button className="btn btn-success"><a href="/all-contracts" style ={{textDecoration : 'none', color:'white'}}>Back</a></button>

          <button className = "btn btn-success" onClick={this.jsPdfGenerator}>Generate Report</button>
          
        </div> 
      </div>
      </div>


    )
            }
}




export default PrintTable;