# Invoice Triage Flow

## Problem
Laskujen käsittelyssä tarvitaan selkeä päätöspolku: mitkä tapaukset voidaan hyväksyä automaattisesti ja mitkä on ohjattava manuaaliseen tarkastukseen.

## Approach
Rakensin yksinkertaisen päätöspuun, joka simuloi invoice-triage-prosessia:
- Receive invoice
- Validate
- Assign
- Approve/Reject
- Archive

Syöteparametrit (summa, toimittaja, suspicious-tila) vaikuttavat siihen, mille polulle lasku ohjautuu.

## Tech
- HTML/CSS/JavaScript
- Shared portfolio layout via `/assets/js/includes.js`
- Decision-tree logic in plain JavaScript

## Learnings
- Prosessisuunnittelussa selkeä branch-logiikka tekee automaatiosta ymmärrettävän.
- Input-validointi kannattaa tehdä ennen approval-reititystä.
- Security / fraud prevention:
  suspicious-laskut ohjataan aina manual review -polkuun,
  ja epäkelvot toimittajat hylätään ennen hyväksyntävaihetta.
