const express = require('express');
const seriesRoutes = express.Router();
console.log('routes stuff');

// Require Series model in our routes module
let Series = require('./series.model');

// Defined store route
seriesRoutes.route('/').post(function (req, res) {
  console.log('incoming datas: ', req.body);
  let series =  new Series();
  const ser = req.body ;
  console.log('body was: ', ser);
  //const newSeries =  new Series(req.body);
  series.title=ser.title;
  console.log(ser.title);
  series.author=ser.author;
  series.genre=ser.genre;
  series.origin=ser.origin;

  console.log('add series',series);
//////////
  series.save()
    .then(series => {
      res.status(200).json({'series': 'series in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
  /////////
});

// get data(index or listing) route
seriesRoutes.route('/').get(function (req, res) {
  console.log('hit this route');
    Series.find(function(err, series){
    if(err){
      console.log(err);
      return res.sendStatus(404)
    }
    else {
      return res.json(series);
    }
  });
});


// Defined edit route
seriesRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Series.findById(id, function (err, series){
      res.json(series);
  });
});

//   update route
 seriesRoutes.route('/update/:id').put(async function (req, res) {
    let id = req.params.id
    let body = req.body
    // console.log(`id: ${id} / body: ${JSON.stringify(body)}`);
    let result = await Series.updateOne({_id: id}, {$set: body} );
        // console.log(`result: ${JSON.stringify(result)}`);

    res.send(result)
});


// seriesRoutes.route('/update/:id').put(function (req, res) {
//     Series.findById(req.params.id, function(err, series) {
//     if (series)
//       res.status(404).send("data is not found");
//     else {
//         series.series = req.body.series;
//         series.genre = req.body.genre;
//         series.origin = req.body.origin;
//         series.author = req.body.author;

//         series.save().then(series => {
//           res.json('Update complete');
//       })
//       .catch(err => {
//             res.status(400).send("unable to update the database");
//       });
//     }
//   });
// });

//  delete | remove | destroy route
seriesRoutes.route('/delete/:id').delete(function (req, res) {
    Series.findByIdAndRemove({_id: req.params.id}, function(err, Series){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = seriesRoutes;