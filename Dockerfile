FROM node:18-alpine
WORKDIR /app
COPY . .
CMD ["echo", "Hello Jenkins CI/CD!"]
