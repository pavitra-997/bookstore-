const mongoose=require('mongoose');
var dbUri="mongodb+srv://pavithra_rajesh:pavithra1997@cluster0.r3vxr.mongodb.net/DBConnectivity?retryWrites=true&w=majority";
//var dburi= "mongodb+srv://pavithra_rajesh:pavithra1997@cluster0.r3vxr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(dbUri,{dbName:'TheBookHouse'});

mongoose.connection.on('connected',()=>{
    console.log("Application Connected to Database");
});
mongoose.connection.on('error',()=>{
    console.log("Application connection error");
});
mongoose.connection.on('disconnected',()=>{
    console.log("Application disconnected ");
});

require('./book');

var Book = mongoose.model('Book');
// Book.find({},function(error,book){console.log(error, book)})


// var publish_detail = {
//     language:'English',
//     publish_date: "FEB-12-2006",
//     publisher: 'DC Books',
// }

// Book.create(
//     {
//         name:"The Divine Comedy",author:"Henry Longfellow", price:"70",
//         publish_details:[publish_detail]
//     }          
// );
