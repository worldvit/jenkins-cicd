const http = require('http');

const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('🚀 Jenkins CI/CD 파이프라인 완벽 구축 성공! 24시간 멈추지 않는 서버입니다.\n');
});

server.listen(port, () => {
  console.log(`서버가 ${port}번 포트에서 가동 중입니다...`);
});
