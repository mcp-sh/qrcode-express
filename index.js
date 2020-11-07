const express = require('express');
const QRCode = require('qrcode');

var app = express();

app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index", {imgsrc: ''});
})

app.post("/", (req, res) => {
    var url = req.body.URL;
    QRCode.toDataURL(url, { errorCorrectionLevel: 'H' })
    .then(imgdata => {
        console.log(imgdata)
        res.render("index", {imgsrc: imgdata});
    })
    .catch(err => {
        console.log(err)
    })
    console.log(url);
    
});

app.listen(3000);
