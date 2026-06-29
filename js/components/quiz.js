// js/components/quiz.js
import { createElement, initIcons } from '../utils.js';

const QUIZ_QUESTIONS = [
  {
    id: 'level',
    title: 'Твой опыт в коде:',
    subtitle: 'ВОПРОС 1 ИЗ 5 • УРОВЕНЬ',
    options: [
      { text: '❌ Ноль', val: 'zero' },
      { text: '🟡 Пробовал (no-code / AI)', val: 'tried' },
      { text: '🟢 Пишу немного', val: 'basic' },
      { text: '🔥 Уже делал проекты', val: 'experienced' }
    ]
  },
  {
    id: 'goal',
    title: 'Что хочешь получить?',
    subtitle: 'ВОПРОС 2 ИЗ 5 • ЦЕЛЬ',
    options: [
      { text: '💰 Заработок на услугах / кодинге', val: 'money' },
      { text: '🚀 Свои собственных AI-продукты', val: 'products' },
      { text: '⚙️ Автоматизация текущей работы', val: 'automation' },
      { text: '🧠 Полноценно войти в AI-разработку', val: 'career' }
    ]
  },
  {
    id: 'pain',
    title: 'Что сейчас мешает?',
    subtitle: 'ВОПРОС 3 ИЗ 5 • БАРЬЕР',
    options: [
      { text: 'Не знаю с чего конкретно начать', val: 'start' },
      { text: 'Нет понятной системы и структуры', val: 'system' },
      { text: 'Сложно разбираться с кодом', val: 'code' },
      { text: 'Нет стоящих идей для проектов', val: 'ideas' }
    ]
  },
  {
    id: 'format',
    title: 'Как хочешь работать?',
    subtitle: 'ВОПРОС 4 ИЗ 5 • ФОРМАТ',
    options: [
      { text: '⚡ Быстро (результат за 1–2 дня)', val: 'fast' },
      { text: '📚 Системно (разобраться глубоко)', val: 'deep' },
      { text: '⚖️ Баланс скорсти и глубины', val: 'balance' }
    ]
  },
  {
    id: 'time',
    title: 'Сколько времени готов уделять?',
    subtitle: 'ВОПРОС 5 ИЗ 5 • ВРЕМЯ',
    options: [
      { text: '⏱️ 30–60 минут в день', val: '30m' },
      { text: '⌛ 1–2 часа в день', val: '1h' },
      { text: '🚀 Больше 2 часов в день', val: 'max' }
    ]
  }
];

export function renderQuiz({ onComplete }) {
  let step = 0; // 0: Start screen, 1-5: Questions
  const answers = {};
  const container = createElement('<div id="quiz-container" class="scroll-mt-6"></div>');

  function renderStep() {
    if (step === 0) {
      container.innerHTML = `
        <div class="notion-card p-6 text-center border-indigo-200 dark:border-indigo-800 bg-indigo-50/20 dark:bg-indigo-950/20 fade-in">
          <div class="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mx-auto mb-4">
            <i data-lucide="brain-circuit" class="w-6 h-6"></i>
          </div>
          <h2 class="text-xl font-bold mb-2">Давай соберём твой AI-путь</h2>
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-6">Ответь на 5 вопросов, чтобы получить персональную диагностику и план создания MVP.</p>
          <button id="quiz-start-btn" class="btn-primary btn-press py-3.5 text-base">👉 Начать диагностику</button>
        </div>
      `;
      container.querySelector('#quiz-start-btn').addEventListener('click', () => { step = 1; renderStep(); });
    } else if (step <= QUIZ_QUESTIONS.length) {
      const q = QUIZ_QUESTIONS[step - 1];
      const progressPct = Math.round((step / QUIZ_QUESTIONS.length) * 100);
      container.innerHTML = `
        <div class="notion-card p-5 fade-in">
          <div class="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
            <span>${q.subtitle}</span>
            <span>${progressPct}%</span>
          </div>
          <div class="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mb-6 overflow-hidden">
            <div class="bg-indigo-500 h-full progress-bar-fill" style="width: ${progressPct}%"></div>
          </div>
          <h3 class="text-lg font-bold mb-4">${q.title}</h3>
          <div class="space-y-2.5 mb-2">
            ${q.options.map((opt, i) => `
              <button data-val="${opt.val}" class="quiz-opt-btn w-full text-left p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 transition-all font-medium text-sm flex items-center justify-between">
                <span>${opt.text}</span>
                <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400"></i>
              </button>
            `).join('')}
          </div>
        </div>
      `;
      container.querySelectorAll('.quiz-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          answers[q.id] = btn.dataset.val;
          if (step < QUIZ_QUESTIONS.length) {
            step++;
            renderStep();
          } else {
            onComplete(answers);
          }
        });
      });
    }
    initIcons();
  }

  renderStep();
  return container;
}
