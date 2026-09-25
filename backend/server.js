import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok'
    });
});

app.get('/api/test', (req, res) => {
    res.json({
        message: 'Backend works!'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend started on port ${PORT}`);
});