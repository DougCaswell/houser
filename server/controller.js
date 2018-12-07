
module.exports = {
    
    getHomes: function (req, res) {
        const dbInstance = req.app.get('db');
        dbInstance.getAllHomes().then(homes => {
            res.status(200).send(homes)
        }).catch((error) => {
            console.log(error)
            res.sendStatus(500)
        });
    },

    addHome: function (req, res) {
        const dbInstance = req.app.get('db')
        const {name, address, city, state, zipCode} = req.body
        dbInstance.addHome(name, address, city, state, zipCode).then(() => {
            res.sendStatus(201)
        }).catch((error) => {
            console.log(error)
            res.sendStatus(500)
        });
    },

    removeHome: function (req, res) {
        const dbInstance = req.app.get('db')
        dbInstance.removeHome(req.params.id).then((homes) => {
            res.status(200).send(homes)
        }).catch((error) => {
            console.log(error)
            res.sendStatus(500)
        });
    }

}