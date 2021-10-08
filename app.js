var express = require('express');
var app = express();
const cors = require('cors');

app.use(cors())

app.get('/api', async (req, res) => {
    var pageno = req.query.no;
    if ( !pageno ) {
        res.send({});
        return;
    }
    var data = async () => {
        try {
            return await require(`./API/CONTENTLISTINGPAGE-PAGE${pageno}.json`)
        } catch (error) {
            return {};
        }
    }

    var out = await data();
    res.json(out);
})




var server = app.listen(process.env.PORT || 3001, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("HOSTED IN " + host + ' ' + port);
})
