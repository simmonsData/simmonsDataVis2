const mongodb = require("mongodb").MongoClient,
    csvtojson = require("csvtojson");


const url = process.env.MONGODB_URI || require('../config').db.uri;

exports.upload = (req, res) => {
  
  csvtojson()
  .fromFile("DatabaseData.csv")                                     // Which csv file to use for uploading
  .then(csvData => {
    //console.log(csvData);

    mongodb.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        if (err) throw err;

        client
          .db("uploadTest")                                         // Which database to upload csv data to
          .collection("students")                                   // Which collection in database to upload csv data to
          .insertMany(csvData, (err, res) => {
            if (err) 
              throw err;

            console.log(`Inserted: ${res.insertedCount} rows`);
            client.close();
          });
      }
    );
  });
};