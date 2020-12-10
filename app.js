const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let items = ['Buy Food','Make Food','Eat Food'];
let workItems = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get('/', (req, res) => {
    var today = new Date(); //Date() is a predefined in javascript

    var options = {
      weekday : 'long',
      day: 'numeric',
      month: 'long',

    };

let day = today.toLocaleDateString('en-IN',options);
    // var currentDay = today.getDay(); //   //getDay() method gets the current day
    // var day = "";
    // switch (currentDay) {
    //   case 0:
    //     day = 'Sunday';
    //     break;
    //
    // case 1:
    //   day = 'Monday';
    // break;
    //
    //   case 2:
    //   day = 'Tuesday';
    //   break;
    //
    // case 3:
    //   day = 'Wednesday';
    //   break;
    //
    // case 4:
    //   day = 'Thursday';
    //   break;
    //
    // case 5:
    //   day = 'Friday';
    //   break;
    //
    // case 6:
    //   day = 'Saturday';
    //   break;
    //
    // default:
    // console.log("Error:  current day is = " + currentDay);
    // break;
    // }

res.render('list', {listTitle: day, newListItems: items});

});
app.post("/",(req,res) => {
let item = req.body.newItem;
  if(req.body.list === 'work'){
    workItems.push(item);
    res.redirect("/work");
  }
    else{
  items.push(item);
  res.redirect("/");
}
});

app.get('/work',(req,res) => {
  res.render("list",{listTitle : "Work List", newListItems : workItems});
});

app.listen(3000, () => console.log("Server started on port 3000"));
