# Start Here
The `app` directory is where you will be building your front-end application, using React. You are free to use any technology to help you create this front-end. Also feel free to spruce up the look and feel anyway you see fit.


## Objective
- Create a front-end application that displays a list of notifications from an API call. 
- Each notification will have a `severity` property with a color value.
    - Example: `"severity": "red"`
    - Each notification that is rendered needs to display this color in a way that is easy to notice.
- Implement a way to filter notifications based on title.
- Implement a way to add a notification.
- Implement a way to remove a notification.
- Call the API from the server (see server/README.md for instructions on running the server)
    - There is 1 endpoint:
        1. GET -> /getNotifications
    - This will return a list of notifications that will be used for the front-end application.
