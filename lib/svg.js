class svgCanvas {
    constructor (shapeElement, textElement, width = 300, height = 200) {
        this.width = width;
        this.height = height;
        this.shapeElement = shapeElement;
        this.textElement = textElement;
    }

    render() {
        return `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
${this.shapeElement}
${this.textElement}
</svg>`;
    }
}


class Shape {
    constructor (type, fillColor) {
        this.type = type;
        this.fillColor = fillColor;
    }
}


class Circle extends Shape{
    constructor (fillColor = "green", cx = 150, cy = 100, radius = 80, stroke = "black", strokeWidth = 1) {
        super ("Circle", fillColor);
        this.cx = cx;
        this.cy = cy;
        this.r = radius;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
    }

    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" fill="${this.fillColor}" />`;
    }
}
  

class Rectangle extends Shape{
    constructor (fillColor = "green", x = 10, y = 10, width = 300, height = 200, stroke = "black", strokeWidth = 1) {
        super ("Rectangle", fillColor);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
    }

    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" fill="${this.fillColor}" />`;
    }
}

//points to form a perfect triangle 0,0 50,0 25.0,43.3
//150, 18 244, 182 56, 182
class Triangle extends Shape{
    constructor (fillColor = "green", points = "150, 18 244, 182 56, 182", stroke = "black", strokeWidth = 1) {
        super ("Triangle", fillColor);
        this.points = points;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
    }
  
    render() {
        return `<polygon points="${this.points}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" fill="${this.fillColor}" />`;
    }
}

class textPrint {
    constructor (text, fontColor = "white", fontFamily = "Arial", fontSize = 60, x = 150, y = 125, stroke = "black", strokeWidth = 1) {
        this.text = text;
        this.fontColor = fontColor;
        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
        this.x = x;
        this.y = y;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
    }

    render() {
        return `<text x="${this.x}" y="${this.y}" font-size="${this.fontSize}" font-family="${this.fontFamily}" text-anchor="middle" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" fill="${this.fontColor}">${this.text}</text>`;
    }
}



export {Shape, Circle, Rectangle, Triangle, textPrint, svgCanvas};


