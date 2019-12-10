

function check() {

    var f = document.getElementById('#field1');
    var s = document.getElementById('#field2');
    var fReplaceWhiteSpace = f.value.replace(/ /g, '');
    var sReplaceWhiteSpace = s.value.replace(/ /g, '');
    var fSplitSort = fReplaceWhiteSpace.split('').sort().join().toLowerCase();
    var sSplitSort = sReplaceWhiteSpace.split('').sort().join().toLowerCase();


    if (fSplitSort == sSplitSort) {
        display.innerHTML = "It's a match";

    }
    else {
        display.innerHTML = "It's not a match";



    }
}

