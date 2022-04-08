const http = require("http");
const fs = require("fs")

const server = http.createServer((request, response) => {
    fs.readFile("./person.json", null, (error, data) => {
        if (error) {
            response.writeHead(404);
            response.write("not found");
        } else {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.write(data);
        
        }
        response.end();
    });
});
.listen(8000);