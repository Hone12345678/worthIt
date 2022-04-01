const express = require('express');
const path = require('path')
const routes = require('./routes')
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express();
const { User } = require("./models/User")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

require("./config/passport")(User);

app.use(routes)

db.once('open', () => {
	app.listen(PORT, () => {
		console.log(`API server running on port ${PORT}!`);
	});
});