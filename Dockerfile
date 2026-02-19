FROM node:18-alpine
WORKDIR /app
COPY . .
# 3000번 포트를 열어두겠다는 명시적 선언
EXPOSE 3000
# 서버 실행 명령어
CMD ["node", "server.js"]
