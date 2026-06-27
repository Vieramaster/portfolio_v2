const scheduleIdle = (run: () => void): void => {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(run, { timeout: 2000 });
  } else {
    setTimeout(run, 1);
  }
};

export const initClient = (): void => {
  void import("@/features/projects/logic/slider").then(({ projectsSlider }) =>
    projectsSlider(),
  );

  scheduleIdle(() => {
    void import("./background-animation/body-grid-animation").then(
      ({ bodyGridAnimation }) => bodyGridAnimation(),
    );
  });
};
