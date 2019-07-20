const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const userRoute = require('./routes/usersRoute');
const app = express();
const PORT = process.env.PORT || 2000;


app.unsubscribe(
    bodyParser.urlencoded({
        extended:false
    })
);

app.use(bodyParser.json());


const database = require('./configurations/keys').mongoURI;


//Remove deprecation warning
mongoose.set('useCreateIndex', true); 



mongoose.connect(
    database,
    {useNewUrlParser:true}
)
.then(()=> console.log("MongoDB successfully connected"))
.catch(err => console.log(err))



app.use(passport.initialize());


require('./configurations/passport')(passport);


app.use('/users', userRoute)

// Starting server
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
