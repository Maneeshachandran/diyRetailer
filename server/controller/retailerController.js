let retailerSchema = require("./../models/retailerSchema.js");
//go to the file routes/index.js
module.exports = {
  postStoreDetails: function(req, res) {
    var countryName = req.body.country;
    var regionName = req.body.region;
    var storeName = req.body.store;
    var response="";
    retailerSchema.find({
    'region': regionName,
    'country': countryName
  }, function(err, docs) {
    if (err){
      throw err;
      }
      else{

        if(docs.length==0){
          var newretail = new retailerSchema();
          newretail.country = countryName;
          newretail.region = regionName;
          newretail.store.push(storeName);
          newretail.save(function(err){
            if(err){
              reponse=err;
            }
            else{
              reponse="Saved successfully";
            }
          });
        }
        else{
          var arr = docs[0].store;
          console.log(arr,"arr");
          console.log(storeName,"storeName");

          for(var i=0; i<arr.length; i++){
             var arrayStore = arr[i];
             if(arrayStore == storeName){
              var status = 'Exist';
              break;
             }
            }

          if(status=='Exist'){
            reponse="Already exist";
          }
          else{
          arr.push(storeName);
          console.log(arr,"after push");
        }

            retailerSchema.findOneAndUpdate({
              'region': regionName,
              'country': countryName,

            }, {
              $set: {
                'store': arr
              }
            }, function(err) {
              if(err){
              reponse=err;
              }
              else{
                reponse="Updated successfully";
               }
              ////console.log(err);
            });
        //  }
        }

      }
      res.send(reponse);
  })

}
};
