let retailerSchema = require("./../models/retailerSchema.js");
//go to the file routes/index.js
module.exports = {
  getStoreDetails: function(req, res) {
    // retailerSchema.findOne({  'region': 'Badghis' },  function (err, retailerSchema) {
    // if (err) return handleError(err);
    // console.log('%s %s is a %s.', retailerSchema.store ) // Space Ghost is a talk show host.
    // })
    var country = req.body.country;
    var region = req.body.region;
    var store=req.body.store;
    retailerSchema.findOne({ country: country, region: region }, function(err, details) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log("aaaa",details);
        var arr2=details.store;
        arr2.splice(arr2.indexOf(store),1);
        console.log(arr2,"arr2");
        retailerSchema.findOneAndUpdate({
          'region': region,
          'country': country,

        }, {
          $set: {
            'store': arr2
          }
        }, function(err) {
          if(err){
            res.send(err);
          }
          else{
            res.send("Updated successfully");
           }
          ////console.log(err);
        });
      }
    });


  }

};
