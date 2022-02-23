const express = require("express"); // express 패키지 import

const app = express();

// API Key를 별도 관리: dot(.) env 활용, .env라는 파일에 key를 보관하고,
// dotenv가 .env 파일을 활용해서, process.enc 객체에 포함시킴
const dotenv = require('dotenv');
dotenv.config();

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const request = require('request');

app.use(express.static('public'))