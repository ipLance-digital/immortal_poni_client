# Используем официальный образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Устанавливаем pnpm
RUN npm install -g pnpm

# Копируем package.json и package-lock.json перед установкой зависимостей
COPY package*.json pnpm-lock.yaml ./

# Устанавливаем зависимости через pnpm
RUN pnpm install

# Копируем весь проект
COPY . .

# Собираем проект
RUN pnpm run build

# Указываем команду для старта
CMD ["pnpm", "start"]
