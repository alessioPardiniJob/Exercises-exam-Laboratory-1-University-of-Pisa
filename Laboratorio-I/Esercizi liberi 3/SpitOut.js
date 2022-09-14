function spitOut(a, p) {
    console.log(a.filter(p).join());
}
spitOut([12, 7, 14, 0, 561], function (e) { return (e % 3 == 0); });
spitOut(["la", "vispa", "teresa", "solea"], function (e) { return e.indexOf("s") != 0; });
spitOut([31, 3.1415, 1.4142, 7], function (e) { return e == Math.round(e); });
