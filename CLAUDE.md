# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WebGomoku is a browser-based **Ultimate Tic Tac Toe** game. It is a pure static web application — no build tools, no package manager, no dependencies. Everything lives in `index.html`.

## Running the Game

Open `index.html` directly in a browser, or serve the directory with any static file server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

There are no build, lint, or test commands.

## Architecture

All game logic, HTML structure, and CSS styling are contained in a single file: `index.html`.

**Game type:** Ultimate Tic Tac Toe — a 9×9 board divided into nine 3×3 sub-boards. Winning a sub-board claims it; winning three sub-boards in a line wins the game.

**Key global state:**
- `alreadyT[]` (81 elements) — tracks cell occupancy: `0` = empty, `1` = player 1, `2` = player 2
- `lined[]` (9 elements) — tracks which sub-boards have been won and by whom
- `a[]` — references to all 81 `<img>` elements (the cells)
- `nowplay` — current player (1 or 2)
- `lastT` — index of the last cell played (determines which sub-board the next player must play in)

**Key functions:**
- `start()` — initializes the board and attaches click listeners to all 81 cells
- `touch(event)` — handles a player move; validates legality based on `lastT` and `lined[]`, updates state, checks for win, then triggers AI if in AI mode
- `line(board_index)` — checks if a 3×3 sub-board has a winning line; returns winner (1 or 2) or 0
- `bigline()` — checks if the macro 3×3 board (of sub-board winners) has a winning line
- `undo()` — reverts the last move
- `AItry()` — AI opponent; picks a random legal cell in the required sub-board

**Move routing rule:** When a player plays cell `i` within a sub-board, the next player must play in sub-board `i % 9` (the position within its own sub-board maps to the index of the target sub-board). If that sub-board is already won, the next player may play anywhere in an unwon sub-board.

**Images:** `blank.png` = empty cell, `1.jpg` / `2.jpg` = player pieces, `AI.jpg` / `UD.jpg` = button images, `dino.jpg` = decorative.
