// ==UserScript==
// @name         Overleaf-zenmode
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  zenmode for overleaf
// @author       You
// @match       https://www.overleaf.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// ==/UserScript==
function addStyle() {
    let css = `
    ::-webkit-scrollbar {
    width: 4px;
    height: 6px;
    background-color: transparent;
    border-style: none;
}

::-webkit-scrollbar-track:hover {
    background-color: rgba(0, 0, 0, .1);
}

::-webkit-scrollbar-thumb,
::-webkit-scrollbar-thumb {
    background-clip: border-box;
    background-color: rgba(0, 0, 0, .2);
}

::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, .3);
}

::-webkit-scrollbar-thumb:active {
    background-color: rgba(0, 0, 0, .5);
}

.mybotton {
    background-color: transparent!important;
    font-size:15px;
}
`;

    GM_addStyle(css);
    var obj=document.querySelector("#panel-outer-main > div > div:nth-child(2) > div");
    obj.style.display="none";
};


(function() {
    'use strict';

    // Your code here...
    setTimeout(function () {
    var obj=document.getElementsByClassName("cm-gutter-lint")[0];
    obj.remove();
    //console.log(obj);
    var button3 = document.createElement("button");
        button3.id = "id003";
        button3.className = "mybotton";
        button3.textContent = "F";
        button3.style.width = "38px";
        button3.style.height = "38px";
        button3.style.border = "none";
        button3.style.align = "center";
        button3.onclick = function () {
            const el = document.querySelector('body');
            // var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
            el.webkitRequestFullScreen(el);
            var styleElement = document.querySelector('style#fullscreen-style');
            if (!styleElement) {
                styleElement = document.createElement('style');
                styleElement.type = 'text/css';
                styleElement.innerHTML = ':fullscreen .pdfjs-viewer-inner{overflow-y: auto !important; align-items: normal !important;} :-webkit-full-screen .pdfjs-viewer-inner{overflow-y: auto !important; align-items: normal !important;}';
                styleElement.id = 'fullscreen-style';
                document.head.appendChild(styleElement);
            }
            return;
        }
        var button4 = document.createElement("button");
        button4.id = "id004";
        button4.className = "mybotton";
        button4.textContent = "E";
        button4.style.width = "38px";
        button4.style.height = "38px";
        button4.style.border = "none";
        button4.style.align = "center";
        button4.onclick = function () {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
        var button2 = document.createElement("button");
        button2.id = "id002";
        button2.className = "mybotton";
        button2.textContent = "L";
        button2.style.width = "38px";
        button2.style.height = "38px";
        button2.style.border = "none";
        button2.style.align = "center";
        button2.onclick = function (){
            var obj=document.getElementsByClassName("cm-gutters")[0];
            if(obj.style.display=="none"){
                obj.style.display="flex";
            }
            else{
                obj.style.display="none";
            }
            var obj2=document.querySelector("#panel-outer-main > div > div:nth-child(2) > div");
            obj2.style.display="none";

        }
        var button = document.createElement("button");
        button.id = "id001";
        button.className = "mybotton";
        button.textContent = "H";
        button.style.width = "38px";
        button.style.height = "38px";
        button.style.border = "none";
        button.style.align = "center";
        button.onclick = function (){
            let tb=document.getElementsByClassName("toolbar-header")[0];
            let main=document.getElementById("ide-body");
            let pane=document.getElementsByClassName("ui-layout-pane")
            // tb.remove();
            if(tb.style.display=="none"){
                //main.style.top = "40";
                //tb.style.visibility="visible";
                tb.style.display="flex";
            }
            else{
                tb.style.display="none";
            }
		    return;
	    };
        var x = document.getElementsByClassName('project-name')[0];

        var onuser = document.getElementsByClassName('online-user')[1];
        var tabedit = document.getElementsByClassName('toolbar-editor')[0];
        tabedit.appendChild(button2);
        tabedit.appendChild(button);
        tabedit.appendChild(button3);
        tabedit.appendChild(button4);
        addStyle();
}, 5000);