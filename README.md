# Redux Feedback Loop

"Myyyyyyy last reminder of the day, which is my last reminder of every day: _____" - Luke

This application is modeled after Prime's feedback system. There are four screens to add feedback on, asking students 
- how they are feeling
- how well they are understanding
- how well they are being supported
- for any additional comments

There is also an admin screen at /admin where all feedback can be viewed. 

### To Run

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

## STRETCH GOALS

### Completed
- Update this README.md to describe the project in your own words
- Improve the styling of the app using Material-UI theme, cards, snackbars, buttons, nav bar, and icons, and anything else you'd like.

### Not (yet) completed
- Add the ability to flag an existing feedback entry for further review on the /admin view
- Deploy your project to Heroku -- you'll need to read the special instructions for building and deploying with these apps! 
