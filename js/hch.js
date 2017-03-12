addOnload(function () {
    var boxA = getElementsByClassName(document, "conboxa");
    var boxC = getElementsByClassName(document, "conboxc");

    for (var i = 0; i < boxA.length; i++) {
        boxA[i].index = i;
        boxA[i].onmouseover = function () {
            animate(boxC[this.index], {"opacity": 1});
        };
        boxA[i].onmouseout = function () {
            animate(boxC[this.index], {"opacity": 0});
        };
    }
});
