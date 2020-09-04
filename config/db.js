const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

mongoose.set('useUnifiedTopology', true);   //Fixing Deprecation warning

const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,   //Fixing Deprecation warning
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('MongoDB Connected ...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;