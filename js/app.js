// js/app.js
import { initIcons } from './utils.js';
import { renderHero } from './components/hero.js';
import { renderPainPromise } from './components/pain-promise.js';
import { renderQuiz } from './components/quiz.js';
import { renderProcessing } from './components/processing.js';
import { renderResult } from './components/result.js';
import { renderBootcamp } from './components/bootcamp.js';

function initApp() {
  const appEl = document.getElementById('app');
  if (!appEl) return;

  // Инициализация структуры
  appEl.innerHTML = `
    <main class="max-w-md mx-auto px-4 pt-6 pb-12 safe-top safe-bottom">
      <div id="landing-view"></div>
      <div id="quiz-view"></div>
      <div id="processing-view" class="hidden"></div>
      <div id="result-view" class="hidden"></div>
    </main>
  `;

  const landingView = appEl.querySelector('#landing-view');
  const quizView = appEl.querySelector('#quiz-view');
  const processingView = appEl.querySelector('#processing-view');
  const resultView = appEl.querySelector('#result-view');

  // Рендер стартового лендинга
  const heroEl = renderHero({
    onStartQuiz: () => {
      quizView.scrollIntoView({ behavior: 'smooth' });
    }
  });
  const painPromiseEl = renderPainPromise();
  landingView.appendChild(heroEl);
  landingView.appendChild(painPromiseEl);

  // Рендер квиза
  const quizEl = renderQuiz({
    onComplete: (answers) => {
      // Переход к экрану обработки
      landingView.classList.add('hidden');
      quizView.classList.add('hidden');
      processingView.classList.remove('hidden');
      processingView.scrollIntoView({ behavior: 'smooth' });

      const processingEl = renderProcessing({
        onFinish: () => {
          processingView.classList.add('hidden');
          resultView.classList.remove('hidden');

          // Рендер результатов и офера
          const resultEl = renderResult({ answers });
          const bootcampEl = renderBootcamp({
            onEnroll: () => {
              if (window.notibot) {
                window.notibot.haptics('success');
                window.notibot.sendData({ action: 'enroll', answers });
              } else {
                alert('🚀 Поздравляем! Заявка на AI / Vibe Coding Bootcamp принята.');
              }
            }
          });

          resultView.appendChild(resultEl);
          resultView.appendChild(bootcampEl);
          initIcons();
          resultView.scrollIntoView({ behavior: 'smooth' });
        }
      });

      processingView.appendChild(processingEl);
      initIcons();
    }
  });

  quizView.appendChild(quizEl);
  initIcons();
}

initApp();
