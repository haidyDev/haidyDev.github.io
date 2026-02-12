# Before/After: Booking System Architecture

## Problem
Booking operations rely on spreadsheets, email, and manual updates. This creates fragmented data, unclear status ownership, and slow response times across teams.

## Approach
Map the current process and propose a target architecture with Dataverse as the data core, Power Apps for booking lifecycle management, and Power Automate for workflow orchestration and notifications.

## Tech
- HTML/CSS/JavaScript (static demo page)
- Shared portfolio theme via `/assets/css/style.css`
- Shared header/footer includes via `/assets/js/includes.js`
- Optional section toggle interaction in plain JavaScript

## Learnings
- A clean target architecture starts with data model clarity, not UI first.
- Explicit process boundaries reduce flow complexity and failure points.
- Risk planning (scope, data quality, adoption, reliability) should be part of architecture definition, not a later phase.
