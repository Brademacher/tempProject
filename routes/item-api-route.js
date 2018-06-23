// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the items
  app.get("/api/items", function(req, res) {
    var query = {};
    if (req.query.item_id) {
      query.ItemId = req.query.item_id;
    }
    // Including the Review Table
    db.Post.findAll({
      where: query,
      include: [db.Review]
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // Get route for retrieving a single item
  app.get("/api/items/:id", function(req, res) {
    // Adding an "include" property to our options in our findOne query
    // This will allow us to pull the reviews for that item
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Review]
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // POST route for saving a new item
  app.post("/api/items", function(req, res) {
    db.Post.create(req.body).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // DELETE route for deleting items
  app.delete("/api/items/:id", function(req, res) {
    db.Item.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // PUT route for updating item inventory
//   app.put("/api/posts", function(req, res) {
//     db.Post.update(
//       req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });
};