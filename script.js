document.querySelector(".hesapla").addEventListener("click" , function(){
    let birinciİnput = document.querySelector(".yuzmilyonlar").value;
    let birinciİnputSonuc = birinciİnput*100000000;
    document.querySelector(".result1").textContent = birinciİnputSonuc;
    document.querySelector(".result1").style.transform="translateX(-45%)"
    if (birinciİnput == 0) {
        document.querySelector(".result1").style.marginLeft="50px";
    }
    if (birinciİnput.length > 1) {
        document.querySelector(".result1").textContent = "!";
    }
    let ikinciİnput = document.querySelector(".onmilyonlar").value;
    let ikinciİnputSonuc = ikinciİnput*10000000;
    document.querySelector(".result2").textContent = ikinciİnputSonuc;
    document.querySelector(".result2").style.marginLeft="120px";
    if (ikinciİnput == 0) {
        document.querySelector(".result2").style.marginLeft="155px"
    }
    if (ikinciİnput.length > 1) {
        document.querySelector(".result2").textContent = "!"
        document.querySelector(".result2").style.marginLeft="155px"
    }
    let ucuncuİnput = document.querySelector(".milyonlar").value;
    let ucuncuİnputSonuc = ucuncuİnput*1000000;
    document.querySelector(".result3").textContent = ucuncuİnputSonuc;
    document.querySelector(".result3").style.marginLeft="240px";
    document.querySelector(".result1").style.marginLeft="40px";
    if (ucuncuİnput == 0) {
        document.querySelector(".result3").style.marginLeft="275px"
    }
    if (ucuncuİnput.length > 1) {
        document.querySelector(".result3").textContent = "!";
        document.querySelector(".result3").style.marginLeft="275px"
    }
    let dorduncuİnput = document.querySelector(".yuzbinler").value;
    let dorduncuİnputSonuc = dorduncuİnput*100000;
    document.querySelector(".result4").textContent = dorduncuİnputSonuc;
    document.querySelector(".result4").style.marginLeft="365px";
    if (dorduncuİnput == 0) {
        document.querySelector(".result4").style.marginLeft="390px";
    }
    if (dorduncuİnput.length > 1) {
        document.querySelector(".result4").textContent="!"
        document.querySelector(".result4").style.marginLeft="390px";    
    }
    let besinciİnput = document.querySelector(".onbinler").value;
    let besinciİnputSonuc = besinciİnput*10000;
    document.querySelector(".result5").textContent = besinciİnputSonuc;
    document.querySelector(".result5").style.marginLeft="485px";
    if (besinciİnput == 0) {
        document.querySelector(".result5").style.marginLeft="508px"
    }
    if (besinciİnput.length > 1) {
        document.querySelector(".result5").textContent = "!"
        document.querySelector(".result5").style.marginLeft="510px"
    };
    let altinciİnput = document.querySelector(".binler").value;
    let altinciİnputSonuc = altinciİnput*1000;
    document.querySelector(".result6").textContent = altinciİnputSonuc;
    document.querySelector(".result6").style.marginLeft="610px";
    if (altinciİnput == 0) {
        document.querySelector(".result6").style.marginLeft="620px"
    }
    if (altinciİnput.length > 1) {
        document.querySelector(".result6").textContent = "!";
        document.querySelector(".result6").style.marginLeft="625px"
    };
    let yedinciİnput = document.querySelector(".yuzler").value;
    let yedinciİnputSonuc = yedinciİnput*100;
    document.querySelector(".result7").textContent = yedinciİnputSonuc;
    document.querySelector(".result7").style.marginLeft="730px";
    if (yedinciİnput == 0) {
        document.querySelector(".result7").style.marginLeft="740px"
    }
    if (yedinciİnput.length > 1) {
        document.querySelector(".result7").textContent = "!";
        document.querySelector(".result7").style.marginLeft="743px"
    };
    let sekizinciİnput = document.querySelector(".onlar").value;
    let sekizinciİnputSonuc = sekizinciİnput*10;
    document.querySelector(".result8").textContent = sekizinciİnputSonuc;
    document.querySelector(".result8").style.marginLeft="853px";
    if (sekizinciİnput == 0) {
        document.querySelector(".result8").style.marginLeft="858px";
    }
    if (sekizinciİnput.length > 1) {
        document.querySelector(".result8").textContent = "!";
        document.querySelector(".result8").style.marginLeft = "860px"
    };
    let dokuzuncuİnput = document.querySelector(".birler").value;
    let dokuzuncuİnputSonuc = dokuzuncuİnput*1;
    document.querySelector(".result9").textContent = dokuzuncuİnputSonuc;
    document.querySelector(".result9").style.marginLeft="975px";
    if (dokuzuncuİnput.length > 1) {
        document.querySelector(".result9").textContent="!"
    };
});
document.querySelector(".clear").addEventListener("click" , function(){
    document.querySelector(".yuzmilyonlar").value = "";
    document.querySelector(".onmilyonlar").value = "";
    document.querySelector(".milyonlar").value = "";
    document.querySelector(".yuzbinler").value = "";
    document.querySelector(".onbinler").value = "";
    document.querySelector(".binler").value = "";
    document.querySelector(".yuzler").value = "";
    document.querySelector(".onlar").value = "";
    document.querySelector(".birler").value = "";
    document.querySelector(".result1").textContent = "Sonuç";
    document.querySelector(".result2").textContent = "Sonuç";
    document.querySelector(".result2").style.marginLeft="135px"
    document.querySelector(".result3").textContent = "Sonuç";
    document.querySelector(".result3").style.marginLeft="253px";
    document.querySelector(".result4").textContent = "Sonuç";
    document.querySelector(".result4").style.marginLeft="372px";
    document.querySelector(".result5").textContent="Sonuç"
    document.querySelector(".result5").style.marginLeft="487px";
    document.querySelector(".result6").textContent = "Sonuç"
    document.querySelector(".result6").style.marginLeft = "607px";
    document.querySelector(".result7").textContent = "Sonuç";
    document.querySelector(".result7").style.marginLeft = "723px";
    document.querySelector(".result8").textContent = "Sonuç";
    document.querySelector(".result8").style.marginLeft = "840px";
    document.querySelector(".result9").textContent = "Sonuç"
    document.querySelector(".result9").style.marginLeft = "957px";
});