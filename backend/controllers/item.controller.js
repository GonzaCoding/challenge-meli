'use strict';

const ItemService = require('../services/item.service');

const ItemController = {
    search: async function(req, res) {
        const {query} = req;
        const result = await ItemService.search(query);
        return res.status(result.status).send(result.data);
    },

    getItem: async function(req, res) {
        const {id} = req.params;
        const result = await ItemService.getItem(id);
        return res.status(result.status).send(result.data);
    }
}

module.exports = ItemController;
