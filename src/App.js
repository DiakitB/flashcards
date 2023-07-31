import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
    questionN: "1"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
    questionN: "2"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
    questionN: "3"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
    questionN: "4"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
    questionN: "5"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
    questionN: "6"
  }
];
function FlashCards() {
  const [selId, setId] = useState(null);
  const [text, setText] = useState("");
  function clickHandler(id) {
    setId(id);
  }
  function onChangeHandler(e) {
    e.preventDefault();

    const newText = { text: text };
    console.log(newText);
  }
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => clickHandler(question.id)}
          className={question.id === selId ? "selected" : {}}
        >
          <p>{question.id === selId ? question.answer : question.question}</p>
        </div>
      ))}
    </div>
  );
}