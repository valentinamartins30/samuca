import express from "express";
const app = express();

app.use(express.json());

let alunos = [
    {id: 1, nome: "samuel", idade: 23},
    {id: 2, nome: "daniel", idade: 17},
    {id: 3, nome: "jonas", idade: 53}
];

app.get("/alunos", (req, res)=>{
    res.send(alunos);
});

app.post("/alunos", (req,res) =>{
    const aluno = req.body;
    alunos.push(aluno);
    res.send(alunos);
});

app.delete("/alunos/:id", (req, res)=>{
    const id = Number(req.params.id);
    alunos = alunos.filter(aluno => aluno.id !== id);
    res.send(alunos);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});