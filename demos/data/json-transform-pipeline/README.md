# JSON Transform Pipeline

## Problem
Raw JSON data often contains extra fields and mixed statuses. Before using the data in a UI or report, it needs a clear transform step.

## Approach
Parse input JSON, apply a simple filter + map transformation pipeline, and render a clean output view directly in the browser.

## Tech
- HTML/CSS/JavaScript
- Shared site layout via `/assets/js/includes.js`
- JSON parsing and transformation in plain JavaScript

## Learnings
- Small transformation steps make logic easy to read and debug.
- Error handling for invalid JSON is essential in data-oriented UI flows.
- Filtering and renaming fields helps separate source data from presentation data.
