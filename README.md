# VK Video для детей
Это пользовательский скрипт, упрощающий интерфейс сайта [VK Video](https://vkvideo.ru/) для детского использования
> Скрипт удаляет некоторые элементы навигации и перенаправляет с главной страницы в детский раздел, это позволяет ограничить выбор ребенка исключительно здоровым детским контентом

# Как использовать

Подключите **[скрипт](https://github.com/vkui/vkvideo-for-kids/blob/main/script.js)** в виде кода или модуля в любое браузерное расширение для запуска пользовательских скриптов

> **[User JavaScript and CSS](https://chromewebstore.google.com/detail/nbhcbdghjpllgmfilhnhkllmkecfmpld)** — приятный интерфейс, но модули добавляются вручную
> 
> **[Tampermonkey](https://chromewebstore.google.com/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)** — неудобный интерфейс, но поддерживает готовые конфиги
> ```c
> // ==UserScript==
> // @name            VK Video для детей
> // @description     Удаляет ненужный интерфейс и направляет в детский раздел из логотипа
> // @match           https://vkvideo.ru/*
> // @require         https://vkui.github.io/vkvideo-for-kids/script.js
> // @run-at          document-start
> // @grant           none
> // @version         1.0
> // ==/UserScript==
> ```
