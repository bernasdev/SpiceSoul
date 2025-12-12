const express = require ('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Página Inicial')
})

app.get('/especiarias', (req, res) => {
    fs.readFile('./especiarias.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erro ao Ler Arquivo JSON');
        }
        const especiarias = JSON.parse(data);
        res.json(especiarias);
    });
});

app.get('/especiarias/:id', (req, res) => {
    const id = parseInt(req.params.id);

    fs.readFile('./especiarias.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erro ao Ler Arquivo JSON');
        }
        const especiarias = JSON.parse(data);
        const index = especiarias.findIndex(e => e.id === id);

        if (index === -1) {
            res.status(404).send('Especiaria Não Encontrada');
        } else {
            const especiaria = especiarias.find(e => e.id === id);
            res.json(especiaria);
        }
    });
});


app.options('/especiarias', (req, res) => {
    res.header('Allow', 'GET, OPTIONS');
    res.status(204).send();
})


// usuarios
const autenticar = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token === 'Spice&Soul2025') {
        next();
    } else {
        res.status(401).send('Acesso Negado!')
    }
}
app.get('/usuarios', autenticar, (req, res) => {
    fs.readFile('./usuarios.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erro ao Ler Arquivo JSON');
        }
        const usuarios = JSON.parse(data);
        res.json(usuarios);
    });
});

app.get('/usuarios/:id', autenticar, (req, res) => {
    const id = parseInt(req.params.id);

    fs.readFile('./usuarios.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erro ao Ler Arquivo JSON');
        }
        const usuarios = JSON.parse(data);
        const index = usuarios.findIndex(u => u.id === id);

        if (index === -1) {
            res.status(404).send('Usuario Não Encontrada');
        } else {
            const usuario = usuarios.find(u => u.id === id);
            res.json(usuario);
        }
    });
});



app.post('/usuarios', autenticar, (req, res) => {
    // ler conteúdo do arquivo json atual
    fs.readFile('./usuarios.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler arquivo: ', err);
            return res.status(500).send('Erro ao ler arquivo JSON');
        }

        let usuarios = [];

        try {
            usuarios = JSON.parse(data);
        } catch (parseErr) {
            console.error('Erro ao fazer parse do JSON: ', parseErr);
            return res.status(500).send('Erro ao processar o arquivo JSON');
        }

        const emailIndex = usuarios.findIndex(u => u.email === req.body.email);
        
        if (emailIndex !== -1){
            return res.status(409).send("Email Já Cadastrado")
        }

        //definir id para o novo usuario
        const novoId = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;

        const novoUsuario = {
            id: novoId,
            usuario: req.body.usuario,
            email: req.body.email,
            senha: req.body.senha
        };


        //adicionar novo usuario
        usuarios.push(novoUsuario);

        //converter objeto para string json
        const usuarioJSON = JSON.stringify(usuarios, null, 2);

        //escrever novos dados no arquivo
        fs.writeFile('./usuarios.json', usuarioJSON, 'utf8', (err) => {
            if (err) {
                console.error('Erro ao escrever no arquivo: ', err);
                return res.status(500).send('Erro ao salvar os dados');
            }

            console.log('Usuario criado com sucesso: ', novoUsuario);
            res.status(201).send('Usuario Criado com Sucesso!');
        });
    });
});

app.post('/contato', (req, res) => {
    fs.readFile('./contato.json', 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            console.error('Erro ao ler o arquivo:', err);
            return res.status(500).send('Erro ao ler o arquivo JSON');
        }

        let mensagens = [];

        if (data) {
            try {
                mensagens = JSON.parse(data);
            } catch (parseErr) {
                console.error('Erro ao fazer parse do JSON:', parseErr);
                return res.status(500).send('Erro ao processar o arquivo JSON');
            }
        }

        const novaMensagem = {
            id: mensagens.length ? mensagens[mensagens.length - 1].id + 1 : 1,
            nome: req.body.nome,
            email: req.body.email,
            motivo: req.body.motivo,
            mensagem: req.body.mensagem,
            data: new Date().toISOString()
        };

        mensagens.push(novaMensagem);

        fs.writeFile('./contato.json', JSON.stringify(mensagens, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Erro ao escrever no arquivo:', err);
                return res.status(500).send('Erro ao salvar os dados');
            }

            console.log('Mensagem recebida:', novaMensagem);
            res.status(201).send('Mensagem enviada com sucesso!');
        });
    });
});


app.get('/contato', (req, res) => {
    fs.readFile('./contato.json', 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return res.json([]); // Arquivo ainda não existe
            }
            console.error('Erro ao ler arquivo de contato:', err);
            return res.status(500).send('Erro ao ler o arquivo de mensagens');
        }

        try {
            const mensagens = JSON.parse(data);
            res.json(mensagens);
        } catch (parseErr) {
            console.error('Erro ao processar JSON:', parseErr);
            res.status(500).send('Erro ao processar os dados');
        }
    });
});

app.options('/contato', (req, res) => {
    res.header('Allow', 'GET, POST, OPTIONS');
    res.status(204).send();
});



app.options('/usuarios', (req, res) => {
    res.header('Allow', 'GET, OPTIONS, POST');
    res.status(204).send();
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})