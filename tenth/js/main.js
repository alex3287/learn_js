class Options {
  constructor (height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }

  createDiv() {
    let newDiv = document.createElement('div'),
    h = this.height,
    w = this.width,
    bg = this.bg,
    fs = this.fontSize,
    ta = this.textAlign,
    myText = prompt('Введите любой текст');
    newDiv.textContent = myText;
    newDiv.style.cssText = `height:${h}; width:${w}; background: ${bg}; font-size:${fs}; text-align:${ta}`;
    document.body.appendChild(newDiv);
  }
}

let test = new Options('100px','200px','green', '30px','center');
test.createDiv();