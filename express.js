const express = require("express");
const fs = require("fs");
const response = require("response-time")
// const morgan = require("morgan");

const port = 8000;

const data =
    [
        {
            "id": 1,
            "name": "Alice",
            "age": 28,
            "city": "Tokyo"
        },
        {
            "id": 2,
            "name": "Bob",
            "age": 35,
            "city": "New York"
        },
        {
            "id": 3,
            "name": "Charlie",
            "age": 22,
            "city": "London"
        },
        {
            "id": 4,
            "name": "David",
            "age": 40,
            "city": "Paris"
        },
        {
            "id": 5,
            "name": "Eva",
            "age": 30,
            "city": "Berlin"
        },
        {
            "id": 6,
            "name": "Frank",
            "age": 27,
            "city": "Sydney"
        },
        {
            "id": 7,
            "name": "Grace",
            "age": 33,
            "city": "Toronto"
        },
        {
            "id": 8,
            "name": "Henry",
            "age": 29,
            "city": "Los Angeles"
        },
        {
            "id": 9,
            "name": "Ivy",
            "age": 24,
            "city": "Seoul"
        },
        {
            "id": 10,
            "name": "Jack",
            "age": 31,
            "city": "Beijing"
        }
    ]

const app = express();

//This middleware should log information about each incoming request, including the HTTP method, the requested URL, and the timestamp. Additionally, log the time taken for processing the request.  


const logmiddleware = (req, res, next) => {
    console.log("logged");
    fs.appendFileSync("loggeddata.log", `Got a ${req.method} request at url localhost:${req.url} logged at : ${new Date()}\n`);
    next();
}

// const apimiddleware = (req, res, next) => {
//     console.log(req.query);
//     if (req.query.apiKey == 'temperory') {
//         console.log("pass");
//     } else {
//         next();
//     }
// }

app.use(logmiddleware);
// app.use(apimiddleware);
app.use(express.json());
// app.use(morgan('dev'));
app.use(response());


app.get("/get-data", (req, res) => {
    console.log("server running");
    res.json(data)
})

app.post('/register/data', (req, res) => {
    console.log(req.body);
    res.json({
        "success": true,
        "message": "registration successfull"
    })
})


app.listen(port, () => {
    console.log("server is running at port :", port);
})
