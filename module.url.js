var url = require('url');
var querystirng = require('querystring');

var parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160');
/*console.log(parsedObject);*/
console.log(querystring.parse(parsedObject.query));
