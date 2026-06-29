// js/components/hero.js
import { createElement } from '../utils.js';

/**
 * Рендер первого экрана Hero.
 * @param {Object} options
 * @param {Function} options.onStartQuiz
 * @returns {HTMLElement}
 */
export function renderHero({ onStartQuiz }) {
  const html = `
    <section class="hero-section text-center mb-8 fade-in">
      <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50 mb-4">
        <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
        <span>AI / Vibe Coding Diagnostic</span>
      </div>
      
      <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 leading-tight">
        Собери свой первый AI / Vibe Coding проект за 7–14 дней
      </h1>
      
      <div class="notion-card p-4 text-left mb-6 space-y-2.5">
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Даже если ты:</p>
        <div class="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
          <i data-lucide="circle-dot" class="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"></i>
          <span>Никогда не писал код</span>
        </div>
        <div class="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
          <i data-lucide="circle-dot" class="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"></i>
          <span>Пробовал AI, но не понимал, что делать</span>
        </div>
        <div class="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
          <i data-lucide="circle-dot" class="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"></i>
          <span>Застрял между no-code и разработкой</span>
        </div>
      </div>

      <button id="start-quiz-btn" class="btn-primary btn-press w-full text-base py-3.5 mb-2">
        👉 Пройти диагностику
      </button>
      
      <p class="text-xs text-slate-500 dark:text-slate-400">
        ⚡ 3 минуты • персональный результат • бесплатно
      </p>
    </section>
  `;

  const element = createElement(html);
  const startBtn = element.querySelector('#start-quiz-btn');
  if (startBtn && onStartQuiz) {
    startBtn.addEventListener('click', onStartQuiz);
  }

  return element;
}
