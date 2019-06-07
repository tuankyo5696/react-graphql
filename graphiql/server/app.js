const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema/schema');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors())
//connect database
mongoose.connect('mongodb://tuan:tuankyo5696@ds133137.mlab.com:33137/gql-tuan');
mongoose.connection.once('open',()=>{
    console.log('connected to database');
});

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}))
app.listen(4000,() => {
    console.log('now listening for requests on port 4000')
});