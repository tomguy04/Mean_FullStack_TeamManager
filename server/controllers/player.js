const Player = require('mongoose').model('Player');

module.exports={
    index(request, response) {
        Player.find({})
        .then(players => response.json(players))
        .catch(error => console.log(error));
    },

    show(request, response) {},
    edit(request, response) {},
    new(request, response) {},
    update(request, response) {},

    create(request, response) {
        
        Player.create(request.body)
        .then(player => response.json(player))
        .catch(error => console.log(error));
    },

    // create(request, response) {
    //     Player.create(request.body)
    //       .then(player => response.json(player))
    //       .catch(error => {
    //           console.log('error in create controller');
    //         const errors = Object.keys(error.errors).map(
    //           key => error.errors[key].message
    //         );
    
    //         response.json(errors);
    //       });
    //   },

    
    destroy(request, response) {}
    
}