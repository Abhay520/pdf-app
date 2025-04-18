import express from 'express'
import home from './app/routes/form.routes.js'
import image from './app/routes/image.routes.js'
import multer from 'multer';
import path from 'path';
import mongoose from 'mongoose';

const hostname = 'localhost';
const port = 3001;

const __dirname = path.resolve("app");

const app = express()
const upload = multer({ dest: 'uploads/' })

//const uri = `mongodb+srv://${process.env.db_username}:${process.env.db_password}@pdf-app.jyztzhr.mongodb.net/?retryWrites=true&w=majority&appName=pdf-app`

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/pdf-app/`);
})

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "", "views"));

app.use(express.static(path.join(__dirname, "", 'public')));

//mongoose.connect(uri).then(() => console.log("Database connected successfully"))

app.use('/pdf-app/', home)
app.use('/pdf-app/image', upload.array('images'), image)