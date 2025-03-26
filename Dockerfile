# Используем официальный образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json перед установкой зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект
COPY . .

# Указываем порты для Next.js и Storybook
EXPOSE 3000 6006

# Команда по умолчанию для запуска контейнера
CMD ["npm", "run", "dev"]