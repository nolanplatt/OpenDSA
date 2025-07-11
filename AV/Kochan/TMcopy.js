// Title: Turing Machine to Copy a String
// Author: Ko Chan; Mostafa Mohammed; Cliff Shaffer
// Institution: Virginia Tech
// Features: Algorithm Visualization; Code Tracing Visualization
// Keyword: Turing Machine
// Natural Language: en
// Programming Language: N/A
/* Description: Slideshow presenting the execution of a Turing machine that copies a string. */

$(document).ready(function() {
  "use strict";
  var av = new JSAV("TMcopy");
  var xleft = 250;
  var ytop = 25;

  //Slide 1
  av.umsg("In this slideshow, we will see how a copy machine processes input string 'ab'.<br>" +
          "The following machine is a copy machine that can transform #w# into #w#w#:<br>" +
          "(Note: w represents the input string ('ab' in this case).)");

  var r = av.label("$R$", {top: 10 + ytop, left: xleft + 120});
  // var h1 = av.label("$\\# R^{2}_{\\#} \\sigma L^{2}_{\\#} \\sigma$", {top: 10 + ytop, left: xleft + 200});
  var h1 = av.label("$\\#$", {top: 10 + ytop, left: xleft + 200});
  var r2 = av.label("$R^{2}_{\\#}$", {top: 10 + ytop, left: xleft+213});
  var s1 = av.label("$\\sigma$", {top: 10 + ytop, left: xleft+233});
  var l2 = av.label("$L^{2}_{\\#}$", {top: 10 + ytop, left: xleft+243});
  var s2 = av.label("$\\sigma$", {top: 10 + ytop, left: xleft+261});
  var r3 = av.label("$R_{\\#}$", {top: 90 + ytop, left: xleft + 115});
  var ol =av.label("$\\overline{\\#}$", {top: -5 + ytop, left: xleft + 160});
  var h2 = av.label("$\\#$", {top: 45 + ytop, left: xleft + 105});
  var l = av.label("$>L_{\\#}$", {top: 10 + ytop, left: xleft + 20});
  // Vertical arrow
  av.g.line(125 + xleft, 50 + ytop, 125 + xleft, 100 + ytop,
            {"stroke-width": 2, "arrow-end":"classic-wide-long"});
  // Horizontal arrow
  av.g.line(140 + xleft, 35 + ytop, 195 + xleft, 35 + ytop,
            {"stroke-width": 2, "arrow-end":"classic-wide-long"});
  // Horizontal arrow
  av.g.line(60 + xleft, 35 + ytop, 115 + xleft, 35 + ytop,
            {"stroke-width": 2, "arrow-end":"classic-wide-long"});
  av.g.polyline([[xleft + 275, 35 + ytop], [xleft + 295, 35 + ytop],
                 [xleft + 295, 0 + ytop], [xleft + 125, 0 + ytop],
                 [xleft + 125, 25 + ytop]],
                {"stroke-width": 2, "arrow-end":"classic-wide-long"});
  av.displayInit();

  // Slide 2
  av.umsg("Let's make a tape to keep track of the copy machine. The highlighted cell is the head.");
  var tape = av.ds.tape(["#", "a", "b", "#", "#", "#", "#"], 300, 200, "both", 3);
  av.step();

  // Slide 3
  l.css({'color':'red'});
  av.umsg("We start from the $>L_{\\#}$. $L_{\\#}$ means going to the closest space (denoted by #) " +
          "on the left, from the head.");
  tape.highlightPosition("0");
  av.step();

  // Slide 4
  l.css({'color':'black'});
  r.css({'color':'red'});
  av.umsg("The $R$ in red means moving from the current tape cell to the right cell.");
  tape.highlightPosition(1);
  av.step();

  // Slide 5
  r.css({'color':'black'});
  ol.css({'color': 'red'});
  h1.css({'color': 'red'});
  av.umsg("Is the current tape cell a space (i.e. #)?<br>" +
          "No, the current tape cell is an 'a', so we follow the $\\overline{\\#}$ direction to go to the # state. <BR>" +
          "Then, erase the value 'a' by making the cell empty (denoted by #).");
  tape.arr.value(1, "#");
  av.step();

  // Slide 6
  ol.css({'color': 'black'});
  h1.css({'color': 'black'});
  r2.css({'color': 'red'});
  av.umsg("$R^{2}_{\\#}$: Go to the second space(#) on the right.");
  tape.highlightPosition(3);
  tape.moveRight();
  av.step();

  // Slide 7
  r2.css({'color': 'black'});
  s1.css({'color': 'red'});
  av.umsg("Sigma($\\sigma$): Write the letter we just read to the current tape cell. " +
          "<br> We just read 'a', so we need write 'a' to the cell.");
  tape.arr.value(4, "a");
  av.step();

  //Slide 8
  s1.css({'color': 'black'});
  l2.css({'color': 'red'});
  av.umsg("$L^{2}_{\\#}$: Go to the second space(#) on the left.");
  tape.highlightPosition(3);
  tape.highlightPosition(1);
  av.step();

  //Slide 9
  l2.css({'color': 'black'});
  s2.css({'color': 'red'});
  av.umsg("Sigma($\\sigma$): Write the letter we just read to the current tape cell. <br>" +
          " We just read 'a', so we need write 'a' to the cell.");
  tape.current = 1;
  tape.arr.value(1, 'a');
  tape.highlightCurrent();
  av.step();

  //Slide 10
  r.css({'color':'red'});
  s2.css({'color': 'black'});
  av.umsg("The $R$ in red means moving from the current tape cell to the right cell.");
  tape.moveRight();
  av.step();

  //Slide 11
  r.css({'color':'black'});
  ol.css({'color': 'red'});
  h1.css({'color': 'red'});
  av.umsg("Is the current tape cell a space (i.e. #)?<br>" +
          "No, the current tape cell is 'b', so we follow the $\\overline{\\#}$ direction to go to the # state <br>" +
          "Then, erase the value 'b' by making the cell empty (denoted by #).");
  tape.setCurrentValue("#");
  av.step();

  //Slide 12
  ol.css({'color': 'black'});
  h1.css({'color': 'black'});
  r2.css({'color': 'red'});
  av.umsg("$R^{2}_{\\#}$: Go to the second space(#) on the right.");
  tape.highlightPosition(3);
  tape.highlightPosition(5);
  av.step();

  //Slide 13
  r2.css({'color': 'black'});
  s1.css({'color': 'red'});
  av.umsg("Sigma($\\sigma$): Write the letter we just read to the current tape cell. " +
          "<br> We just read 'b', so we need write 'b' to the cell.");
  tape.current = 5;
  tape.arr.value(5, 'b');
  av.step();

  //Slide 14
  s1.css({'color': 'black'});
  l2.css({'color': 'red'});
  av.umsg("$L^{2}_{\\#}$: Go to the second space(#) on the left.");
  tape.highlightPosition(3);
  tape.highlightPosition(2);
  av.step();

  //Slide 15
  l2.css({'color': 'black'});
  s2.css({'color': 'red'});
  av.umsg("Sigma($\\sigma$): Write the letter we just read to the current tape cell. <br>" +
          " We just read 'b', so we need write 'b' to the cell.");
  tape.current = 2;
  tape.arr.value(2, 'b');
  av.step();

  //Slide 16
  s2.css({'color': 'black'});
  r.css({'color':'red'});
  av.umsg("The $R$ in red means moving from the current tape cell to the right cell.");
  tape.moveRight();
  av.step();

  //Slide 17
  r.css({'color': 'black'});
  r3.css({'color':'red'});
  h2.css({'color':'red'});
  av.umsg("Is the current tape cell a space (i.e. #)?<br>" +
          "Yes, it is a space(#), so we follow the # direction to go to the $R_{\\#}$ state. <br>" +
          "Then, move to the closest space (denoted by #) on the right.");
  tape.highlightPosition(6);
  av.step();

  //Slide 18
  tape.current = 6;
  tape.unhighlightCurrent();
  r3.css({'color':'black'});
  h2.css({'color':'black'});

  av.umsg("The final string is 'abab'. We successfully made a duplicate for the string 'ab', " +
          "by using this copy machine.");
  av.recorded();
});
