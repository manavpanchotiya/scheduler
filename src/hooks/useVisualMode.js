import { useState } from "react";

export default function useVisualMode(initial){
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace) {
    setMode(newMode)
    setHistory(prev =>{
      if (replace){
        return [...prev.slice(0,-1), newMode];  
      }
      else {
        return [...prev, newMode];  
      }
    });
  }

  function back() {
    setHistory(prev => {
      if (prev.length > 1) {
        return prev.slice(0, prev.length - 1);
      }
      return prev;
    });
  }

  return { mode: history[history.length -1], transition, back };
}