ONLY .gitignore node_modules\*\*\*

Create an express simple CR app

1. Make a new directory called express-cr-hw `COMPLETE`
2. Go inside express-cr-hw folder `COMPLETE`
3. In terminal, Make an app.js file using touch `COMPLETE`
4. In terminal, npm init -y `COMPLETE`
5. Open folder `COMPLETE`
6. Add express, Morgan, and ejs through npm i and call them inside app.js file `COMPLETE`
7. Create a server using Express, and use logger (Morgan) in App.js (don’t forger to use .json()) `COMPLETE`
8. Create a router folder and create an index router and a todo router files then connect in App.js (index = /, todo = /api/todo). `COMPLETE`
9. In index router:
   a. Make router and export out (module.exports)
   b. Make a GET "/" route that returns a json of a message that says 'Welcome to my App'. `COMPLETE`
10. In todo router:
    a. Make router, export out and add uuidv4 (install and require)
    b. Add this dummy data to your todo router (do not change anything in this array and don't add anything!, make sure this array in your!):
    let todos = [
    {
    id: "haf24jd",
    todo: "do laundry",
    done: "false"
    },
    {
    id: "jp2nkl2",
    todo: "wash dishes",
    done: "true"
    }
    ]
    c. Make a GET "/get-all-todos" route that responds with the array of dummy data. `COMPLETE`
    d. Make a GET "/get-todo-by-id" route that takes in a params and responds with the id, todo and done. If ID is not found respond with the message "The Todo ID you are looking for does not exists, please check ID". `COMPLETE`
    e. Make a GET "/get-todos-by-done" route that takes in a params that is either true or false. If the params is false, respond with a newDoneArray that has done === false. If the params is true, respond with a newDoneArray that done === true.`NOT DONE`
    f. Make a POST "/create-new-todo" route that POSTs a new todo (don't forget the id) with a done that is always false (don't need to pass in done since its always false) and responds with the whole todos array.

11. Add module.exports = app to the bottom of the app.js file and comment out the app.listen \*\*\*