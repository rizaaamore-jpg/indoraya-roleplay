<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>INDORAYA ROLEPLAY</title>

<style>
body{
  margin:0;
  font-family:Segoe UI, sans-serif;
  background:radial-gradient(circle at top,#111,#000);
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
}
.card{
  width:100%;
  max-width:380px;
  padding:25px;
  background:rgba(255,255,255,.06);
  backdrop-filter:blur(12px);
  border-radius:22px;
  text-align:center;
}
.logo{
  width:120px;
  height:120px;
  border-radius:50%;
  object-fit:cover;
  box-shadow:0 0 25px rgba(127,0,255,.9);
}
a{
  display:block;
  margin-top:12px;
  padding:14px;
  border-radius:14px;
  text-decoration:none;
  font-weight:600;
  color:white;
  background:linear-gradient(135deg,#2d2dff,#7f00ff);
}
.section{
  margin-top:20px;
  font-size:12px;
  opacity:.6;
}
</style>
</head>

<body>
<div class="card">
  <img id="logo" class="logo">
  <h1 id="clanName"></h1>

  <div class="section">Clan</div>
  <a id="discordClan" target="_blank">Join Discord</a>
  <a id="tiktokClan" target="_blank">TikTok Clan</a>

  <div class="section">Admin</div>
  <a id="igAdmin" target="_blank">Instagram Admin</a>
  <a id="ttAdmin" target="_blank">TikTok Admin</a>
</div>

<script>
  // DEFAULT DATA (BISA DIGANTI DARI ADMIN PANEL)
  if(!localStorage.getItem("initialized")){
    localStorage.setItem("logo","https://cdn.discordapp.com/attachments/1462588340317720753/1462724110932115615/IMG-20260114-WA0012.jpg");
    localStorage.setItem("clanName","INDORAYA ROLEPLAY");
    localStorage.setItem("discordClan","https://discord.gg/Dh5xAcdMHP");
    localStorage.setItem("tiktokClan","https://www.tiktok.com/@irp_official");
    localStorage.setItem("igAdmin","https://www.instagram.com/zyraxx_18");
    localStorage.setItem("ttAdmin","https://www.tiktok.com/@screet_gtwl");
    localStorage.setItem("initialized","yes");
  }

  logo.src = localStorage.getItem("logo");
  clanName.innerText = localStorage.getItem("clanName");
  discordClan.href = localStorage.getItem("discordClan");
  tiktokClan.href = localStorage.getItem("tiktokClan");
  igAdmin.href = localStorage.getItem("igAdmin");
  ttAdmin.href = localStorage.getItem("ttAdmin");
</script>
</body>
</html>
