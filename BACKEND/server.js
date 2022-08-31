const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


//import routes
const machineryRoutes = require('./routes/machineries');
const timeSchedulingRoutes = require('./routes/timeSchedulings');
const materialRoutes = require('./routes/materials');
const crewRoutes = require('./routes/crews');
const salaryRoutes = require('./routes/salaries');
const architectRoutes = require('./routes/architects');
const contractformsRoutes = require('./routes/contractforms');
const addcontractsRoutes = require('./routes/addcontracts');


//app middleware
app.use(bodyParser.json());
app.use(cors());


//route middleware
app.use(machineryRoutes);
app.use(timeSchedulingRoutes);
app.use(materialRoutes);
app.use(crewRoutes);
app.use(salaryRoutes);
app.use(architectRoutes);
app.use(contractformsRoutes);
app.use(addcontractsRoutes);


const PORT = 8070;
const DB_URL = 'mongodb+srv://user:skyline8@skyline.ymebi.mongodb.net/Skyline_DB?retryWrites=true&w=majority'


mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(()=>{
    console.log('DB Connected.');
})
.catch((err)=> console.log('DB Connection error',err));


app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});