import app from "./app";

app.listen(app.get('port'));

console.log("server en puerto: " , app.get('port'));