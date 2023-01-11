import { refs } from "./refs.js";

export const deadline = "2023-01-13";
export function getTimeRemaning(endtime) {
  const idTimer = setInterval(() => {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const timeEnd = convertMs(t);
    if (t < 0) {
      renderTimePromo({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }
    renderTimePromo(timeEnd);
    stopTimer(timeEnd, idTimer);
  }, 1000);
}

export function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

export function renderTimePromo(timeEnd) {
  refs.days.textContent = `${pinTheNumbers(timeEnd.days)}`;
  refs.hours.textContent = `${pinTheNumbers(timeEnd.hours)}`;
  refs.minutes.textContent = `${pinTheNumbers(timeEnd.minutes)}`;
  refs.seconds.textContent = `${pinTheNumbers(timeEnd.seconds)}`;
}

export function pinTheNumbers(str) {
  return String(str).padStart(2, "0");
}
export function stopTimer({ days, hours, minutes, seconds }, idTimer) {
  if (!days && !hours && !minutes && !seconds) {
    clearInterval(idTimer);
  }
}
