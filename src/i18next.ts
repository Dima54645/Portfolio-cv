import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      MiniAbout:
        "I develop simple and complex, but most importantly beautiful websites.",
      IAmDmitryChichev: "I am Dmitry Chichev.",
      Hi: "Hi",
      AboutPage: "About Me",
      SkillsPage: "My Skills",
      GamePage: "Game",
      MyExperiencePage: "My Experience",
      ClickMe: "Click me",
      loader: {
        name: "Dmitry Chichev",
        role: "Frontend Developer",
      },
      game: {
        GameOver: "Game Over",
        Pause: "Pause",
        SnakeGame: "Snake Game",
        Restart: "Restart",
        Start: "Start",
        Score: "Score",
        HighScore: "High Score",
        Speed: "Speed",
      },
      skills: {
        operatingSystems: "Operating Systems",
        programmingLanguages: "Programming Languages",
        librariesAndFrameworks: "Libraries and Frameworks",
        stylesAndUI: "Styling and UI Components",
        buildTools: "Build Tools",
        testingLintingFormatting: "Testing / Linters / Formatters",
        versionControl: "Version Control and Repositories",
        devOps: "DevOps / CI-CD",
      },
      about: {
        title: "ABOUT",
        text1:
          "I am a frontend developer with over 4 years of experience building modern web applications. I specialize in React, TypeScript, and Next.js.",
        text2:
          "My experience includes participating in the development of enterprise-level projects. I have strong expertise in React and client-side rendering optimization.",
        text3:
          "In my free time, I enjoy listening to music, reading foreign literature, and playing computer games. In the future, I plan to study English and Japanese.",
        text4:
          "I like to approach development as a creative process — creating products brings me genuine joy.",
      },
      experienceTitle: "EXPERIENCE",
      experience: {
        techCrew: {
          company: "Tech Crew",
          role: "Frontend Developer",
          period: "November 2022 – October 2025",
          description:
            "Internal project for selecting candidates for vacancies. The goal was to create a multifunctional app helping managers match candidates with client requirements.",
          team: "Frontend: 3, Backend: 2, designer, QA: 2, Tech Lead",
          technologies: [
            "React",
            "NextJS",
            "TypeScript",
            "Redux Toolkit",
            "Axios",
            "Material UI",
            "React Hook Form",
            "React Router",
            "React-draggable",
          ],
          responsibilities: [
            "Integrating frontend with REST API and handling HTTP methods.",
            "Analyzing and improving existing codebase, optimizing functionality.",
            "Responsive layout development.",
            "Developing React application from scratch based on design mockups.",
            "Developing login and registration pages with validation, email confirmation, password recovery, and role-based forms.",
            "Developing candidate management pages with filtering, sorting, and CRUD logic integrated with API.",
            "Developing interview scheduling pages with filtering, sorting, and Telegram integration for reminders.",
            "Developing pages for candidate imports from HH.ru with dynamic parsing and UI components.",
          ],
          achievements: [
            "Implemented token-based authorization.",
            "Created a bulk attachment feature for managers using HH.ru resume links.",
            "Developed candidate page UI with full CRUD logic and filters.",
            "Added a 'Resume Builder' page allowing managers to edit candidate CVs in company format.",
            "Built an adaptive comments component improving team communication.",
            "Developed a 'Selections' page for parsing and selecting candidates like in Tinder.",
            "Built an 'Interviews' page with Telegram reminders and notes for each candidate.",
          ],
        },
        lifeChanger: {
          company: "Life Changer",
          role: "Frontend Developer",
          period: "March 2021 – August 2022",
          description:
            "GitHub-like system for internal company use. The goal was to build a unique and intuitive web app for employees to upload and manage their projects.",
          team: "Frontend: 3, Backend: 2, designer, DevOps: 1, QA: 2, PM: 1, Team Lead",
          technologies: [
            "React",
            "NextJS",
            "TypeScript",
            "Redux Toolkit",
            "Axios",
            "Material UI",
            "React Hook Form",
            "React Router",
            "i18next",
          ],
          responsibilities: [
            "Integrated frontend with REST API.",
            "Analyzed and optimized existing codebase.",
            "Implemented responsive layouts.",
            "Developed React application from scratch based on mockups.",
            "Built authentication and registration pages with validation and email verification.",
          ],
          achievements: [
            "Implemented automatic system language detection and switching.",
            "Implemented token-based authentication.",
            "Fixed app freeze issue during route transitions.",
            "Solved UX issue where list view reset during auto-refresh; replaced with manual refresh logic.",
          ],
        },
      },
    },
  },
  ru: {
    translation: {
      MiniAbout:
        "Разрабатываю простые и сложные, но главное — красивые веб-сайты",
      IAmDmitryChichev: "Я Дмитрий Чичев",
      Hi: "Привет",
      AboutPage: "Обо мне",
      SkillsPage: "Мои навыки",
      GamePage: "Игра",
      MyExperiencePage: "Мой опыт",
      ClickMe: "Нажми на меня",
      loader: {
        name: "Дмитрий Чичев",
        role: "Фронтенд-разработчик",
      },
      game: {
        GameOver: "Игра окончена",
        Pause: "Пауза",
        SnakeGame: "Игра в змейку",
        Restart: "Перезапуск",
        Start: "Начать",
        Score: "Очки",
        HighScore: "Рекорд",
        Speed: "Скорость",
      },
      skills: {
        operatingSystems: "Операционные системы",
        programmingLanguages: "Языки программирования",
        librariesAndFrameworks: "Библиотеки и фреймворки",
        stylesAndUI: "Работа со стилями и готовыми компонентами",
        buildTools: "Сборщики",
        testingLintingFormatting: "Тестирование / Линтеры / Форматировщики",
        versionControl: "Контроль версий и репозитории",
        devOps: "DevOps / CI-CD",
      },
      about: {
        title: "ОБО МНЕ",
        text1:
          "Я Frontend-разработчик с более чем 4-мя годами опыта создания современных веб-приложений. Специализируюсь на React, TypeScript и Next.js.",
        text2:
          "Мой опыт включает участие в разработке корпоративных проектов. Обладаю глубокими знаниями React и оптимизации клиентского рендеринга.",
        text3:
          "В свободное время люблю слушать музыку, увлекаюсь чтением зарубежной литературы и компьютерными играми, в будущем планирую изучать английский и японский.",
        text4:
          "Мне нравится подходить к разработке как к творчеству — процесс создания продуктов приносит искреннюю радость.",
      },
      experienceTitle: "ОПЫТ",
      experience: {
        techCrew: {
          company: "Tech Crew",
          role: "Frontend-разработчик",
          period: "Ноябрь 2022 – Октябрь 2025",
          description:
            "Внутренний проект для подбора кандидатов на вакансии. Цель — создание многофункционального приложения, помогающего менеджерам подбирать кандидатов под требования заказчиков.",
          team: "Frontend: 3, Backend: 2, дизайнер, QA: 2, Тех лид",
          technologies: [
            "React",
            "NextJS",
            "TypeScript",
            "Redux Toolkit",
            "Axios",
            "Material UI",
            "React Hook Form",
            "React Router",
            "React-draggable",
          ],
          responsibilities: [
            "Интеграция фронта с REST API и работа с HTTP методами.",
            "Анализ и доработка существующего кода, оптимизация функционала.",
            "Адаптивная верстка.",
            "Разработка React-приложения с нуля по макету.",
            "Разработка страниц регистрации и входа: валидация, e-mail подтверждение, модуль восстановления пароля, разные формы регистрации по ролям.",
            "Разработка страницы с подбором кандидатов: фильтрация, сортировка, интеграция API, CRUD-логика.",
            "Разработка страницы собеседований: фильтрация, сортировка, интеграция с Telegram, напоминания.",
            "Разработка страницы с выгрузкой кандидатов с HH.ru.",
          ],
          achievements: [
            "Реализовал авторизацию на основе токенов.",
            "Реализовал массовое добавление кандидатов через ссылки на резюме HH.ru.",
            "Создал UI и логику для страницы кандидатов с фильтрацией и CRUD.",
            "Сделал конструктор резюме для менеджеров (редактирование CV кандидатов).",
            "Добавил адаптивные комментарии для совместной работы менеджеров.",
            "Разработал страницу 'Выборки' для подбора кандидатов как в Tinder.",
            "Сверстал страницу 'Собеседования' с интеграцией Telegram и заметками.",
          ],
        },
        lifeChanger: {
          company: "Life Changer",
          role: "Frontend-разработчик",
          period: "Март 2021 – Август 2022",
          description:
            "Аналог GitHub для внутреннего использования в компании. Цель — создать удобное веб-приложение для загрузки и ведения проектов сотрудников.",
          team: "Frontend: 3, Backend: 2, дизайнер, DevOps: 1, QA: 2, PM: 1, Тим лид",
          technologies: [
            "React",
            "NextJS",
            "TypeScript",
            "Redux Toolkit",
            "Axios",
            "Material UI",
            "React Hook Form",
            "React Router",
            "i18next",
          ],
          responsibilities: [
            "Интеграция фронта с REST API.",
            "Анализ и доработка существующего кода.",
            "Адаптивная верстка.",
            "Разработка React-приложения с нуля по макету.",
            "Разработка страниц регистрации и входа с валидацией и подтверждением e-mail.",
          ],
          achievements: [
            "Реализовал автоматическое определение системного языка пользователя.",
            "Реализовал авторизацию по токенам.",
            "Исправил зависания при переходах между страницами.",
            "Улучшил UX при обновлении списка проектов.",
          ],
        },
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
