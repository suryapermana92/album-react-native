var axios = require('axios');

axios.get('http://api.openweathermap.org/data/2.5/weather?q=Serpong&appid=0fb96df37506f1175d52250c72f0e840')
.then((response) => {
console.log('SUCCESS', response);
}).catch((error) => {
console.log('ERROR', error);
});