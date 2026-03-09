# Go Raiding

Go Raiding — вебзастосунок для створення, перегляду та керування рейдами у World of Warcraft.

## Поточний стек

### Frontend

- Next.js 16 (App Router)
- React 19
- TypeScript
- CSS Modules + globals.css
- Axios
- TanStack React Query
- React Hot Toast
- Zustand
- Formik
- Yup

## Структура проєкту

```txt
go-raiding/
├─ apps/
│  └─ web/
│     ├─ src/
│     │  ├─ app/
│     │  ├─ components/
│     │  ├─ services/
│     │  └─ lib/
│     ├─ public/
│     └─ package.json
├─ packages/
└─ package.json
```

## Що вже реалізовано

- базова структура monorepo
- Next.js App Router

route groups:

- (pre-auth)
- (auth)
- (app)
- landing page
- header / footer

базові UI елементи:

- Button
- Divider
- Icon
- SVG sprite для іконок
- Axios instance

API services:

- auth.api.ts
- raids.api.ts
- characters.api.ts

глобальний обробник API-помилок через toast

## React Query Provider

React Query Devtools (тільки в dev)

Як запустити проєкт

1. Встановити залежності

У корені репозиторію:
npm install

2. Створити env файл
   Створити файл:
   apps/web/.env.local

і додати:
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000

Якщо backend буде на іншому порті — змінити значення.

3. Запустити frontend
   npm run dev:web

Після цього застосунок буде доступний за адресою:

http://localhost:3000

Корисні команди

- Запуск web
  npm run dev:web
- Лінтер
  npm run lint -w @go-raiding/web
- Білд
  npm run build -w @go-raiding/web

Важливі технічні правила
API

- У компонентах не використовуємо fetch()
- У компонентах не викликаємо axios напряму
- Усі запити йдуть тільки через src/services/\*

React Query

- Усі серверні дані бажано тягнути через React Query
- Devtools підключені тільки в dev режимі

UI

- Глобальні змінні стилів лежать у globals.css
- Стилі компонентів — через CSS Modules
- Базові UI-компоненти лежать у components/UI

Іконки

- Іконки зберігаються у SVG sprite
- Компонент для використання іконок: Icon

Поточний стан Sprint 0
Вже зроблено:

- setup
- routing
- базова навігація
- landing
- API layer
- React Query setup

Ще в роботі:

- modal / bottom sheet
- confirm section
- loaders
- mock data / mock API
- list behaviors
- polish / QA

## Нотатки для нових учасників

- Спочатку обов’язково перевірити apps/web/.env.local
- Не додавати нові HTTP-запити напряму в компоненти
- Перед створенням нових shared UI-компонентів узгодити структуру
- Якщо працюєте з інфраструктурою (modal, bottom sheet, list logic) — краще не дублювати роботу паралельно без синку

TODO найближчим часом

- реалізація modal / bottom sheet
- mock API для UI без backend
- loading / empty / error states
- підготовка до Sprint 1
