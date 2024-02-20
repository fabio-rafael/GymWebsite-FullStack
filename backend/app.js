const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // para criptografar senhas

const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

app.use(express.json()); // Isso substitui o body-parser
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/user", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Erro na conexão com o MongoDB:"));
db.once("open", function () {
  console.log("Conectado ao MongoDB");
});

// Defina seu modelo de usuário do MongoDB
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
  telefone: String,
});

// Rota de registro
app.post("/api/users/registo", async (req, res) => {
  try {
    const { name, email, password, telefone } = req.body;

    // Verificar se o usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "E-mail já registrado" });
    }

    // Criptografar a senha antes de salvar
    const hashedPassword = await bcrypt.hash(password, 10);

    // Salvar usuário no MongoDB
    await User.create({ name, email, password: hashedPassword, telefone });

    res.status(201).json({ message: "Usuário registrado com sucesso" });
  } catch (error) {
    console.error("Erro no registro:", error);
    res.status(500).json({ message: "Erro no servidor" });
  }
});

app.get("/", (req, res) => {
  res.send("Servidor está online");
});
// Rota de login
app.post("/api/users/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar se o usuário existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    // Verificar a senha
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    res.status(200).json({ message: "Login bem-sucedido" });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ message: "Erro no servidor" });
  }
});

// Rota para obter todos os membros (apenas para prova de conceito)
app.get("/api/users/membros", async (req, res) => {
  try {
    const members = await User.find({} /*, { password: 0 }*/); // Exclui a senha dos resultados
    res.status(200).json(members);
  } catch (error) {
    console.error("Erro ao obter membros:", error);
    res.status(500).json({ message: "Erro no servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.delete("/api/users/excluir/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    // Verificar se o usuário existe
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Excluir o usuário do MongoDB
    await User.findByIdAndDelete(userId);

    res.status(200).json({ message: "Usuário excluído com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    res.status(500).json({ message: "Erro no servidor" });
  }
});
