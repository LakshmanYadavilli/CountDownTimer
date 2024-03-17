export const find = (
  diff,
  setData,
  setError,
  setIsRunning,
  btnEle,
  setCompleted
) => {
  let current = diff.current;

  const days = Math.floor(current / (1000 * 60 * 60 * 24));
  if (days >= 100) setError("Selected time is more than 100 days");
  else {
    setIsRunning(true);
    //   console.log({ days });
    current = Math.floor(current % (1000 * 60 * 60 * 24));
    const hours = Math.floor(current / (1000 * 3600));
    //   console.log({ hours });
    current = Math.floor(current % (1000 * 3600));
    const minutes = Math.floor(current / (1000 * 60));
    //   console.log({ minutes });
    current = Math.floor(current % (1000 * 60));
    const seconds = Math.floor(current / 1000);
    if (hours === 0 && minutes === 0 && days === 0 && seconds === 0) {
      console.log("successfully");
      btnEle.current.click();
      setCompleted(true);
    } else {
      setData({ days, hours, minutes, seconds });
    }
  }
};
