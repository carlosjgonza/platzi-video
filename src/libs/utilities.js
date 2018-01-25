export const leftPad = n => {
  const pad = '00';
  return pad.substring(0, pad.length - n.length) + n;
}

export const formatTime = secs => {
  const minutes = ~~(secs / 60);
  const seconds = ~~(secs % 60);
  return `${leftPad(minutes.toString())}:${leftPad(seconds.toString())}`
}