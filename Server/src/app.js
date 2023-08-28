const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const expressValidator = require('express-validator');
const assetName = require('./models/assetName');
const admin = require('./models/admin')
const md5 = require('md5');
require('./db/mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.get('/', function(req, res) {
    res.json('Works!');
});

app.get('/api/assetName', function(req, res) {
    var assetNames = []
    var assetIds = []
    var assetDescription = []
    var assetCost = []
    var assetPurchaseDate = []
    var assetLocation = []
    var assetUser = []
    var final = []
    assetName.find({}).then(eachOne => {
        for (i = 0; i < eachOne.length; i++){
            assetNames[i] = eachOne[i].asset_name ;
            assetIds[i] = eachOne[i].asset_id;
            assetDescription[i] = eachOne[i].asset_description;
            assetCost[i] = eachOne[i].asset_cost;
            assetPurchaseDate[i] = eachOne[i].asset_purchaseDate;
            assetLocation[i] = eachOne[i].asset_Location;
            assetUser[i] = eachOne[i].asset_User;
            final.push({
                'asset_id': eachOne[i].asset_id,
                'asset_name': eachOne[i].asset_name,
                'asset_description': eachOne[i].asset_description,
                'asset_cost': eachOne[i].asset_cost,
                'asset_purchaseDate': eachOne[i].asset_purchaseDate,
                'asset_Location': eachOne[i].asset_Location,
                'asset_User': eachOne[i].asset_User
            })
        }
        res.send(final);
    })
})

app.post('/api/asset', async function(req, res) {
    asset.create({
        asset_id: Math.floor(Math.random() * 100),
        asset_name: req.body.asset_name,
        asset_description: req.body.asset_description
        asset_cost: req.body.asset_cost,
        asset_purchaseDate: req.body.asset_purchaseDate,
        asset_Location: req.body.asset_Location,
        asset_User: req.body.asset_User,
        //asset_organizer: req.body.asset_organizer,
        
    }).then(asset => {
        res.json(asset);
    });
});

app.post('/api/adminLogin', async function(req, res) {
    admin.findOne({
        username: req.body.username,
        password: md5(req.body.password),
    }).then(asset => {
        if(asset === null){
            res.send(false);
        }else{
            res.send(true);
        }
    });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("Server is up on port " + port)
});
