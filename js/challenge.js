"use strict";
function consumableArray(a) {
    if(Array.isArray(a)) {
        for(var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
        return c;
    }
    return Array.from(a);
}

let timerRunning = !0,
    timer = function() {
        return setInterval(function() {
            let a = document.getElementById("counter"),
            b = parseInt(a.innerText);
            a.innerText = b + 1;
        }, 1e3);
    };
    let timeInterval = timer();

    let minusSign = document.getElementById("minus");
    let plusSign = document.getElementById("plus");
    let heartSign = document.getElementById("heart");
    let pauseSign = document.getElementById("pause");
    let commentInput = document.getElementsByTagName("form")[0];

minusSign.addEventListener("click", function(){
    let a = document.getElementById("counter"),
            b = parseInt(a.innerText);
            a.innerText = b - 1;
});

plusSign.addEventListener("click", function(){
    let a = document.getElementById("counter"),
            b = parseInt(a.innerText);
            a.innerText = b + 1;
});

heartSign.addEventListener("click", function() {
    let a = document.getElementById("counter"),
            b = parseInt(a.innerText),
            c = document.querySelector(".likes"),
            d = void 0;
        if (
            [] 
            .concat(consumableArray(c.children))
            .map(function(a) {
                return parseInt(a.dataset.num);
            })
            .includes(b)
        ) {
            d = document.querySelector('[data-num"' + b + '"]');
            let e = parseInt(d.children[0].innerText);
            d.innerHTML = b + " has been liked <span>" + (e + 1) + "</span> times";  
        }  else (d = document.createElement("li")).setAttribute("data-num", b), (d.innerHTML = b + " has been liked <span>1</span> time"), c.appendChild(d);
    }),
    pause.addEventListener("click", function () {
        timerRunning
        ? ((timerRunning = !1), clearInterval(timeInterval), (this.innerText = "resume"))
        : ((timerRunning = !0), (timeInterval = timer()), (this.innerText = "pause")),
        []
          .concat(consumableArray(document.getElementsByTagName("button")))
          .forEach(function (a) {
            "pause" !== a.id && (a.disabled = !playing);
          });
    }),
    commentForm.addEventListener("submit", function (a) {
      a.preventDefault();
      var b = this.children[0],
        c = b.value;
      b.value = "";
      var d = document.querySelector(".comments"),
        e = document.createElement("p");
      (e.innerText = c), d.appendChild(e);
});


