// const isim = window.prompt("Lütfen adınızı giriniz.");
// const isim = prompt("Lütfen adınızı giriniz.");

 const myName = document.querySelector("#myName");

  const name = window.prompt("Lütfen adınızı giriniz.");
   myName.innerText = name;

    function showTime(){
    const text2 = document.querySelector(".text2");
    const tarih=new Date();
	const yil=tarih.getFullYear();
	const ay=tarih.getMonth();
	const gun=tarih.getDay();
	const saat=tarih.getHours();
	const dakika=tarih.getMinutes();
	const saniye=tarih.getSeconds();
    var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    text2.innerText = saat+":"+dakika+":"+saniye+" "+gunler[tarih.getDay()]+
    ` 
    tarihinde Kodluyoruz Frontend Web Development Patikası'nın
    Javascript bölümü 1. Ödevindesiniz.
    `;
    if(saat<10){
        saat="0"+saat;
    }
    if(dakika<10){
        dakika="0"+dakika;
    }
    if(saniye<10){
        saniye="0"+saniye;
    }
    }
    setInterval(() => {
        showTime();
    }, 1000);
    
