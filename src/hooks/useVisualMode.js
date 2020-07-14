import { useState } from "react";

export default function useVisualMode(initial) {
  //cycle through mode
  //render the appointment child
  //transition function allows us to advance to any other mode
  //back returns to the previous state

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  
  function transition(mode, replace = false) {
    if (replace) {
      //Pop wouldn't work and neither does unshift, but slice allows you to offset from the end of a sequence using negative, hence the -1
      const newHistory = history.slice(0, -1);
      newHistory.push(mode);
      setMode(mode);
      setHistory(newHistory);
    } else {
      setMode(mode);
      setHistory([...history, mode]);
    };
  };
  function back() {
    if (history.length > 1) {
      setMode(history[history.length - 2]);
      setHistory(history.slice(0, -1));
    } else {
      setHistory(history);
    }
  };
  return { mode, transition, back};
}