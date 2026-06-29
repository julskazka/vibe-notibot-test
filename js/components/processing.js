// js/components/processing.js
import { createElement, initIcons } from '../utils.js';

/**
 * Рендер экрана загрузки и анализа профиля.
 * @param {Object} options
 * @param {Function} options.onFinish
 * @returns {HTMLElement}
 */
export function renderProcessing({ onFinish }) {
  const html = `
    <div class="notion-card p-6 text-center border-indigo-200 dark:border-indigo-900 bg-slate-900 text-white fade-in shadow-2xl">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-6 pulse">
        <i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i>
        <span>AI is building your roadmap…</span>
      </div>

      <h2 class="text-xl font-bold mb-6 tracking-tight">Анализируем твой AI-профиль…</h2>

      <div class="max-w-xs mx-auto space-y-3.5 text-left text-sm mb-8">
        <div id="check-level" class="flex items-center gap-3 text-slate-400 transition-colors duration-300">
          <div class="icon-box w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-xs shrink-0"></div>
          <span>Оценка текущего уровня</span>
        </div>
        <div id="check-goal" class="flex items-center gap-3 text-slate-400 transition-colors duration-300">
          <div class="icon-box w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-xs shrink-0"></div>
          <span>Сопоставление с главной целью</span>
        </div>
        <div id="check-pain" class="flex items-center gap-3 text-slate-400 transition-colors duration-300">
          <div class="icon-box w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-xs shrink-0"></div>
          <span>Определение ключевых барьеров</span>
        </div>
        <div id="check-potential" class="flex items-center gap-3 text-slate-400 transition-colors duration-300">
          <div class="icon-box w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-xs shrink-0"></div>
          <span>Расчет потенциала роста</span>
        </div>
      </div>

      <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
        <div id="processing-bar" class="bg-indigo-500 h-full w-0 transition-all duration-300"></div>
      </div>
    </div>
  `;

  const container = createElement(html);

  // Запуск последовательной анимации галочек
  setTimeout(() => {
    const steps = [
      { id: '#check-level', pct: 25 },
      { id: '#check-goal', pct: 50 },
      { id: '#check-pain', pct: 75 },
      { id: '#check-potential', pct: 100 }
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        const el = container.querySelector(step.id);
        const bar = container.querySelector('#processing-bar');
        if (el) {
          el.classList.remove('text-slate-400');
          el.classList.add('text-emerald-400', 'font-medium');
          const box = el.querySelector('.icon-box');
          box.className = 'icon-box w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-xs shrink-0 font-bold';
          box.innerHTML = '✓';
        }
        if (bar) bar.style.width = `${step.pct}%`;

        if (idx === steps.length - 1) {
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 600);
        }
      }, (idx + 1) * 500);
    });
  }, 100);

  return container;
}
