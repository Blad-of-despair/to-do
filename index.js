const express = require('express');
const applicationRoutes = require('./routes/applicationRoute');
const errorMiddleware = require('./middleware/errorMiddleware')
console.log("Routes loaded:", typeof applicationRoutes);
const { connectDB } = require('./config/db');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/applications', applicationRoutes);

app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('JobTrack API is running 🚀');
});

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server is successfully running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start the application server:', error.message);
        process.exit(1);
    }
};

startServer();


