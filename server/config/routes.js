const playerController = require('../controllers/player');

//
const router = require('express').Router();
//

//had this here
//module.exports = function(app){
    router

    // app 
    // .get('/tasks', taskController.index)
    // .post('/tasks', taskController.create)
    // .all("*", (req,res,next) => {
    //   res.sendFile(path.resolve("./public/dist/index.html"))
    // });

    // app.get('/tasks', (req,res) =>{

    // });
    // app.post('/tasks', (req,res) =>{
        
    // });

    // app.get('/read', playerController.index);
    // app.get('/players/', playerController.index);
    
    .get('/players', playerController.index)

    .post('/players',playerController.create)

    // app.all("*", (req,res,next) => {
    //   res.sendFile(path.resolve("./public/dist/index.html"))
    // });
    
    module.exports = router;