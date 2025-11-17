## copy from CodeRabbit  curl -fsSL https://cli.coderabbit.ai/install.sh | sh
## winver
## wsl --unregister Ubuntu
## wsl --install
## wsl --install -d Ubuntu
## start wsl -d Ubuntu
## cd /mnt/c/Users/annap/Desktop/treejs-test

## pwd check
## ls show directory
## sudo apt update
## sudo apt install unzip -y
# СПОСОБ 1 — Через поиск Windows (самый простой)

Нажми Win на клавиатуре

Напиши: Ubuntu

Кликни по иконке Ubuntu
✅ Что делать дальше (пошагово)
1️⃣ Перейди в папку своего проекта
В Ubuntu напиши:
cd /mnt/c/Users/annap/Desktop/treejs-test

Проверь, что папка открылась:
ls -a

Ты должна увидеть файлы:
.git, src, package.json, vite.config.js и т.д.

2️⃣ Запусти CodeRabbit review
coderabbit review --plain

Теперь review должен проходить без ошибок.

3️⃣ Применяй советы, коммить, пушь
Пример:
git add .
git commit -m "Fix navbar links"
git push

## Итого:
🔹 Локальный review — нужен только git
🔹 Review в GitHub — нужен git + GitHub repo + установленный бот
# command coderabbit

## three.js
🔹npm install  three @react-three/drei @react-three/fiber
🔹npm i gsap @gsap/react
🔹npm i react-responsive

##  npx gltfjsx macbook-14.glb -T

cd public/models/
### gltfjsx — это утилита, которая преобразует GLB / GLTF 3D-модель → React-компонент для Three.js / React Three Fiber.