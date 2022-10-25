let srt = 'heeey';
type X = typeof srt;

export function average(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0);

  return sum / nums.length;
}
type Fn = typeof average; // type fn = (...nums: number[]) => number

const max: Fn = (...numbers) => Math.max(...numbers);
max(4, 5, 6);

type returnFn = ReturnType<typeof average>; // number
