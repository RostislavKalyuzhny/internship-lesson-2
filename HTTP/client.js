// GET REQUEST
// const http = require('http');

// const options = {
//   hostname: 'localhost',
//   port: 3000,
//   path: '/listUsers',
//   method: 'GET'
// };

// const req = http.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`);

//   res.on('data', d => {
//     process.stdout.write(d);
//   });
// });

// req.on('error', error => {
//   console.error(error);
// });

// req.end();
//
// POST REQUEST
const http = require('http');

const data = JSON.stringify({
  id: 4,
  name: 'tomato',
  price: '7$',
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/addUser',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();
