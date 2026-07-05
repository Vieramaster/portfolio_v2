const scheduleWhenIdle = (run: () => void): void => {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(run, { timeout: 4_000 });
  } else {
    setTimeout(run, 200);
  }
};

const loadGridAnimation = (): void => {
  void import("./background-animation/body-grid-animation").then(
    ({ bodyGridAnimation }) => bodyGridAnimation(),
  );
};

export const initClient = (): void => {
  if (document.readyState === "complete") {
    scheduleWhenIdle(loadGridAnimation);
    return;
  }

  window.addEventListener("load", () => scheduleWhenIdle(loadGridAnimation), {
    once: true,
  });
};
