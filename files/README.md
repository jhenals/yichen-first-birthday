# Invito compleanno di Yichen 🎀

3 file, ognuno con un compito preciso:

- **index.html** — il testo dell'invito (nome, data, luogo, messaggi). Cerca i commenti tipo `<!-- NOME -->` per trovare subito cosa cambiare.
- **style.css** — i colori e lo stile. Tutti i colori sono variabili in cima al file (sezione `:root`): cambia un valore lì e si aggiorna ovunque nel sito.
- **script.js** — il comportamento (cambio schermata, pulsante RSVP, apertura busta). Di solito non serve toccarlo.

## Cose che probabilmente vorrai modificare

| Cosa | Dove | Cerca |
|---|---|---|
| Nome/età festeggiata | index.html | `Yichen`, `Compie 1 anno` |
| Data e ora | index.html | `27 settembre, ore 12:00` |
| Luogo e link Maps | index.html | `Sakura Sushi`, `href="https://www.google.com/maps...` |
| Messaggio del regalo | index.html | dentro `<div class="gift-msg">` |
| Colori | style.css | variabili in `:root` in cima |

## Come vederlo

Apri semplicemente `index.html` con doppio click nel browser: funziona anche offline, tranne per i caratteri (Fredoka e Quicksand) che vengono caricati da Google Fonts quando sei online.

## Come pubblicarlo online

Puoi caricare la cartella su un servizio gratuito come Netlify, Vercel o GitHub Pages: basta trascinare i 3 file, senza bisogno di configurazioni.
