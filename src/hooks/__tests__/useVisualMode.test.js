import { renderHook } from "@testing-library/react";
import useVisualMode from "../useVisualMode";

const FIRST = "FIRST";

test("useVisualMode initializes with the initial mode", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));
  expect(result.current.mode).toBe(FIRST);
});
