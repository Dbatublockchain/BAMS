const mongoose = require('mongoose')

const assetName = mongoose.model('assetList',{
    asset_id:{
        type: Number
    },
    asset_name: {
        type: String
    },
    asset_description: {
        type: String
    },
    asset_cost: {
        type: Number
    },
    asset_purchaseDate: {
        type: Date
    },
    asset_Location: {
        type: String
    },
    asset_User: {
        type: String
    },
});

module.exports = assetName
