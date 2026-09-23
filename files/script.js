/* ============================================================
   🎀 INVITO YICHEN — COMPORTAMENTO
   ============================================================
   Non c'è nulla da modificare qui per cambiare testi o colori:
   quelli si trovano in index.html e style.css.
   Questo file gestisce solo: cambio schermata, pulsante RSVP,
   e apertura della busta regalo.
   ============================================================ */
(function () {
  var screens = document.querySelectorAll('.screen');
  var tabs = document.querySelectorAll('.tab[data-goto]');
  var gotoBtns = document.querySelectorAll('[data-goto]');
  var invitationAudio = document.querySelector('.invitation-audio');

  function startInvitationAudio() {
    if (invitationAudio) invitationAudio.play().catch(function () {});
  }

  startInvitationAudio();
  document.addEventListener('pointerdown', startInvitationAudio, { once: true });

  // Mostra la schermata con l'id passato e nasconde le altre
  function showScreen(id) {
    screens.forEach(function (s) {
      s.classList.toggle('active', s.id === id);
    });
    tabs.forEach(function (t) {
      t.classList.toggle('active', t.getAttribute('data-goto') === id);
    });
  }

  gotoBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      showScreen(btn.getAttribute('data-goto'));
    });
  });

  /* ---------------- Busta regalo ---------------- */
  var envelopeBtn = document.getElementById('envelopeBtn');
  var giftMsg = document.getElementById('giftMsg');

  envelopeBtn.addEventListener('click', function () {
    var open = giftMsg.classList.toggle('open');
    envelopeBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
