var mongoose=require("mongoose")


var publish_detail=new mongoose.Schema({
    language:{type:String,required:true},
    publisher:{type:String,required:true},
    publish_date:{type:Date,required:true}
})

var bookSchema=new mongoose.Schema({
    name:{type: String, required:true, minlength:2,maxlength:30},
    author:{type: String,required:true,minlength:3,maxlength:30},
    price:{type:Number,required:true,min:5,max:1000},
    image:{type:String,required:false},
    publish_details:[publish_detail]
});

var bookModel=mongoose.model("Book",bookSchema,"Bookstore");

module.exports={
    bookModel
}