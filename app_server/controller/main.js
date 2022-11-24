const { response } = require("express");
const request= require("request");

const apiOptions = {
    server: 'http://localhost:3000'
};
const index = function (req, res) { 
    res.render('index',  {title: 'The Book House'}); 
   };

const display = function (req, res) { 
    res.render('display',{title:'Display'}); 
}; 


   const booklist= function(req,res){
    const path='/api/books';
    const requestOptions={
        url:apiOptions.server+path,
        method:'GET',
        json:{}
    };
    request(requestOptions,(err,response,body)=>{
        _renderListPage(req,res,body);
    }
    );
};
const bookInfo= function(req,res){
    const path=`/api/books/${req.params.bookid}`;
    const requestOptions={
        url:apiOptions.server+path,
        method:'GET',
        json:{}
    };
    request(requestOptions,(err,response,body)=>{
        _renderDetailsPage(req,res,body);
    }
    );
};
const _renderListPage=function(req,res,responseBody){
    console.log(responseBody);
    res.render('list',{
        books:responseBody,title:'Our Collections'
    });
};

const _renderDetailsPage=function(req,res,responseBody){
    console.log("testt", responseBody);
    res.render('details',{
        currentBook:responseBody, title:"Book Info"
    });
};

const _renderCreatePage= function(req,res){
    res.render('create',{
        title:"Add New Book"
    });
};

const addNewBook=function(req,res){
    _renderCreatePage(req,res);
};

const doAddNewBook=function(req,res){
    const path='/api/books';
   
    const postdata={
        name:req.body.name,
        author:req.body.author,
        price:req.body.price,
        image:"/assets/default.jpg",
        publish_details:{
            language:req.body.language,
            publisher:req.body.publisher,
            publish_date:req.body.publish_date,
        }
    };
  const requestOptions={
        url:apiOptions.server+path,
        method:'POST',
        json:postdata
    };

    request(requestOptions,(err,response,body)=>{
        if(response.statusCode===201){
            res.redirect('/list');
        }
    });
};




module.exports={
    booklist,bookInfo,index,display,addNewBook,doAddNewBook
    };




