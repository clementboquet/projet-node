let express = require ('express');
let app = express();
let port = 3000;
let  bodyparser = require ('body-parser');

app.set ('view engine' , 'ejs');
app.use(express.static(__dirname + '/www'));
app.use( '/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use( '/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use( '/js', express.static(__dirname + '/node_modules/popper.js/dist/umd'));
app.use( '/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/views', express.static(__dirname + '/views'));

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.listen (port, () => {
    console.log('Le Serveur est en route');
    console.log(`Serveur listening at http://localhost:${port}`);

})

let monObjet = {
 nom: "monObjet",
 valeur: 10
}

//Route

app.get('/', (req, res, next)=> {
    //res.sendFile('www/index.html');
    res.render('index.ejs', {monObjet: monObjet});
});

app.get('/page2', (req, res, next)=> {
    //res.sendFile('www/index.html');
    res.render('page2.ejs');
});

app.post('/page2', (req, res, next)=> {
    console.log(req.body.name);

});



app.use((req, res, next)=> {
   res.status(404).render('error.ejs');
});


