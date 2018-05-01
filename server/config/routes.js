const playerController = require('../controllers/player');

module.exports = function(app){
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

    app.get('/notes', playerController.index);

    app.post('/notes',playerController.create);

    app.all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/index.html"))
    });
    
}