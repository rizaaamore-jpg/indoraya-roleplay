const HASH = "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9"; 
// password: admin123

async function sha256(text){
  const buf = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return [...new Uint8Array(hash)].map(x=>x.toString(16).padStart(2,"0")).join("");
}

async function login(){
  const pass = document.getElementById("password").value;

  if(await sha256(pass) === HASH){
    localStorage.setItem("adminLogin","true");

    // animasi fade out login
    const box = document.getElementById("loginBox");
    box.style.transition = "0.4s ease";
    box.style.opacity = 0;

    setTimeout(() => {
      location.reload();
    }, 400);

  } else {
    alert("Password salah");
  }
}

if(localStorage.getItem("adminLogin")==="true"){
  document.getElementById("loginBox").style.display="none";
  document.getElementById("panel").style.display="block";
}

function save(){
  const data = {
    name: name.value || undefined,
    discord: discord.value || undefined,
    tiktokClan: tiktokClan.value || undefined,
    tiktokAdmin: tiktokAdmin.value || undefined,
    igAdmin: igAdmin.value || undefined
  };

  const old = JSON.parse(localStorage.getItem("indorayaData")) || {};
  localStorage.setItem("indorayaData", JSON.stringify({...old,...data}));
  alert("Berhasil disimpan");
}
