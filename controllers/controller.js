const { name } = require('ejs');

require('dotenv').config()

exports.postlogin = (req, res) => {
  if (req.body.email == process.env.EMAIL && req.body.password == process.env.PASS) {
      req.session.user = req.body.email;
      res.redirect('/route/dashboard');
  } else if(req.body.email != process.env.EMAIL) {
      const errorMessage = "Invalid username";
      res.render('base', { errorMessage }, (err, html) => {
          res.send(html);
      });
  }else if(req.body.password != process.env.PASS){
      const errorMessage = "Invalid Password";
      res.render('base', { errorMessage }, (err, html) => {
          res.send(html);
      });

    }
}
exports.getDash = (req, res) => {
    res.render('dashboard', { user: req.session.user});
  }

// exports.logout =  (req, res) => {
//     req.session.destroy(function (err) {
//       if (err) {
//         console.log(err);
//         res.send("Error");
//       } else {
//         res.redirect('/'); 
//       }
//     });
// }
exports.logout=(req,res)=>{
  req.session.destroy(function(err){
      if(err){
          console.log(err);
          res.sent("error")

      }else{
          res.render("base",{title:"Express",logout:"Logout successful"})
      }
    })
}