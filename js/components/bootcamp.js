// js/components/bootcamp.js
import { createElement } from '../utils.js';

/**
 * Рендер презентации Bootcamp и финальной кнопки записаться.
 * @param {Object} options
 * @param {Function} options.onEnroll
 * @returns {HTMLElement}
 */
export function renderBootcamp({ onEnroll }) {
  const html = `
    <section class="mt-6 mb-8 fade-in space-y-6">
      <!-- Презентация решения -->
      <div class="notion-card p-6 border-indigo-500/40 bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent shadow-xl">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500 text-white mb-3">
          <i data-lucide="graduation-cap" class="w-3.5 h-3.5"></i>
          <span>ТВОЁ РЕШЕНИЕ</span>
        </div>

        <h2 class="text-2xl font-black mb-4 tracking-tight">
          AI / Vibe Coding Bootcamp
        </h2>

        <div class="space-y-3 mb-6">
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Что ты получишь в процессе:</p>
          <div class="grid grid-cols-1 gap-2.5 text-sm">
            <div class="flex items-center gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
              <span>Научишься собирать любые AI-проекты</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
              <span>Сделаешь свои первые работающие MVP</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
              <span>Поймёшь изнутри как работает AI-разработка</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
              <span>Начнёшь зарабатывать на ценном навыке</span>
            </div>
          </div>
        </div>

        <div class="p-3.5 rounded-xl bg-slate-900 text-white text-xs space-y-1">
          <span class="text-indigo-400 font-bold uppercase block tracking-wider">Формат обучения:</span>
          <div class="flex flex-wrap gap-2 pt-1">
            <span class="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700">⚡ Чистая практика</span>
            <span class="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700">🚀 Реальные проекты</span>
            <span class="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700">📌 Задания</span>
            <span class="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700">🔍 Разборы кода</span>
          </div>
        </div>
      </div>

      <!-- Финальный CTA -->
      <div class="notion-card p-6 text-center border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/20">
        <h3 class="text-lg font-bold mb-4 leading-snug">
          Хочешь выйти из теории в создание реальных продуктов?
        </h3>
        <button id="enroll-btn" class="btn-primary btn-press w-full text-base py-4 bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/25">
          👉 Записаться на обучение
        </button>
      </div>
    </section>
  `;

  const element = createElement(html);
  const enrollBtn = element.querySelector('#enroll-btn');
  if (enrollBtn && onEnroll) {
    enrollBtn.addEventListener('click', onEnroll);
  }

  return element;
}
