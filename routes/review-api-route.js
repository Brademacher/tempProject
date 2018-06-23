var db = require("../models");

module.exports = function(app) {
  app.get("/api/reviews", function(req, res) {
    // include property to include Items
    db.Review.findAll({
      include: [db.Item]
    }).then(function(dbReview) {
      res.json(dbItem);
    });
  });

  app.get("/api/reviews/:id", function(req, res) {
    // include property for db.item
    db.Review.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Item]
    }).then(function(dbReview) {
      res.json(dbReview);
    });
  });

  app.post("/api/reviews", function(req, res) {
    db.Review.create(req.body).then(function(dbReview) {
      res.json(dbReview);
    });
  });

  app.delete("/api/reviews/:id", function(req, res) {
    db.Review.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbReview) {
      res.json(dbReview);
    });
  });

};