# Используем официальный образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json перед установкой зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем весь проект
COPY . .
RUN npm run build

# ❗Команда запуска для прода
CMD ["npm", "run", "start"]

# Указываем порт (если у тебя Express или аналог)
EXPOSE 3000
