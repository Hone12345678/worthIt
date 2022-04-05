// settong up connection with mongoose

const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/worthIt21', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


module.exports = mongoose.connection;