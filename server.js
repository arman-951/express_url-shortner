import express from 'express'
import router from './routes/shortner.routes.js'

const app=express();



const PORT=3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))

//express router
app.use(router)

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})