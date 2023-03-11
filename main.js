// --------------License:----------
// MIT License

// Copyright (c) 2023 H.Mohamed

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// -------------------------------

// This Code is a part of the SuperCode.Js Library/
// SD.Js is made by H.Mohamed

// element selecting section
const idElemSelect = (element) => document.getElementById(element);
const classElemSelect = (element) => document.getElementsByClassName(element);
const tagElemSelect = (element) => document.getElementsByTagName(element);
const elemSelect = (element) => document.querySelector(element);
const elemSelectall = (element) => document.querySelectorAll(element);

const createElem = (elementHtml) => document.createElement(elementHtml);
const removeElem = (element) => element.remove();

const setHtml = (element, html) => element.innerHTML = html;
const setText = (element, text) => element.innerText = text;
const setClass = (element, newClass) => setAttrib(element, "class", newClass);
const setId = (element, newId) => setAttrib(element, "id", newId);
const setHref = (element, newHref) => setAttrib(element, "href", newHref);
const setSrc = (element, newSrc) => setAttrib(element, "src", newSrc);
const setTitle = (element, newTitle) => setAttrib(element, "title", newTitle);

const setAttrib = (element, attributeType, attributeData) => element.setAttribute(attributeType, attributeData);
const removeAttrib = (element, attribute) => element.removeAttribute(attribute);

// events section
const eventChecker= (element, EventType, Function) => element.addEventListener(EventType, Function);
const eventBreaker= (element, EventType, Function) => element.removeEventListener(EventType, Function);

// Styling:
const setStyle = (element, styles) => {
  for (let style in styles) {
    element.style[style] = styles[style];
  }
};
// Colors & Backgrounds:
const bgColor = (element, color) => element.style.backgroundColor = color;
const backgoundColor = (element, color) => element.style.backgroundColor = color;
const bg = (element, background) => element.style.background = background;
const background = (element, background) => element.style.background = background;
const textColor = (element, color) => element.style.color = color;
// Fonts:
const font = (element, value) => element.style.font = value;
const fontSize = (element, value) => element.style.fontSize = value;
// Display and Alignment:
const display = (element) => element.style.display = "block";
const alignRight = (element, value) => element.style.right = value;
const alignLeft = (element, value) => element.style.left = value;
const alignTop = (element, value) => element.style.top = value;
const alignBottom = (element, value) => element.style.bottom = value;
const textAlign = (element, value) => element.style.textAlign = value;
const verticalAlign = (element, value) => element.style.verticalAlign = value;
// Possitioning And Transitions:
const position = (element,value) => element.style.position = value;
const float = (element, value) => element.style.float = value;
const resize = (element,value) => element.style.resize = value;
// Margin:
const margin = (element,value) => element.style.margin = value;
const marginTop = (element, value) => element.style.marginTop = value;
const marginBottom = (element, value) => element.style.marginBottom = value;
const marginRight = (element, value) => element.style.marginRight = value;
const marginLeft = (element, value) => element.style.marginLeft = value;
// Padding:
const padding = (element,value) => element.style.padding = value;
const paddingTop = (element, value) => element.style.paddingTop = value;
const paddingBottom = (element, value) => element.style.paddingBottom = value;
const paddingRight = (element, value) => element.style.paddingRight = value;
const paddingLeft = (element, value) => element.style.paddingLeft = value;
// Transitions & Transforms:
const transition = (element,value) => element.style.transition = value;
const transitionProperty = (element,value) => element.style.transitionProperty = value;
const transitionDuration = (element,value) => element.style.transitionDuration = value;
const transitionDelay = (element,value) => element.style.transitionDelay = value;
const transform = (element,value) => element.style.transform = value;
// The Styles I couldnt orginize in some catigories ,sorry:(
const visibility = (element, value) => element.style.visibility = value;
const opacity = (element, value) => element.style.opacity = value;
const cursor = (element, value) => element.style.cursor = value;
const filter = (element, value) => element.style.filter = value;
const outline = (element, value) => element.style.outline = value;
const userSelect = (element, value) => element.style.userSelect = value;

// Testing:
console.log(window.navigator)