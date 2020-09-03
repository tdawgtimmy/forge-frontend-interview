const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const notifications = [
    {
        "id": 1,
        "title": "Inclement Weather Advisory",
        "description": "There is bad weather coming your way, seek shelter.",
        "severity": "red"
    },
    {
        "id": 2,
        "title": "Weather is beautiful",
        "description": "The weather is beautiful today, go out and get some sun!",
        "severity": "green"
    },
    {
        "id": 3,
        "title": "Traffic Jam",
        "description": "A car has broke down on the highway, traffic delays expected.",
        "severity": "yellow"
    },
    {
        "id": 4,
        "title": "Computer is on fire",
        "description": "Computer is running very hot.",
        "severity": "red"
    },
    {
        "id": 5,
        "title": "Computer Update Available",
        "description": "There is an update available for your computer, please download",
        "severity": "green"
    },
    {
        "id": 6,
        "title": "Fuel is low",
        "description": "Car is running low on gas, time to fill up!",
        "severity": "yellow"
    }
];
 
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