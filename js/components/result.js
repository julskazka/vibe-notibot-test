// js/components/result.js
import { createElement } from '../utils.js';

/**
 * Рендер блока результатов диагностики и интерактивного графика.
 * @param {Object} options
 * @param {Object} options.answers
 * @returns {HTMLElement}
 */
export function renderResult({ answers }) {
  const html = `
    <div class="space-y-6 fade-in">
      <!-- Главная карточка результата -->
      <section class="notion-card p-6 border-indigo-300 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/30 dark:from-indigo-950/40 dark:to-purple-950/20 shadow-lg">
        <div class="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 mb-2">
          <i data-lucide="target" class="w-4 h-4"></i>
          <span>Твой персональный результат</span>
        </div>
        
        <h2 class="text-2xl font-extrabold mb-3">
          Тип: <span class="text-indigo-600 dark:text-indigo-400">AI Builder</span>
        </h2>
        <p class="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">(Начинающий создатель продуктов)</p>

        <div class="space-y-3 mb-6">
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">💡 Что ты уже можешь делать:</p>
          <div class="grid grid-cols-1 gap-2 text-sm text-slate-700 dark:text-slate-300">
            <div class="flex items-center gap-2.5 p-2 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60">
              <i data-lucide="check" class="w-4 h-4 text-emerald-500 shrink-0"></i>
              <span>Собирать простые AI-инструменты</span>
            </div>
            <div class="flex items-center gap-2.5 p-2 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60">
              <i data-lucide="check" class="w-4 h-4 text-emerald-500 shrink-0"></i>
              <span>Быстро запускать первые MVP</span>
            </div>
            <div class="flex items-center gap-2.5 p-2 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60">
              <i data-lucide="check" class="w-4 h-4 text-emerald-500 shrink-0"></i>
              <span>Использовать AI как персонального разработчика</span>
            </div>
          </div>
        </div>

        <!-- Главная проблема -->
        <div class="p-4 rounded-xl bg-rose-50/80 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-200">
          <div class="flex items-center gap-2 font-bold text-sm mb-1">
            <i data-lucide="alert-circle" class="w-4 h-4 text-rose-500 shrink-0"></i>
            <span>⚠️ Главная проблема</span>
          </div>
          <p class="text-sm">Ты сейчас <strong>потребляешь AI</strong>, но не превращаешь знания в готовый рабочий продукт.</p>
        </div>
      </section>

      <!-- Интерактивная Диаграмма -->
      <section class="notion-card p-5 border-slate-200 dark:border-slate-800">
        <h3 class="text-base font-bold mb-1 flex items-center gap-2">
          <i data-lucide="bar-chart-2" class="w-4 h-4 text-indigo-500"></i>
          <span>📊 Сравнение твоего пути</span>
        </h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 mb-6">Текущий хаос vs Системный путь Bootcamp</p>

        <div class="grid grid-cols-2 gap-4 items-end h-44 pb-2 border-b border-slate-200 dark:border-slate-700 mb-4">
          <div class="flex flex-col items-center gap-2 h-full justify-end">
            <span class="text-xs font-bold text-rose-500">15% Выход</span>
            <div class="w-full bg-rose-400/20 dark:bg-rose-500/20 rounded-t-lg flex items-end justify-center p-1 border border-rose-300/40" style="height: 35%;">
              <div class="w-full bg-rose-500 rounded-t h-full"></div>
            </div>
            <span class="text-xs font-semibold text-slate-600 dark:text-slate-400">Сейчас</span>
          </div>
          <div class="flex flex-col items-center gap-2 h-full justify-end">
            <span class="text-xs font-bold text-emerald-500">92% Запуск</span>
            <div class="w-full bg-emerald-400/20 dark:bg-emerald-500/20 rounded-t-lg flex items-end justify-center p-1 border border-emerald-300/40" style="height: 90%;">
              <div class="w-full bg-emerald-500 rounded-t h-full"></div>
            </div>
            <span class="text-xs font-semibold text-slate-600 dark:text-slate-400">Bootcamp</span>
          </div>
        </div>

        <div class="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
          <span class="text-base">💥</span>
          <div>
            <strong class="block text-slate-900 dark:text-white mb-0.5">Интерпретация:</strong>
            Ты сейчас находишься в режиме <em>«обучение без результата»</em> — тратишь время на туториалы вместо реальных запусков.
          </div>
        </div>
      </section>

      <!-- Перелом / Усиление боли -->
      <section class="notion-card p-5 border-amber-200/60 dark:border-amber-900/40 bg-amber-50/20 dark:bg-amber-950/20">
        <h3 class="text-base font-bold mb-3 text-amber-900 dark:text-amber-200 flex items-center gap-2">
          <i data-lucide="flame" class="w-4 h-4 text-amber-500"></i>
          <span>Почему ты не выходишь в результат?</span>
        </h3>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2">
            <span class="text-amber-500">❌</span> Нет четкой пошаговой системы действий
          </li>
          <li class="flex items-center gap-2">
            <span class="text-amber-500">❌</span> Нет реальной практики на коммерческих проектах
          </li>
          <li class="flex items-center gap-2">
            <span class="text-amber-500">❌</span> Нет понимания архитектуры AI-продуктов
          </li>
        </ul>
      </section>
    </div>
  `;

  return createElement(html);
}
