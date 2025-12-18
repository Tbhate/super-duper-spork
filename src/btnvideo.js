document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('vimeo-player');
  const btn = document.querySelector('.btn-video');

  if (!iframe || !btn) {
    console.error('iframe или кнопка не найдены');
    return;
  }

  const player = new Vimeo.Player(iframe);

  let userPaused = false; // ← ВАЖНО

  // Включаем цикличное воспроизведение
  player.setLoop(true);

  /* клик по кнопке */
  btn.addEventListener('click', () => {
    player.getPaused().then(paused => {
      if (paused) {
        userPaused = false;
        player.play();
      } else {
        userPaused = true;
        player.pause();
      }
    });
  });

  /* ▶ старт */
  player.on('play', () => {
    btn.classList.add('pause', 'hidden');
  });

  /* ⏸ пауза */
  player.on('pause', () => {
    btn.classList.remove('pause', 'hidden');
  });

  // Автоматический старт
  player.play().catch(err => console.error('Ошибка воспроизведения:', err));
});
