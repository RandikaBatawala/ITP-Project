import './App.css';
import Header from './components/Header';
import TopNav from './components/TopNav';
import FooterBottom from './components/FooterBottom';
import AddMachinery from './components/MaterialManagement/AddMachinery';
import AdminHome from './components/AdminHome';
import Materialhome from './components/MaterialManagement/MaterialHome';
import Financehome from './components/FinanceManagement/FinanceHome';
import Contracthome from './components/ContractManagement/ContractHome';
import Machinerydetails from './components/MaterialManagement/MachineryDetails';
import Crewandsalaryhome from './components/CrewAndSalaryManagement/CrewAndSalaryHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllContracts from './components/ContractManagement/AllContracts';
import AddContract from './components/ContractManagement/AddContract';
import ContractProfile from './components/ContractManagement/ContractProfile';
import UpdateContract from './components/ContractManagement/UpdateContract';
import CusReqForm from './components/ContractManagement/CusReqForm';
import AllCusReqForms from './components/ContractManagement/AllCusReqForms';
import CusReqFormUpdate from './components/ContractManagement/CusReqFormUpdate';
import CusReqOneView from './components/ContractManagement/CusReqOneView';
import PrintTable from './components/ContractManagement/PrintTable';




function App() {
  return (
    <BrowserRouter>
      <div className="max-w-screen-md mx-auto pt-20">
        
        <TopNav/>
        <Header/>

        <Routes>
          <Route path='/' element={<AdminHome/>} />
        </Routes>

        <Routes>
          <Route path='/material-home' element={<Materialhome/>} />
        </Routes>
        <Routes>
          <Route path="/machinery" element={<Machinerydetails/>} />
        </Routes>
        <Routes>
          <Route exact path="/add" element={<AddMachinery/>} />
        </Routes>

        <Routes>
          <Route path='/finance-home' element={<Financehome/>} />
        </Routes>
        
        

        <Routes>
          <Route path='/contract-home' element={<Contracthome/>} />
        </Routes>
        <Routes>
          <Route path='/add-contract' element={<AddContract/>} />
        </Routes>
        <Routes>
          <Route path='/all-contracts' element={<AllContracts/>} />
        </Routes>
        <Routes>
          <Route path='/contract-profile/:id' element={<ContractProfile/>} />
        </Routes>
        <Routes>
          <Route path='/update-contract/:id' element={<UpdateContract/>} />
        </Routes>
        <Routes>
          <Route path='/Cus-Req-Form' element={<CusReqForm/>} />
        </Routes>
        <Routes>
          <Route path='/Cus-Req-One-View/:id' element={<CusReqOneView/>} />
        </Routes>
        <Routes>
          <Route path='/All-Cus-Req-Forms' element={<AllCusReqForms/>} />
        </Routes>
        <Routes>
          <Route path='/Cus-Req-Form-update' element={<CusReqFormUpdate/>} />
        </Routes>
        <Routes>
          <Route path='/Print-Table-All-Contracts' element={<PrintTable/>} />
        </Routes>
        <Routes>
          <Route path='/crew-and-salary-home' element={<Crewandsalaryhome/>} />
        </Routes>

        <FooterBottom/>  
        
      </div>
    </BrowserRouter>
    
  )
}

export default App;
