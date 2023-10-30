const express = require("express")
const { blogs } = require("./model/index")
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

app.post("/createBlog",async (req,res)=>{
    //second approach
    //const {title, subTitle, description} = req.body

    //first approach
    const title = req.body.title
    const subTitle = req.body.subtitle
    const description = req.body.description
    
    //console.log(title, subTitle, description)

    //database ma data halna paryo, database snga kei operation garda await rakhne
    await blogs.create({
        title : title,
        subTitle : subTitle,
        description : description
    })

    res.send("form submitted successfully")
})



app.listen(3000, ()=>{
    console.log("Nodejs project has been started on port 3000")
})