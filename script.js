* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #0d0d0d;
  color: #fff;
  overflow-x: hidden;
}
header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  z-index: 1000;
  backdrop-filter: blur(10px);
}
.logo {
  font-size: 24px;
  font-weight: bold;
  color: #00ffcc;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}
nav ul li a {
  text-decoration: none;
  color: #fff;
  transition: color 0.3s;
}
nav ul li a:hover {
  color: #00ffcc;
}
.hero {
  height: 100vh;
  background: linear-gradient(135deg, #121212, #1f1f1f);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 20px;
}
.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
  animation: slideDown 1s ease-out forwards;
}
.hero p {
  font-size: 20px;
  margin-bottom: 30px;
  opacity: 0;
  animation: fadeIn 1.5s ease-in forwards;
  animation-delay: 0.5s;
}
.btn {
  background-color: #00ffcc;
  color: #000;
  padding: 12px 28px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: #00c9a7;
}

.features {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 80px 20px;
  background-color: #1a1a1a;
}
.card {
  background-color: #262626;
  padding: 30px;
  border-radius: 12px;
  width: 300px;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease;
}
.card h3 {
  color: #00ffcc;
  margin-bottom: 10px;
}
.card p {
  color: #ccc;
}
.card.fade-in.show {
  opacity: 1;
  transform: translateY(0);
}
.card.delay {
  transition-delay: 0.3s;
}
.card.delay2 {
  transition-delay: 0.6s;
}
footer {
  text-align: center;
  padding: 30px;
  background-color: #0d0d0d;
  color: #777;
}

/* Animations */
@keyframes slideDown {
  0% { transform: translateY(-50px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
@keyframes fadeIn {
  to { opacity: 1; }
}
