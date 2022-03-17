let express = require('express');
let path = require('path');
let app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));
app.use(express.json());

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/', function (req, res){
    res.json({status: 'ok'});
});

app.listen(3000, ()=> {
    console.log('Listening...')
})