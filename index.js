const  express = require('express');
const app = express();





app.get('/',(req,res)=>{
    res.send("Thank you for Calling me");
})
app.listen(3000,()=> console.log("Listening to por 3000"));