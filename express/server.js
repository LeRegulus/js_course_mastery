import express from 'express';
import cors from 'cors'

const app = express();
app.use(cors());
const PORT = 3000;

//database
const todos = [
    {
        id: 1,
        title: 'Learn React',
        done: false,
    },
    {
        id: 2,
        title: 'Learn Node.js',
        done: true,
    },
    {
        id: 3,
        title: 'learn Express',     
        done: false,
    },
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/v1/todos', (req, res) => {
    res.json(todos);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
    