const express = require("express");

const app = express();

app.get("/courses",(request,response) => {
    return response.json(["Curso 1","Curso 2","Curso 3"])
    //O browser só aceita requisições GET
})

app.post("/courses",(request,response) => {
    return response.json(["Curso 4","Curso 5","Curso 6"])
    //O browser só aceita requisições GET
})

app.put("/courses/:id",(request,response) => {
    const {id} = request.params
    console.log(id)
    return response.json(["Curso 7","Curso 8","Curso 9"])
})
app.patch("/courses/:id",(request,response) => {
    return response.json(["Curso 6","Curso 5","Curso 9"])
})
app.delete("/courses/:id",(request,response) => {
    return response.json(["Curso 6","Curso 2","Curso 4"])
})



//localhost:3031
app.listen(3333);