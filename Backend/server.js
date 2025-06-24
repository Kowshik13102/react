const express = require('express');
const app=express();
app.get('/',(req, res) => {
    res.send('Leyloo jothi');
});

app.post('/', (req, res) => {
    res.send('from post World!');
    console.log("from post method url /")
})

app.listen(8000, () => {
    console.log('server started on port 8000');
})
console.log("server started")