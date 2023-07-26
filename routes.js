const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'admin',
  password : 'P!nn@cle55565',
  database : 'workside_client'
});