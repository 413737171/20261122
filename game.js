const categories = ["可回收物", "一般垃圾", "廚餘"];
const gameStorageKey = "greenbud-game-questions";
function loadGameQuestions() {
  let serialized;
  try {
    serialized = window.sessionStorage.getItem(gameStorageKey);
  } catch (error) {
    console.error("Could not read the shared knowledge-base questions.", error);
    return [];
  }
  if (!serialized) return [];

  let parsed;
  try {
    parsed = JSON.parse(serialized);
  } catch (error) {
    console.error("The shared game questions are not valid JSON.", error);
    return [];
  }
  if (!Array.isArray(parsed)) return [];

  return parsed.filter((question) => (
    question
    && ["regular", "advanced"].includes(question.difficulty)
    && typeof question.item === "string"
    && typeof question.detail === "string"
    && categories.includes(question.category)
    && typeof question.action === "string"
    && Array.isArray(question.actions)
    && question.actions.every((action) => typeof action === "string")
    && question.actions.includes(question.action)
    && typeof question.reason === "string"
    && typeof question.tip === "string"
    && typeof question.mediaTitle === "string"
  ));
}

const isAdvanced = new URLSearchParams(window.location.search).get("mode") === "advanced";
const questions = loadGameQuestions().filter((question) => (
  question.difficulty === (isAdvanced ? "advanced" : "regular")
));
const gameContent = document.getElementById("gameContent");
const gameStatus = document.getElementById("gameStatus");
let questionIndex = 0;
let answers = [];

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function createChoiceGroup(legendText, name, choices) {
  const fieldset = makeElement("fieldset", "choice-group");
  fieldset.appendChild(makeElement("legend", "", legendText));
  const list = makeElement("div", "choice-list");

  choices.forEach((choice, index) => {
    const label = makeElement("label", "choice-option");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = name;
    input.value = choice;
    input.required = index === 0;
    const text = makeElement("span", "", choice);
    label.append(input, text);
    list.appendChild(label);
  });

  fieldset.appendChild(list);
  return fieldset;
}

function renderQuestion() {
  const question = questions[questionIndex];
  gameContent.replaceChildren();

  const progressRow = makeElement("div", "progress-row");
  progressRow.append(
    makeElement("span", "", `${isAdvanced ? "進階題" : "挑戰"} ${questionIndex + 1} / ${questions.length}`),
  );
  const progress = document.createElement("progress");
  progress.max = questions.length;
  progress.value = questionIndex + 1;
  progress.setAttribute("aria-label", `第 ${questionIndex + 1} 題，共 ${questions.length} 題`);
  progressRow.appendChild(progress);

  const form = document.createElement("form");
  form.noValidate = true;
  const label = makeElement("p", "question-label", "請完成分類與減碳配對");
  const title = makeElement("h2", "question-title", question.item);
  const detail = makeElement("p", "question-detail", question.detail);
  const submit = makeElement("button", "game-primary", "確認配對");
  submit.type = "submit";

  form.append(
    label,
    title,
    detail,
    createChoiceGroup("第一步：這項物品怎麼分類？", "category", categories),
    createChoiceGroup("第二步：配對一個減碳小行動", "action", question.actions),
    submit,
  );
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const selectedCategory = data.get("category");
    const selectedAction = data.get("action");
    if (!selectedCategory || !selectedAction) {
      gameStatus.textContent = "先各選一個答案，再確認配對喔。";
      return;
    }

    answers.push({
      item: question.item,
      selectedCategory,
      correctCategory: question.category,
      categoryCorrect: selectedCategory === question.category,
      selectedAction,
      correctAction: question.action,
      actionCorrect: selectedAction === question.action,
      reason: question.reason,
      tip: question.tip,
      mediaTitle: question.mediaTitle,
    });
    renderFeedback(question, answers[answers.length - 1]);
  });

  gameContent.append(progressRow, form);
  gameStatus.textContent = "先選一個分類，再配一個生活小行動。";
}

function renderFeedback(question, answer) {
  gameContent.replaceChildren();

  const feedback = makeElement(
    "section",
    `game-feedback${answer.categoryCorrect && answer.actionCorrect ? " is-correct" : ""}`,
  );
  const headingText = answer.categoryCorrect && answer.actionCorrect
    ? "答得很棒，兩個配對都正確！"
    : "這題很容易讓人猶豫，一起看看提示。";
  feedback.appendChild(makeElement("h2", "", headingText));

  const categoryText = answer.categoryCorrect
    ? `分類選對了：${answer.correctCategory}。`
    : `你選了${answer.selectedCategory}，參考分類是${answer.correctCategory}。`;
  const actionText = answer.actionCorrect
    ? "減碳小行動也配對成功。"
    : `小行動可改配「${answer.correctAction}」。`;
  feedback.append(
    makeElement("p", "", categoryText),
    makeElement("p", "", actionText),
  );

  const explainCard = makeElement("section", "explain-card");
  explainCard.setAttribute("aria-label", `${question.mediaTitle}：分類說明與小撇步`);
  explainCard.appendChild(makeElement("span", "explain-icon", "♻"));
  const explainContent = makeElement("div");
  explainContent.append(
    makeElement("h3", "", question.mediaTitle),
    makeElement("p", "", question.reason),
    makeElement("p", "", `下次小撇步：${question.tip}`),
  );
  explainCard.appendChild(explainContent);

  const next = makeElement(
    "button",
    "game-primary",
    questionIndex === questions.length - 1 ? "看本輪成績" : "下一題",
  );
  next.type = "button";
  next.addEventListener("click", () => {
    questionIndex += 1;
    if (questionIndex < questions.length) renderQuestion();
    else renderResults();
  });

  gameContent.append(feedback, explainCard, next);
  gameStatus.textContent = "解說卡已更新，可以看完後繼續。";
}

function scoreTitle(score, total) {
  const ratio = score / total;
  if (ratio >= 0.9) return "分類減碳小達人";
  if (ratio >= 0.6) return "綠色生活好夥伴";
  return "永續探索新芽";
}

function sendResultToChat(result) {
  if (window.opener && !window.opener.closed) {
    window.opener.postMessage(
      { type: "green-sorting-game-result", result },
      window.location.origin,
    );
    gameStatus.textContent = "成績和錯題提示已送回聊天，可以切回綠芽看看。";
  } else {
    gameStatus.textContent = "本輪成績已整理完成；從聊天開啟遊戲即可把結果傳回綠芽。";
  }
}

function renderResults() {
  gameContent.replaceChildren();
  const score = answers.reduce(
    (sum, answer) => sum + Number(answer.categoryCorrect) + Number(answer.actionCorrect),
    0,
  );
  const total = questions.length * 2;
  const correctAnswers = answers.filter((answer) => answer.categoryCorrect && answer.actionCorrect);
  const wrongAnswers = answers.filter((answer) => !answer.categoryCorrect || !answer.actionCorrect);

  const title = makeElement("p", "question-label", "本輪挑戰完成");
  const heading = makeElement("h2", "question-title", "謝謝你一起練習分類與減碳");
  const scoreNumber = makeElement("p", "score-number", `${score} / ${total} 分`);
  const rank = makeElement("p", "score-title", scoreTitle(score, total));
  const summary = makeElement(
    "p",
    "question-detail",
    wrongAnswers.length
      ? `答對 ${correctAnswers.length} 題完整配對，容易混淆的題目也整理回聊天了。`
      : "分類和減碳配對都答對了，做得很好！",
  );
  const actionRow = makeElement("div", "game-actions");
  const retry = makeElement("button", "game-primary", "再玩一輪");
  retry.type = "button";
  retry.addEventListener("click", () => {
    answers = [];
    questionIndex = 0;
    renderQuestion();
  });
  const chatLink = makeElement("a", "game-secondary", "回到綠芽聊天");
  chatLink.href = "index.html";
  chatLink.classList.add("game-link-button");
  actionRow.append(retry, chatLink);
  gameContent.append(title, heading, scoreNumber, rank, summary);

  if (wrongAnswers.length) {
    const reviewHeading = makeElement("h3", "review-heading", "本輪小提醒");
    const reviewList = makeElement("ul", "score-list");
    wrongAnswers.forEach((answer) => {
      const item = makeElement(
        "li",
        "",
        `${answer.item}：${answer.categoryCorrect ? "分類答對" : `你選了${answer.selectedCategory}，參考分類是${answer.correctCategory}`}。${answer.tip}`,
      );
      reviewList.appendChild(item);
    });
    gameContent.append(reviewHeading, reviewList);
  }

  gameContent.appendChild(actionRow);
  sendResultToChat({
    score,
    total,
    correctAnswers,
    wrongAnswers,
    answers,
  });
}

document.querySelector(".game-eyebrow").textContent = isAdvanced
  ? "綠芽永續進階挑戰"
  : "綠芽永續小挑戰";

if (questions.length) {
  renderQuestion();
} else {
  gameContent.textContent = "找不到遊戲題庫，請回到聊天重新開啟挑戰。";
  gameStatus.textContent = "題庫資料未能載入。";
}
