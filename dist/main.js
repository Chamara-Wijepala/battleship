(()=>{"use strict";function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.board=[],100!==this.board.length&&this.createBoard()}var r,a;return r=t,(a=[{key:"createBoard",value:function(){for(var e=0;e<100;e+=1)this.board.push({hasShip:!1,isHit:!1,shipHover:!1})}},{key:"placeShip",value:function(e,t,r){t.start=e,t.direction=r;for(var a=0;a<t.length;a+=1)"Horizontal"===r?(this.board[e+a].hasShip=!0,this.board[e+a].shipObject=t):(this.board[e+10*a].hasShip=!0,this.board[e+10*a].shipObject=t)}},{key:"shipHover",value:function(e,t,r,a){if(this.board.forEach((function(e){e.shipHover=!1})),!a)for(var n=0;n<t.length;n+=1)"Horizontal"===r?this.board[e+n].shipHover=!0:this.board[e+10*n].shipHover=!0}},{key:"receiveAttack",value:function(e,t){this.board[e].isHit=!0,!0===this.board[e].hasShip&&t.hit(e)}},{key:"allShipsSunk",value:function(){return this.board.filter((function(e){return!0===e.hasShip})).every((function(e){return!0===e.isHit}))}}])&&e(r.prototype,a),Object.defineProperty(r,"prototype",{writable:!1}),t}();function r(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}const a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.length=t,this.hits=[]}var t,a;return t=e,(a=[{key:"hit",value:function(e){Number.isInteger(e)&&this.hits.push(e)}},{key:"isSunk",value:function(){return this.hits.length===this.length}}])&&r(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();function n(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var i=o((function e(r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=r,this.gameBoard=new t,this.ships={carrier:new a(5),battleship:new a(4),cruiser:new a(3),submarine:new a(3),destroyer:new a(2)}}));function s(e,t){for(var r=0;r<e.gameBoard.board.length;r+=1){var a=document.createElement("div");a.classList.add("square"),a.dataset.id=r,!0===e.gameBoard.board[r].hasShip&&a.classList.add("has-ship"),!0===e.gameBoard.board[r].isHit&&a.classList.add("is-hit"),!0===e.gameBoard.board[r].hasShip&&!0===e.gameBoard.board[r].isHit&&a.classList.add("ship-hit"),!0===e.gameBoard.board[r].shipHover&&a.classList.add("ship-hover"),t.appendChild(a)}}function c(e,t,r,a){for(var n=[9,19,29,39,49,59,69,79,89],o=[10,20,30,40,50,60,70,80,90],i=[],s=0;s<t.length;s+=1)"Horizontal"===a?i.push(e+s):i.push(e+10*s);var c=i.filter((function(e){return e<100})),h=i.some((function(e){return n.some((function(t){return t===e}))})),d=i.some((function(e){return o.some((function(t){return t===e}))})),u=i.some((function(e){return e>99})),l=c.some((function(e){return r.gameBoard.board[e].hasShip}));return!!(h&&d||l||u)}function h(e,t){var r,a=(r=["Horizontal","Vertical"])[Math.floor(Math.random()*r.length)],n=function(e,t,r){return"Horizontal"===r?Math.abs(Math.floor(Math.random()*e.gameBoard.board.length-t.length)):Math.abs(Math.floor(Math.random()*e.gameBoard.board.length-9*t.length))}(e,t,a);!0===c(n,t,e,a)?h(e,t):e.gameBoard.placeShip(n,t,a)}var d=document.getElementById("overlay");document.getElementById("overlay-button").addEventListener("click",(function(){window.location.reload()}));var u=document.getElementById("player-board"),l=document.getElementById("computer-board"),f=document.getElementById("rotate-button"),p=new i("Human"),b=new i("Computer");Object.entries(b.ships).forEach((function(e){h(b,e[1])}));var v=p;function m(){v=v===p?b:p}function g(e,t){!function(e){for(;e.lastChild;)e.removeChild(e.lastChild)}(t),s(e,t)}function y(e){e.gameBoard.allShipsSunk()&&(d.style.display="block")}function B(){(function(e){var t,r,a=(t=e.gameBoard,r=[],t.board.forEach((function(e,t){!1===e.isHit&&r.push(t)})),r[Math.floor(Math.random()*r.length)]),n=e.gameBoard.board[a].shipObject;e.gameBoard.receiveAttack(a,n)})(p),m(),g(p,u),y(p)}var H=0,w=Object.entries(p.ships);l.addEventListener("click",(function(e){var t=e.target.dataset.id;if(v===p&&!1===b.gameBoard.board[t].isHit&&H>4){var r=b.gameBoard.board[t].shipObject;b.gameBoard.receiveAttack(t,r),m(),g(b,l),y(b),setTimeout(B,300)}}));var k="Horizontal";function S(e){var t=Number(e.target.dataset.id),r=w[H][1];return{coords:t,currentShip:r,direction:k,collides:c(t,r,p,k)}}u.addEventListener("mousemove",(function(e){if(H<5){var t=S(e);p.gameBoard.shipHover(t.coords,t.currentShip,t.direction,t.collides),g(p,u)}})),u.addEventListener("click",(function(e){var t=S(e);!t.collides&&H<5&&(p.gameBoard.placeShip(t.coords,t.currentShip,t.direction),H+=1),g(p,u)})),f.addEventListener("click",(function(){k="Horizontal"===k?"Vertical":"Horizontal"})),s(p,u),s(b,l)})();
//# sourceMappingURL=main.js.map