const mongoose = require("mongoose");
var Book = mongoose.model('Book');

const getBooks=function(req,res){
    Book.find().exec( (err,booklist)=> {
        if(err){
            
           res.status(404).json(err);
           return;
        }
        res
        .status(200)
        .json(booklist)
    });
};

const createBook=function(req,res){
    console.log('req is', req.body )
    
    //Book.create({
        // name:req.body.name,
        // author:req.body.author,
        // price:req.body.price,
        // image:"/assets/default.jpg",
        // publish_details:req.body.publish_details

        Book.create({
            name:req.body.name,
            author:req.body.author,
            price:req.body.price,
            image:"/assets/default.jpg",
            publish_details:[{
                language:req.body.publish_details[0].language,
                publisher:req.body.publish_details[0].publisher,
                publish_date:req.body.publish_details[0].publish_date
            }]
           
       
        
    },(err,booklist)=> {
        if(err){
            res
            .status(400)
            .json(err);
        return;
        }
        res
        .status(201)
        .json(booklist)
    });
};



const updateBook=function(req,res){
   if(!req.params.bookid){
    res
    .status(404)
    .json({"message":"Not found, book id is required"});
    return;
   }
   Book.findById(req.params.bookid)
   .exec((err,bookdata) => {
       if(!bookdata){
           res
           .status(404)
           .json({
               "message":"book id not found"
           });
           return;
       }else if(err){
           res
           .status(400)
           .json(err);
           return;
       }
    else{
        bookdata.name=req.body.name;
        bookdata.author=req.body.author;
        bookdata.price=req.body.price;
        bookdata.publish_details[0].language=req.body.publish_details[0].language;
        bookdata.publish_details[0].publisher=req.body.publish_details[0].publisher;
        bookdata.publish_details[0].publish_date=req.body.publish_details[0].publish_date;
        bookdata.save((err,bookdata) => {
            if(err){
                res
                .status(404)
                .json(err);
            } else{
                res
                .status(200)
                .json(bookdata);
            }
        }
    );
 
    }
      
});
};



const getSingleBook = function(req, res) {
    var id = req.params.bookid;
    Book
        .findById(id)
        .exec(function(err, bookdata){
            if (err){
                res 
                    .status(404)
                    .json(err)
            }
            res 
                .status(200)
                .json(bookdata)
        }) 
    
};
const deleteBook=function(req,res){
    const bookid=req.params.bookid;
    if(bookid){
        Book
        .findByIdAndRemove(bookid)
        .exec((err,bookdata) => {
            if(err){
                res
                .status(404)
                .json(err);
                return;
            }
        res
        .status(204)
        .json(null);
        });
    } else{
        res
        .status(404)
        .json({"message":"No bookid"});
    }
};

module.exports= {
    getBooks,createBook,getSingleBook,updateBook,deleteBook
};
