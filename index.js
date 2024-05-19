const http = require("http");

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


const server = http.createServer((req, res) => {

    console.log("request recieved");
    res.writeHead(200, {
        "content-type": "application/json"
    })
    res.end(JSON.stringify(data));
})

server.listen(8000, () => {
    console.log("server running at 8000");
})