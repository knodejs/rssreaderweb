const express = require('express');
const path = require('path');

var app = express();

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

app.use(express.static(path.join(__dirname,'dist')));
app.use('/dist',express.static(path.join(__dirname,'dist')));
app.use('/static',express.static(path.join(__dirname,'static')));
app.use(express.static(path.join(__dirname,'.well-known')));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'),() => {
  console.log('Server listening on port ' + app.get('port'));
});
