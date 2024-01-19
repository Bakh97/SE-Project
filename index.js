import Express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = Express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(Express.static(__dirname + "/public")); // Serve static files from the 'public' folder

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/X.html");
});

app.post("/SignIn", (req, res) => {
    res.sendFile(__dirname + "/public/SignIn.html");
});
app.post("/Login", (req, res) => {
    res.sendFile(__dirname + "/public/Login.html");
});

app.post("/X", (req, res) => {
    res.sendFile(__dirname + "/public/X.html");
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
