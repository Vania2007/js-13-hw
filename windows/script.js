function openCar(name, width, height){
  let leftpos = (screen.width - width) / 2;
  let toppos = (screen.height - height) / 2;
  window.open(
    `${name}.html`,
    `${name}`,
    `width=${width},height=${height}, left=${leftpos}, top=${toppos}`
  );
}
function closePict() {
  window.close();
}
