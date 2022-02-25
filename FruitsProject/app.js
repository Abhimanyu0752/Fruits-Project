const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true})
const  fruitSchema = new mongoose.Schema({
  name:{
    typr:String,
    required:[true,"Please check your data entery, no name specified."]
  },
  rating:{
    type:Number,
    min:1,
    max:10
  },
  review:String
});
const Fruit = mongoose.model("Fruit",fruitSchema);

const apple = new Fruit({
  name:"apple",
  rating:7,
  review:"Prety Solid as a fruit"
});

const orange = new Fruit({
  name:"orange",
  score:4,
  review:"Too sore for Me."
});

const kiwi = new Fruit({
  name:"kiwi",
  score:10,
  review:"Kiwis are best!!"
});

const banana = new Fruit({
name:"banana",
  score:6,
  review:"High Energy."
});

Fruit.insertMany([orange,kiwi,banana],function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully saved all fruits to FruitsDB");
  }
});


// fruit.save();
