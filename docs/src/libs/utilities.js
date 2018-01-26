export const leftPad = n => {
  const pad = '00';
  return pad.substring(0, pad.length - n.length) + n;
}

export const formatTime = secs => {
  const minutes = ~~(secs / 60);
  const seconds = ~~(secs % 60);
  return `${leftPad(minutes.toString())}:${leftPad(seconds.toString())}`
}

export const isFullScreen = () => {
  return document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen;
}

export const requestFullScreen = (element) => {
  try{ element.requestFullscreen()        } catch(e){
  try{ element.webkitRequestFullscreen()  } catch(e){
  try{ element.mozRequestFullScreen()     } catch(e){
  try{ element.msRequestFullscreen()      } catch(e){
    console.log(e)
  }}}}
}

export const exitFullScreen = () => {
  try { document.exitFullscreen()       } catch(e){
  try { document.webkitExitFullscreen() } catch(e){
  try { document.mozCancelFullScreen()  } catch(e){
  try { document.msExitFullscreen()     } catch(e){
    console.log(e)
  }}}}
}