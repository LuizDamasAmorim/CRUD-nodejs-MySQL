const db = require('../db/connection');


// Create 
exports.createUser = (req, res) => {
    const { nome_usuario, email_usuario, senha_usuario } = req.body;
    const sql = 'INSERT INTO usuarios(nome_usuario, email_usuario, senha_usuario) VALUES("?", "?", "?", "?")';
    db.query(sql, [nome_usuario, email_usuario, senha_usuario], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: result.insertId, name, email });
    });
};


// Read 
exports.getUsers = (req, res) => {
    db.query('SELECT nome_usuario, email_usuario FROM usuarios', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};


// Update 
exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { nome_usuario, email_usuario, senha_usuario } = req.body;
    const sql = 'UPDATE usuarios SET nome_usuario = ?, email_usuario = ? WHERE id = ?';
    db.query(sql, [nome_usuario, email_usuario, id], (err) => {
        if (err) return res.status(500).send(err);
        res.json({ id, nome_usuario, email_usuario });
    });
};


// Delete 
exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM usuarios WHERE id = ?';
    db.query(sql, [id], (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: `Usuário com ID ${id} deletado` });
    });
};


