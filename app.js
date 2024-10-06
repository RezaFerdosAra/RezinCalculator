String.prototype.format = function () {
    var content = this;
    for (var i = 0; i < arguments.length; i++) {
        var target = '{' + i + '}';
        content=content.split(target).join(String(arguments[i]))
        content = content.replace("{}", String(arguments[i]));
    }
    return content;
}

function CalculatorRezin(){
    var Area = document.getElementById("Area").value;
    var Depth = document.getElementById("Depth").value;
    var resultlabel = document.getElementById("result-label");
    var Hardner = ((Area * 1.15) * Depth) / 3;
    var Rezin = Hardner * 2;
    if (isNaN(Rezin) || isNaN(Hardner)) {
        resultlabel.style.color = "red";
        resultlabel.style.border = "1px solid rgb(229, 62, 49)";
        resultlabel.style.borderRadius = "5px";
        resultlabel.style.backgroundColor = "rgb(251, 243, 213)";
        resultlabel.style.textAlign = "center";
        resultlabel.innerHTML = "فقط میتونید از اعداد و '.' استفاده کنید";
        return;
    }
    if (Rezin == 0 || Hardner == 0) {
        resultlabel.style.color = "red";
        resultlabel.style.border = "1px solid rgb(229, 62, 49)";
        resultlabel.style.textAlign = "center";
        resultlabel.style.borderRadius = "5px";
        resultlabel.style.backgroundColor = "rgb(251, 243, 213)";
        resultlabel.innerHTML = "لطفا هردو مقادیر را وارد کنید";
        return;
    }
    resultlabel.style.color = "rgb(251, 243, 213)";
    resultlabel.style.border = "none";
    resultlabel.style.borderRadius = "none";
    resultlabel.style.background = "none";
    Rezin = parseFloat(Rezin.toFixed(2),10);
    Rezin = Rezin.toLocaleString();
    Rezin = Rezin.toString().replace(".", "/");
    Hardner = parseFloat(Hardner.toFixed(2),10);
    Hardner = Hardner.toLocaleString();
    Hardner = Hardner.toString().replace(".", "/");

    Hardner.toLocaleString("en-IN", { maximumSignificantDigits: 3 });
    var format = "رزین : {0} <br/> هاردنر : {1}".format(Rezin, Hardner);
    resultlabel.innerHTML = format;
}