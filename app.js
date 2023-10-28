const express = require("express")
const app = express()

app.set("view engine", "ejs")

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