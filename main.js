// This Code is a part of the SuperCode.Js Library/
// SD.Js is made by H.Mohamed
// Copyright (c) 2023 H.Mohamed
// -----------------------------------------------------------
// * Element Selecting:
const idElemSelect = (element) => document.getElementById(element);
const classElemSelect = (element) => document.getElementsByClassName(element);
const tagElemSelect = (element) => document.getElementsByTagName(element);
const elemSelect = (element) => document.querySelector(element);
const elemSelectall = (element) => document.querySelectorAll(element);

const idElementSelect = (element) => document.getElementById(element);
const classElementSelect = (element) => document.getElementsByClassName(element);
const tagElementSelect = (element) => document.getElementsByTagName(element);
const elementSelect = (element) => document.querySelector(element);
const elementSelectall = (element) => document.querySelectorAll(element);
// * Creating Elements:
const createElem = (elementHtml) => document.createElement(elementHtml);
const removeElem = (element) => element.remove();
const createElement = (elementHtml) => document.createElement(elementHtml);
const removeElement = (element) => element.remove();
// * Attributes:
const getAttrib = (element, attributeType) => element.hasAttribute(attributeType);
const setAttrib = (element, attributeType, attributeData) => element.setAttribute(attributeType, attributeData);
const removeAttrib = (element, attribute) => element.removeAttribute(attribute);
const getAttribibute = (element, attributeType) => element.hasAttribute(attributeType);
const setAttribibute = (element, attributeType, attributeData) => element.setAttribute(attributeType, attributeData);
const removeAttribute = (element, attribute) => element.removeAttribute(attribute);
const setHtml = (element, html) => element.innerHTML = html;
const setText = (element, text) => element.innerText = text;
const setClass = (element, newClass) =>element.classList.add(newClass);
const addClass = (element, newClass) =>element.classList.add(newClass);
const classListAdd = (element, newClass) =>element.classList.add(newClass);
const setId = (element, newId) => setAttrib(element, "id", newId);
const setHref = (element, newHref) => setAttrib(element, "href", newHref);
const setSrc = (element, newSrc) => setAttrib(element, "src", newSrc);
const setTitle = (element, newTitle) => setAttrib(element, "title", newTitle);
const getHtml = (element) => element.innerHTML;
const getText = (element) => element.innerText;
const getClass = (element) =>element.classList;
const getId = (element) => element.id;
const getHref = (element) => getAttrib(element, "href");
const getSrc = (element) => getAttrib(element, "src");
const getTitle = (element) => getAttrib(element, "title");
// * Events section
const eventChecker = (element, EventType, Function) => element.addEventListener(EventType, Function);
const eventBreaker = (element, EventType, Function) => element.removeEventListener(EventType, Function);
// * Element Functions
const focus = (element) => element.focus();
const blur = (element) => element.blur();
const click = (element) => element.click();
const clientHeight = () =>element.clientHeight;
const clientWidth = () =>element.clientWidth;
const clientTop = () =>element.clientTop;
const clientLeft = () =>element.clientLeft;
const offsetHeight = () =>element.offsetHeight;
const offsetWidth = () =>element.offsetWidth;
const offsetTop = () =>element.offsetTop;
const offsetLeft = () =>element.offsetLeft;
const offsetParent = () =>element.offsetParent;
// * Styling:
const setStyle = (element, styles) => {
  for (let style in styles) {
    element.style[style] = styles[style];
  }
};
// * Display and Alignment:
const display = (element,value) => element.style.display = value;
const verticalAlign = (element, value) => element.style.verticalAlign = value;
const alignItems = (element, value) => element.style.alignItems = value;
const alignSelf = (element, value) => element.style.alignSelf = value;
const alignContent = (element, value) => element.style.alignContent = value;
// * Possitioning And Sizing:
const position = (element,value) => element.style.position = value;
const float = (element, value) => element.style.float = value;
const top = (element, value) => element.style.top = value;
const bottom = (element, value) => element.style.bottom = value;
const left = (element, value) => element.style.left = value;
const right = (element, value) => element.style.right = value;
const height = (element, value) => element.style.height = value;
const maxHeight = (element, value) => element.style.maxHeight = value;
const minHeight = (element, value) => element.style.minHeight = value;
const weight = (element, value) => element.style.weight = value;
const maxWeight = (element, value) => element.style.maxWeight = value;
const minWeight = (element, value) => element.style.minWeight = value;
// * Colors & Backgrounds:
const bgColor = (element, value) => element.style.backgroundColor = value;
const backgoundColor = (element, value) => element.style.backgroundColor = value;
const bg = (element, round) => element.style.background = value;
const background = (element, round) => element.style.background = value;
const textColor = (element, value) => element.style.color = value;
const bgAttachment = (element, value) => element.style.backgroundAttachment = value;
const backgroundAttachment = (element, value) => element.style.backgroundAttachment = value;
const bgImage = (element, value) => element.style.backgroundImage = value;
const backgroundImage = (element, value) => element.style.backgroundImage = value;
const bgPosition = (element, value) => element.style.backgroundImage = value;
const backgroundPosition = (element, value) => element.style.backgroundImage = value;
const bgRepeat = (element, value) => element.style.backgroundRepeat = value;
const backgroundRepeat = (element, value) => element.style.backgroundRepeat = value;
const bgClip = (element, value) => element.style.backgroundClip = value;
const backgroundClip = (element, value) => element.style.backgroundClip = value;
const bgOrigin = (element, value) => element.style.backgroundClip = value;
const backgroundOrigin = (element, value) => element.style.backgroundClip = value;
const bgSize = (element, value) => element.style.backgroundClip = value;
const backgroundSize = (element, value) => element.style.backgroundClip = value;
const opacity = (element, value) => element.style.opacity = value;
const filter = (element, value) => element.style.filter = value;
// * Fonts and Text:
const font = (element, value) => element.style.font = value;
const fontSize = (element, value) => element.style.fontSize = value;
const fontFamily = (element, value) => element.style.fontFamily = value;
const fontStyle = (element, value) => element.style.fontStyle = value;
const fontWeight = (element, value) => element.style.fontWeight = value;
const fontSizeAdjust = (element, value) => element.style.fontSizeAdjust = value;
const letterSpacing = (element, value) => element.style.letterSpacing = value;
const letterHeight = (element, value) => element.style.letterHeight = value;
const textAlign = (element, value) => element.style.textAlign = value;
const textAlignLast = (element, value) => element.style.textAlignLast = value;
const textDecoration = (element, value) => element.style.textDecoration = value;
const textDecorationColor = (element, value) => element.style.textDecorationColor = value;
const textDecorationLine = (element, value) => element.style.textDecorationLine = value;
const textDecorationStyle = (element, value) => element.style.textDecorationStyle = value;
const textIndent = (element, value) => element.style.textIndent = value;
const textJustify = (element, value) => element.style.textJustify = value;
const textOverflow = (element, value) => element.style.textOverflow = value;
const textShadow = (element, value) => element.style.textShadow = value;
const textTransform = (element, value) => element.style.textTransform = value;
const wordBreak = (element, value) => element.style.wordBreak = value;
const wordSpacing = (element, value) => element.style.wordSpacing = value;
const wordWrap = (element, value) => element.style.wordWrap = value;
// * Borders:
const border = (element, value) => element.style.border = value;
const borderColor = (element, value) => element.style.borderColor = value;
const borderRadius = (element, value) => element.style.borderRadius = value;
const borderStyle = (element, value) => element.style.borderStyle = value;
const borderSpacing = (element, value) => element.style.borderStyle = value;
const borderCollapse = (element, value) => element.style.borderColapse = value;
const borderWidth = (element, value) => element.style.borderWidth = value;
const borderImage= (element, value) => element.style.borderImage = value;
const WebkitBorderImage= (element, value) => element.style.WebkitBorderImage = value;
const OBorderImage= (element, value) => element.style.OBorderImage = value;
const borderImageSource= (element, value) => element.style.borderImageSource = value;
const borderImageWidth= (element, value) => element.style.borderImageWidth = value;
const borderImageRepeat= (element, value) => element.style.borderImageRepeat = value;
// * Bottom Borders:
const borderBottom = (element, value) => element.style.borderBottom = value;
const borderBottomColor = (element, value) => element.style.borderBottomColor = value;
const borderBottomStyle = (element, value) => element.style.borderBottomStyle = value;
const borderBottomWidth = (element, value) => element.style.borderBottomWidth = value;
const borderBottomLeftRadius = (element, value) => element.style.borderBottomLeftRadius = value;
const borderBottomRightRadius = (element, value) => element.style.borderBottomRightRadius = value;
// * Top Borders:
const borderTop = (element, value) => element.style.borderTop = value;
const borderTopColor = (element, value) => element.style.borderTopColor = value;
const borderTopStyle = (element, value) => element.style.borderTopStyle = value;
const borderTopWidth = (element, value) => element.style.borderTopWidth = value;
const borderTopLeftRadius = (element, value) => element.style.borderTopLeftRadius = value;
const borderTopRightRadius = (element, value) => element.style.borderTopRightRadius = value;
// * Right Borders:
const borderRight = (element, value) => element.style.borderRight = value;
const borderRightColor = (element, value) => element.style.borderRightColor = value;
const borderRightStyle = (element, value) => element.style.borderRightStyle = value;
const borderRightWidth = (element, value) => element.style.borderRightWidth = value;
// * Left Borders:
const borderLeft = (element, value) => element.style.borderLeft = value;
const borderLeftColor = (element, value) => element.style.borderLeftColor = value;
const borderLeftStyle = (element, value) => element.style.borderLeftStyle = value;
const borderLeftWidth = (element, value) => element.style.borderLeftWidth = value;
// * Outlines:
const outline = (element, value) => element.style.outline = value;
const outlineColor = (element, value) => element.style.outlineColor = value;
const outlineOffset = (element, value) => element.style.outlineOffset = value;
const outlineStyle = (element, value) => element.style.outlineStyle = value;
const outlineWidth = (element, value) => element.style.outlineWidth = value;
// * Margin:
const margin = (element,value) => element.style.margin = value;
const marginTop = (element, value) => element.style.marginTop = value;
const marginBottom = (element, value) => element.style.marginBottom = value;
const marginRight = (element, value) => element.style.marginRight = value;
const marginLeft = (element, value) => element.style.marginLeft = value;
// * Padding:
const padding = (element,value) => element.style.padding = value;
const paddingTop = (element, value) => element.style.paddingTop = value;
const paddingBottom = (element, value) => element.style.paddingBottom = value;
const paddingRight = (element, value) => element.style.paddingRight = value;
const paddingLeft = (element, value) => element.style.paddingLeft = value;
// * Transitions & Transforms:
const transition = (element,value) => element.style.transition = value;
const transitionProperty = (element,value) => element.style.transitionProperty = value;
const transitionDuration = (element,value) => element.style.transitionDuration = value;
const transitionDelay = (element,value) => element.style.transitionDelay = value;
const transitionTimingFunction = (element,value) => element.style.transitionTimingFunction = value;
const transform = (element,value) => element.style.transform = value;
// * Columns:
const columns = (element,value) => element.style.columns = value;
const columnCount = (element,value) => element.style.columnCount = value;
const columnFill = (element,value) => element.style.columnFill = value;
const columnGap = (element,value) => element.style.columnGap = value;
const columnRule = (element,value) => element.style.columnRule = value;
const columnRuleColor = (element,value) => element.style.columnRuleColor = value;
const columnRuleStyle = (element,value) => element.style.columnRuleStyle = value;
const columnRuleWidth = (element,value) => element.style.columnRuleWidth = value;
const columnSpan = (element,value) => element.style.columnSpan = value;
const columnWidth = (element,value) => element.style.columnWidth = value;
// * Flex:
const flex = (element,value) => element.style.flex = value;
const flexBasis = (element,value) => element.style.flexBasis = value;
const flexDirection = (element,value) => element.style.flexDirection = value;
const flexFlow = (element,value) => element.style.flexFlow = value;
const flexGrow = (element,value) => element.style.flexGrow = value;
const flexShrink = (element,value) => element.style.flexShrink = value;
const flexWrap = (element,value) => element.style.flexWrap = value;
// * Animations:
const animation = (element,value) => element.style.animation = value;
const animationDelay = (element,value) => element.style.animationDelay = value;
const animationDirection = (element,value) => element.style.animationDirection = value;
const animationDuration = (element,value) => element.style.animationDuration = value;
const animationFillMode = (element,value) => element.style.animationFillMode = value;
const animationIterationCount = (element,value) => element.style.animationIterationCount = value;
const animationName = (element,value) => element.style.animationName = value;
const animationTimingFunction = (element,value) => element.style.animationTimingFunction = value;
const animationPlayState = (element,value) => element.style.animationPlayState = value;
// * Overflow:
const overflow = (element,value) => element.style.overflow = value;
const overflowX = (element,value) => element.style.overflowX = value;
const overflowY = (element,value) => element.style.overflowY = value;
// * The Styles I couldnt orginize in some catigories ,sorry:(
const visibility = (element, value) => element.style.visibility = value;
const cursor = (element, value) => element.style.cursor = value;
const userSelect = (element, value) => element.style.userSelect = value;
const resize = (element,value) => element.style.resize = value; 
// ! note that "resize()" does not resize an element check the behaivior: https://www.w3schools.com/jsref/prop_style_resize.asp
const boxShadow = (element,value) => element.style.boxShadow = value;
const boxSizing = (element,value) => element.style.boxSizing = value;
// * Styling Functions
const RGB=(red,green,blue)=>{return`rgb(${red},${green},${blue})`}
const RGBA=(red,green,blue,a)=>{return`rgba(${red},${green},${blue},${a})`}
const linearGradient=(direction="to bottom",color)=>{
  var result=`linear-gradient(${direction},`
  for (let coloor in color) {
    result+=`${color[coloor]},`
  }
  return result + ")"
}
//? Please check this code and send me some feedback if it works and some ideas to make it better