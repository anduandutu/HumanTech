import {
  Position,
  Toaster,
  ProgressBar,
  Intent,
  Classes,
} from "@blueprintjs/core";

/**
 * Simple, configurable toaster
 */
export const SimpleToaster = Toaster.create({
  position: Position.BOTTOM_RIGHT,
});

/**
 * Loading toaster with message
 * @param message The message to be displayed
 * @param toasterId A toaster id in case there is a need for updates
 * @returns Toaster Id
 */
export const LoadingToaster = (message: string, toasterId?: string) => {
  return SimpleToaster.show(
    {
      icon: "cloud-download",
      message: (
        <>
          {message}
          <ProgressBar intent={Intent.PRIMARY}></ProgressBar>
        </>
      ),
      timeout: 100000,
    },
    toasterId
  );
};

/**
 * Multiline loading Toaster
 * @param text Toster text
 * @param toasterId Toaster Id
 * @returns Toaster object
 */
export const LoadingToasterMultiline = (
  text: Array<string>,
  toasterId: string
) => {
  return SimpleToaster.show(
    {
      icon: "cloud-download",
      message: (
        <>
          {text.map((messageLine: string) => {
            return <p>{messageLine}</p>;
          })}
          <ProgressBar intent={Intent.PRIMARY}></ProgressBar>
        </>
      ),
      timeout: 100000,
    },
    toasterId
  );
};

/**
 * Progress bar, configurable with text and progress
 * @param text Loading Text
 * @param progress Progress Indicator
 * @param toasterId Toaster Id
 * @param timeout Toaster Timeout
 * @returns Toaster Object
 */
export const LoadingProgressToaster = (
  text: string,
  progress: number,
  toasterId?: string,
  timeout: number = 0
) => {
  return SimpleToaster.show(
    {
      icon: "cloud-download",
      message: (
        <>
          {text}
          <ProgressBar
            intent={progress < 100 ? Intent.PRIMARY : Intent.SUCCESS}
            value={progress / 100}
            className={
              progress < 100 ? Classes.PROGRESS_NO_STRIPES : Intent.SUCCESS
            }
          ></ProgressBar>
        </>
      ),
      timeout: timeout,
    },
    toasterId
  );
};
