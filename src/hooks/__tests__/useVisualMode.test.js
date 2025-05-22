import { renderHook } from "@testing-library/react";
import useVisualMode from "../useVisualMode";
import { act } from "react";

const FIRST = "FIRST";
const SECOND = "SECOND";

test("useVisualMode initializes with the initial mode", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  act(() => result.current.transition(SECOND));
  expect(result.current.mode).toBe(SECOND);
});
