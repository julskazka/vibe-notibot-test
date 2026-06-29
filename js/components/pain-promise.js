// js/components/pain-promise.js
import { createElement } from '../utils.js';

/**
 * Рендер блоков БОЛЬ и ОБЕЩАНИЕ.
 * @returns {HTMLElement}
 */
export function renderPainPromise() {
  const html = `
    <div class="space-y-6 mb-8 fade-in">
      <!-- Блок БОЛЬ -->
      <section class="notion-card p-5 border-amber-200/50 dark:border-amber-900/40 bg-amber-50/30 dark:bg-amber-950/20">
        <h2 class="text-base font-bold flex items-center gap-2 mb-3 text-amber-900 dark:text-amber-200">
          <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-500 shrink-0"></i>
          <span>Почему у большинства ничего не получается</span>
        </h2>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2.5">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
            <span>AI пробуют, но не применяют</span>
          </li>
          <li class="flex items-center gap-2.5">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
            <span>Идеи есть, а реальных проектов нет</span>
          </li>
          <li class="flex items-center gap-2.5">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
            <span>Обучение проходит без четкой системы</span>
          </li>
          <li class="flex items-center gap-2.5">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
            <span>Нет понятного первого шага к результату</span>
          </li>
        </ul>
      </section>

      <!-- Блок ОБЕЩАНИЕ -->
      <section class="notion-card p-5 border-emerald-200/50 dark:border-emerald-900/40 bg-emerald-50/30 dark:bg-emerald-950/20">
        <h2 class="text-base font-bold flex items-center gap-2 mb-3 text-emerald-900 dark:text-emerald-200">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500 shrink-0"></i>
          <span>После диагностики ты получишь:</span>
        </h2>
        <div class="grid grid-cols-1 gap-2.5 text-sm text-slate-700 dark:text-slate-300">
          <div class="flex items-center gap-2 p-2 rounded-lg bg-white/60 dark:bg-slate-800/60 border border-emerald-100 dark:border-emerald-900/30">
            <i data-lucide="lightbulb" class="w-4 h-4 text-emerald-500 shrink-0"></i>
            <span class="font-medium">Идею AI-проекта под тебя</span>
          </div>
          <div class="flex items-center gap-2 p-2 rounded-lg bg-white/60 dark:bg-slate-800/60 border border-emerald-100 dark:border-emerald-900/30">
            <i data-lucide="layers" class="w-4 h-4 text-emerald-500 shrink-0"></i>
            <span class="font-medium">Персональный стек инструментов</span>
          </div>
          <div class="flex items-center gap-2 p-2 rounded-lg bg-white/60 dark:bg-slate-800/60 border border-emerald-100 dark:border-emerald-900/30">
            <i data-lucide="map-pin" class="w-4 h-4 text-emerald-500 shrink-0"></i>
            <span class="font-medium">Пошаговый план запуска MVP</span>
          </div>
          <div class="flex items-center gap-2 p-2 rounded-lg bg-white/60 dark:bg-slate-800/60 border border-emerald-100 dark:border-emerald-900/30">
            <i data-lucide="award" class="w-4 h-4 text-emerald-500 shrink-0"></i>
            <span class="font-medium">Оценку твоего уровня разработчика</span>
          </div>
        </div>
      </section>
    </div>
  `;

  return createElement(html);
}
