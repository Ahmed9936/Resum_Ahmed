function addMessage(name , email, mobile, gender, date, lang, message){
    const mysql = require("mysql2");
    let db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'message'
    });

    db.connect((err) => {
        if(err) throw err;

        var sql = "INSERT INTO form (name , email, mobile, gender, date, lang, message) VALUES \
        ('"+name+"', '"+email+"', '"+mobile+"', '"+gender+"', '"+date+"', '"+lang+"', '"+message+"')";

        db.query(sql, (err, result) => {
            if(err) throw err;
            console.log("1 message inserted");
        });
    });
}
module.exports = {addMessage} 