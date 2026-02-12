# Mini Design System

## Problem
Kun UI-komponentit tehdään tapauskohtaisesti, lopputulos muuttuu nopeasti epäyhtenäiseksi. Tämä vaikeuttaa ylläpitoa ja heikentää käyttökokemusta.

## Approach
Rakensin pienen design system -demon, jossa samat peruskomponentit (buttons, input states, badges, cards) toistuvat johdonmukaisesti yhden tyylikielen alla.

## Tech
- HTML/CSS/JavaScript
- Shared portfolio layout via `/assets/js/includes.js`
- Component state toggle in plain JavaScript

## Learnings
- Yhtenäiset komponentit nopeuttavat toteutusta ja vähentävät visuaalisia poikkeamia.
- Accessibility notes:
  focus-visible-tilat parantavat näppäimistökäyttöä,
  kontrasti on pidetty luettavana dark theme -taustalla,
  ja form-kentällä on selkeä label + virheilmoitus.
