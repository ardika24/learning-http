const fs = require("fs");

function createData(data) {
    fs.writeFileSync("./person.json",
    JSON.stringify(data));
}

createData({
    name : "Nur Ardika",
    age : 22
});