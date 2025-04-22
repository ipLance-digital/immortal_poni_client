# Используем официальный образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и pnpm-lock.yaml перед установкой зависимостей
COPY package.json pnpm-lock.yaml ./

# Устанавливаем зависимости с использованием pnpm
RUN pnpm install --frozen-lockfile

# Копируем весь проект
COPY . .

# Собираем проект
RUN pnpm run build

# ❗Команда запуска для продакшн
CMD ["pnpm", "run", "start"]

# Указываем порт (если у тебя Express или аналог)
EXPOSE 3000
