function start(response, postData) {
    console.log('Handling the start request (Homepage, /start)');

    const body = `
    <!DOCTYPE html>
<html lang="en-us">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-withd, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>File Upload Application</title>
</head>
<body>
  <form action="/upload" method="post">
    <textarea name="text" rows="20" cols="60"></textarea>
    <input type="submit" value="Submit Text" />
  </form>
</body>
</html>
    `;

   response.writeHead(200, {'Content-Type': 'text/html'});
   response.write(body);
   response.end(); 
    
}

function upload(response, postData) {
    console.log('Handling upload request (/upload)');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(`You sent: ${postData}`);
    response.end();
}

exports.start = start;
exports.upload = upload;