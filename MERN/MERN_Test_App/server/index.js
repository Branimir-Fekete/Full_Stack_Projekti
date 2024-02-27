const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');

mongoose.connect(
  'mongodb+srv://branimir:branimir@cluster0.o9az6lm.mongodb.net/merntestapp?retryWrites=true&w=majority&appName=Cluster0'
);

app.get('/getUsers', (req, res) => {
  UserModel.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(3001, () => {
  console.log('server runs perfecly');
});
