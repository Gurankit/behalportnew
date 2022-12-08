const mongoose=require('mongoose');
const DB=process.env.DATABASE;

mongoose.connect(DB,{
    dbName:'behalportnew',
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log(`connect successful`);
}).catch((err)=>console.log(`no connection`));