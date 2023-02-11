//load library
import * as SVG from './lib/svg.js'; // import all svg class
import * as Utility from './lib/utility.js'; //import savefile function

import inquirer from 'inquirer';
import rxjs from 'rxjs'; //Inquirer uses the JS reactive extension to handle events and async flows. Enable function  prompts.next (question[i])



//const inquirer = require('inquirer');
//const fs = require('fs');
//const path = require('path');
//const Rx = require('rxjs');

//const {Shape, Circle, Rectangle, Triangle, CharacterPrint, svgImage} = require('./lib/svg');



//define color keyword 
const colorKeywords = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];

//define color hexcode
const colorHexcode = ["#F0F8FF", "#FAEBD7", "#00FFFF", "#7FFFD4", "#F0FFFF", "#F5F5DC", "#FFE4C4", "#000000", "#FFEBCD", "#0000FF", "#8A2BE2", "#A52A2A", "#DEB887", "#5F9EA0", "#7FFF00", "#D2691E", "#FF7F50", "#6495ED", "#FFF8DC", "#DC143C", "#00FFFF", "#00008B", "#008B8B", "#B8860B", "#A9A9A9", "#A9A9A9", "#006400", "#BDB76B", "#8B008B", "#556B2F", "#FF8C00", "#9932CC", "#8B0000", "#E9967A", "#8FBC8F", "#483D8B", "#2F4F4F", "#2F4F4F", "#00CED1", "#9400D3", "#FF1493", "#00BFFF", "#696969", "#696969", "#1E90FF", "#B22222", "#FFFAF0", "#228B22", "#FF00FF", "#DCDCDC", "#F8F8FF", "#FFD700", "#DAA520", "#808080", "#808080", "#008000", "#ADFF2F", "#F0FFF0", "#FF69B4", "#CD5C5C", "#4B0082", "#FFFFF0", "#F0E68C", "#E6E6FA", "#FFF0F5", "#7CFC00", "#FFFACD", "#ADD8E6", "#F08080", "#E0FFFF", "#FAFAD2", "#D3D3D3", "#D3D3D3", "#90EE90", "#FFB6C1", "#FFA07A", "#20B2AA", "#87CEFA", "#778899", "#778899", "#B0C4DE", "#FFFFE0", "#00FF00", "#32CD32", "#FAF0E6", "#FF00FF", "#800000", "#66CDAA", "#0000CD", "#BA55D3", "#9370DB", "#3CB371", "#7B68EE", "#00FA9A", "#48D1CC", "#C71585", "#191970", "#F5FFFA", "#FFE4E1", "#FFE4B5", "#FFDEAD", "#000080", "#FDF5E6", "#808000", "#6B8E23", "#FFA500", "#FF4500", "#DA70D6", "#EEE8AA", "#98FB98", "#AFEEEE", "#DB7093", "#FFEFD5", "#FFDAB9", "#CD853F", "#FFC0CB", "#DDA0DD", "#B0E0E6", "#800080", "#663399", "#FF0000", "#BC8F8F", "#4169E1", "#8B4513", "#FA8072", "#F4A460", "#2E8B57", "#FFF5EE", "#A0522D", "#C0C0C0", "#87CEEB", "#6A5ACD", "#708090", "#708090", "#FFFAFA", "#00FF7F", "#4682B4", "#D2B48C", "#008080", "#D8BFD8", "#FF6347", "#40E0D0", "#EE82EE", "#F5DEB3", "#FFFFFF", "#F5F5F5", "#FFFF00", "#9ACD32"];




let shapeColorCode = "";
let shapeColorUseConfirm = false;

let fontColorCode = "";
let fontColorUseConfirm = false;


//define questions
//questions declare in particular order has a purpose, make sure the sequence of question array is not moved
let question = [];

question[0] = {
    type: 'list',
    message: 'Select a shape',
    choices: ['Circle', 'Rectangle', 'Triangle'],
    name: 'shape',
};


question[2] = {
    type: 'input',
    message: 'This is the color code you have chosen. Make change if necessary',
    name: 'shapeColorUse',
    default: shapeColorCode,

    validate: function (input) {
        if (!shapeColorUseConfirm) {
        
            shapeColorUseConfirm = true;
            return "Press ENTER to confirm.";
        }

        return true;
    }
};


question[1] = {
    type: 'list',
    message: 'Select shape color',
    choices: colorKeywords,
    name: 'shapeColorPicked',
    filter: function (input) {

        let arrayKey = colorKeywords.findIndex(element => element == input);
        shapeColorCode = colorHexcode[arrayKey];


        question[2].default = shapeColorCode;


        return shapeColorCode;
    }
};


question[3] = {
    type: 'input',
    message: 'Enter any characters (Max 3 characters)',
    name: 'characters',

    validate: function (input) {
        
        if (input.length == 0)
        {
            return "Must enter at least one character.";
        }
        if (input.length > 3) {
    
            return "The input exceed the max length of characters. Please enter up to 3 character only.";
        }

        return true;
    }
};


question[5] = {
    type: 'input',
    message: 'Is the color code you have chosen for your font? Make change if necessary',
    name: 'fontColorUse',
    default: shapeColorCode,

    validate: function (input) {
        if (!fontColorUseConfirm) {
        
            fontColorUseConfirm = true;
            return "Press ENTER to confirm.";
        }

        return true;
    }
};


question[4] = {
    type: 'list',
    message: 'Select Font color',
    choices: colorKeywords,
    name: 'fontColorPicked',
    filter: function (input) {

        let arrayKey = colorKeywords.findIndex(element => element == input);
        fontColorCode = colorHexcode[arrayKey];

        question[5].default = fontColorCode;

        return fontColorCode;
    }
};





const prompts = new rxjs.Subject();
inquirer
.prompt(prompts)
.then((answers) => {
    //after questions are answered
    
    //console.log (answers);

    var thisShape, shapeElement, shapeElement;
    var thisText, textElement;
    var svgCanvas, svgImage;


    //Create shape objects and render svg element
    if (answers.shape == "Circle")
    {
        thisShape = new SVG.Circle (answers.shapeColorUse, 150, 100, 80);
        shapeElement = thisShape.render ();

        thisText = new SVG.textPrint (answers.characters, answers.fontColorUse, "Arial", "60", "150", "125");
        textElement = thisText.render ();  
    }
    else if (answers.shape == "Rectangle")
    {
        thisShape = new SVG.Rectangle (answers.shapeColorUse, 10, 10, 300, 200);
        shapeElement = thisShape.render ();

        thisText = new SVG.textPrint (answers.characters, answers.fontColorUse, "Arial", "60", "150", "125");
        textElement = thisText.render ();  
    }
    else if (answers.shape == "Triangle")
    {
        thisShape = new SVG.Triangle (answers.shapeColorUse, "150, 18 244, 182 56, 182");
        shapeElement = thisShape.render ();
        
        thisText = new SVG.textPrint (answers.characters, answers.fontColorUse, "Arial", "60", "150", "145");
        textElement = thisText.render ();  
    }
  
    //create svg canvas
    svgCanvas = new SVG.svgCanvas (shapeElement, textElement, 300, 200);
    svgImage = svgCanvas.render ();  

    console.log ("\n\n-----SVG-------------------------------------------\n\n" + svgImage + "\n\n---------------------------------------------------\n\n");

    //save svg file
    Utility.saveFile (svgImage, answers.shape + "-");

});


// loop through questions
for (let i = 0; i < question.length; i++)
{
    prompts.next (question[i]);
}


// execute when all the questions has been completed
prompts.complete();



