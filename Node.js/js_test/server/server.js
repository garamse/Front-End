const http = require("http");

/* http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" }); // 정상적 200, 오류 404
    res.end("<p>Hello World!</p>");
  })
  .listen(3000, () => {
    console.log("3000번 포트 서버 접속 완료");
  });
*/


// 분기처리
http.createServer((req, res) => {
  if (req.url === "/") {   
    res.writeHead(200);
    res.end("main url");
  } else if (req.url === "/upload") {
    res.writeHead(200);
    res.end("upload url");
  }else if (req.url === "/delete") {
    res.writeHead(200);
    res.end("delete url");
  }else {
    res.writeHead(404);
    res.end("Not found!");
  }
})
.listen(3000, () => {
  console.log("3000번 포트 서버 접속 완료")
});
