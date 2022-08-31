import React from 'react';

function ContractHome() {


    return (
        <div>
            <h1 className='h-tag'>Contract Management</h1>
            <div className='adminHome'>

            <div className='rows'>

                <div className='col'>
                    
                    <div className='card card1'>
                        <a href='/all-contracts'><h1 className='topic'>All Contracts</h1></a>
                    </div>

                    <div className='card card2'>
                    <a href='/add-contract'><h1 className='topic'>Add a New Contract</h1></a>
                    </div> 
                    
                    <div className='card card9' >
                        <a href='/All-Cus-Req-Forms'><h1 className='topic'>Customer Requirement Form Details</h1></a>
                    </div>

                </div>

            </div>
            
        </div>
        </div>
    );
}

export default ContractHome;
