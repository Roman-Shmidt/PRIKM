# Визначаємо базовий образ для етапу збірки
FROM node:latest as build-step

# Встановлюємо робочу директорію в контейнері
WORKDIR /app

# Копіюємо package.json та package-lock.json (якщо він існує)
COPY ./ResQueAngularApp/package*.json ./

# Встановлюємо залежності проекту
RUN npm install

# Копіюємо вихідні файли проекту в контейнер
COPY ./ResQueAngularApp/. .

# Збираємо додаток для продакшну
RUN npm run build

# Визначаємо базовий образ для сервера
FROM nginx:alpine

# Копіюємо зібрані файли з етапу збірки в nginx
COPY --from=build-step /app/dist/res-que-angular-app /usr/share/nginx/html

# Відкриваємо порт 80 для зовнішніх з'єднань
EXPOSE 80

# Запускаємо nginx
CMD ["nginx", "-g", "daemon off;"]

#зміна для перевірки контролю версіювання