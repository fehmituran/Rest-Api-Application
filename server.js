const app = require("./app");
const mongoose = require('mongoose');

mongoose.set("strictQuery", true);
mongoose.Promise = global.Promise
const PORT = process.env.PORT || 3000;
const urlDb = process.env.DB_HOST;

const connection = mongoose.connect(urlDb);

connection
    .then(
        app.listen(PORT, function() {
           
            console.log(`Database connection successful. Server is running use your api on http://localhost:${PORT}/api/contacts `)
        })
    )
    .catch(err => {
      console.log(`server not responding: ${err.message}`);
      process.exit(1);
    });