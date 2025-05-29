# ♟️ WebGomoku(Ultimate Tic Tac Toe)
An interactive web-based Ultimate Tic Tac Toe game. 
Play directly in your browser — no installation needed. 
🕹️ Built with HTML, CSS, and JavaScript.

# 終極井字遊戲

這是一款由井字遊戲衍生出的策略型雙人棋盤遊戲，融合數學概念與遊戲趣味，適合與朋友或 AI 對戰。

## 🔗 Demo Link

👉 [立即遊玩 WebGomoku]([https://<honeycream0903>.github.io/WebGomoku/](https://honeycream0903.github.io/WebGomoku/))

## 🎮 遊戲玩法

- 棋盤由 9 個大格組成，每個大格中又包含 9 個小格（總共 81 個小格）。
- 玩家依序輪流下棋。
- **第一手**可以任意點選一個小格。
- **之後每手的落點規則如下**：
  - 玩家在某個小格落子後，下一位玩家「必須」在對應位置的大格落子。
  - 例如：你在大格左上的「右下」下了一步，下一位玩家就只能在大格「右下」下棋。
- 若導向的大格已被贏下，則可在任意尚未贏下的大格中落子。

## 🧠 勝利條件

- 若你在某個大格中連成一線（橫、直、斜任一）即贏得該大格。
- 最先在整體大棋盤中贏得三個大格並形成一條線者即獲勝！

## 💻 操作方式

- 點選任一小格以落子。
- 點選 **Mr. Computer** 可與電腦對戰。
- 每輪可按一次 `Undo` 撤銷上一步。
- 頁面下方與跳出視窗會顯示目前指引與下一步必須落子的位置。

## 🛠️ 開發與部署

### 本地啟動

1. 將專案 clone 至本地：
   ```bash
   git clone https://github.com/<honeycream0903>/WebGomoku.git

