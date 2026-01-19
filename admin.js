// ================= CONFIG =================
const PASSWORD_HASH =
  "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9"; // admin123
const SESSION_TIME = 15 * 60 * 1000; // 15 menit

// ================= HASH =================
async function sha256(text) {
  const buf = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return [...new Uint8Array(hash)]
    .map(x => x.toString(16).padStart(2, "0"))
    .join("");
}

// ================= LOGIN =================
async function login() {
  const pass = document.getElementById("password").value;
  if (!pass) return alert("Masukkan password");

  if ((await sha256(pass)) === PASSWORD_HASH) {
    localStorage.setItem("adminSession", JSON.stringify({
      token: crypto.randomUUID(),
      time: Date.now()
    }));

    fadeOut("loginBox", () => {
      document.getElementById("panel").style.display = "flex";
    });
  } else {
    alert("Password salah");
  }
}

// ================= SESSION CHECK =================
function isLoggedIn() {
  const s = JSON.parse(localStorage.getItem("adminSession"));
  if (!s) return false;
  if (Date.now() - s.time > SESSION_TIME) {
    logout();
    return false;
  }
  return true;
}

// ================= LOGOUT =================
function logout() {
  localStorage.removeItem("adminSession");
  location.reload();
}

// ================= DATA SAVE =================
function save() {
  const data = {
    name: getVal("name", "INDORAYA ROLEPLAY COMMUNITY"),
    discord: getVal("discord", "https://discord.gg/"),
    tiktokClan: getVal("tiktokClan", "https://tiktok.com"),
    tiktokAdmin: getVal("tiktokAdmin", "https://tiktok.com"),
    igAdmin: getVal("igAdmin", "https://instagram.com")
  };

  localStorage.setItem("indorayaData", JSON.stringify(data));
  alert("Data berhasil disimpan");
}

// ================= HELPERS =================
function getVal(id, fallback) {
  const el = document.getElementById(id);
  return el && el.value.trim() ? el.value.trim() : fallback;
}

function fadeOut(id, cb) {
  const el = document.getElementById(id);
  el.style.transition = "0.4s ease";
  el.style.opacity = 0;
  setTimeout(cb, 400);
}

// ================= INIT =================
window.onload = () => {
  if (isLoggedIn()) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("panel").style.display = "flex";
  } else {
    document.getElementById("panel").style.display = "none";
  }
};
