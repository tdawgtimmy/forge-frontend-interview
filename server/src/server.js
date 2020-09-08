const notifications = require("./notifications.json")
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
 
app.get('/', function (req, res) {
    res.send('Welcome to Forge Platform Interview');
});

app.get('/getNotifications', function (req, res) {
    res.send(notifications);
});

app.put('/addNotification', function (req, res) {
    const newNotification = req.body;
    notifications.push(newNotification);
    res.send(notifications);
});

app.delete('/removeNotification/:id', function (req, res) {
    const id = req.params.id;
    const index = notifications.findIndex(x => x.id);
    notifications.splice(index, 1);
    res.send(notifications);
});

app.listen(8080, () => console.log('server started at port 8080'));