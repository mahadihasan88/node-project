const  express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const users=["Mahadi","Raihan","Mustafiz","AbdurRashid","Ruhul Amin","Habibul Basar"];

app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Node is awesome for backend");
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const name=users[id];
    res.send({id,name});
})
//post method

app.post('/addUser',(req,res)=>{
    // console.log('Data Reeceived !',req.body);
    const user =req.body;
        user.id=100
     res.send(user)
    
})









app.listen(3000,()=> console.log("Listening to por 3000"));