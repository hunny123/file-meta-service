var express = require('express');
var cors = require('cors');
require('dotenv').config()
var app = express();
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
const multer  = require('multer');
const upload = multer({ dest:  'public/'  });

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse',upload.single('upfile'),(req,res)=>{
   const title = req.body.title;
   const file = req.file;
   const {size,filename,mimetype} = file
  res.json({size:size,name:filename,type:mimetype})
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
