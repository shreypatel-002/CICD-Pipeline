import express from 'express';


const app = express();


app.get('/', (req, res) => {
    res.send('Hello World');
}
);


const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
