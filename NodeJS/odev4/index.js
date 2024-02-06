const fs = require("node:fs");

const writeFile = (employee) => {
  fs.writeFile("./employees.json", JSON.stringify(employee), (err) => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
      console.log("DOSYA OLUŞTURMA BAŞARILI");
    }
  });
};

const readFile = () => {
  fs.readFile("./employees.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
};

const updateFile = (newEmployee) => {
  fs.readFile("./employees.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const parsedData = JSON.parse(data);
    parsedData.push(newEmployee);
    fs.writeFile("./employees.json", JSON.stringify(parsedData), (err) => {
      if (err) throw err;
      console.log("VERİ EKLEME BAŞARILI");
    });
  });
};

const deleteFile = () => {
  fs.unlink("./employees.json", (err) => {
    if (err) throw err;
    console.log("DOSYA SİLME BAŞARILI");
  });
};

const employee1 = [{ name: "Employee 1 Name", salary: 2000 }];
// writeFile(employee1);
readFile();
const employee2 = { name: "Employee 2 Name", salary: 2500 };
// updateFile(employee2);
// deleteFile();
