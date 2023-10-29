const express = require("express")
const app = express()

//database connection
require("./model/index")

//telling the nodejs to set view engine to ejs
app.set("view engine", "ejs")

//form bata aairako data lai parse garna ya handle garna 
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    //res.send("home page")
    res.render('blogs')
})

app.get("/createBlog", (req,res)=>{
    res.render("createBlog")
})

app.post("/createBlog", (req,res)=>{
    console.log(req.body)
    res.send("form submitted successfully")
})



app.listen(3000, ()=>{
    console.log("Nodejs project has been started on port 3000")
})