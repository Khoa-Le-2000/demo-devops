const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const router = require('./routes/router');


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

router.route(app);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/captchaTest.html', (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
});

// const mysql = require('mysql');
// console.log('Connecting to database...');

// var connection = mysql.createConnection({
//     host: 'database-mdmb.culnu82npjk4.ap-southeast-1.rds.amazonaws.com',
//     user: 'admin',
//     password: 'qwer1234',
//     database: 'MDMB'
// });

// async function check() {
//     var str = "";
//     connection.connect(function (err) {
//         if (err) {
//             console.error('error connecting: ' + err.stack);
//             return;
//         }
//         console.log('connected as id ' + connection.threadId);
//         var sql = 'SELECT * FROM `Account`';

//         connection.query(sql, function (err, result) {
//             if (err)
//                 throw err;

//             str = JSON.stringify(result);
//             // console.log(str);
//             // return callback(str);
//         });
//         return str;
//     });
//     return str;
// }
// // console.log(`CHECK: ${check()}`);
// async function ABC(){
//     let a = await check();
//     console.log(`a: ${a}`);
// }
// ABC();
// console.log('Connected to database');
// let check = (res) => {
//     return new Promise((resolve, reject) => {
//         connection.connect(function (err) {
//             if (err) {
//                 console.error('error connecting: ' + err.stack);
//                 reject(err);
//             }
//             console.log('connected as id ' + connection.threadId);
//             var sql = 'SELECT * FROM `Account`';

//             connection.query(sql, function (err, result) {
//                 if (err) throw err;

//                 str = JSON.stringify(result);
//                 // console.log(str);
//                 // return callback(str);
//                 // return str;
//                 resolve(str);
//             });
//         });
//     });
// }
// check().then(result => {
//     console.log(`result: ${result}`);
// });

// async function abc() {
//     str = await check();
//     console.log(`str: ${str}`);
// }
// abc();
// console.log(`CHECK: ${check()}`);
// check(a, b, (res) => {
//     console.log(`CHECK: ${res}`);
// });
