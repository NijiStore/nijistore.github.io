const apps = [
  {
    name: "Prototype Journal",
    desc: "Track builds, ideas, and experiments",
    url: "/prototype-journal"
  },
  {
    name: "Future App",
    desc: "Coming soon",
    url: "#"
  }
];

const container = document.getElementById("apps");

apps.forEach(app => {
  const el = document.createElement("div");
  el.className = "card";

  el.innerHTML = `
    <h2>${app.name}</h2>
    <p>${app.desc}</p>
  `;

  el.onclick = () => {
    if (app.url !== "#") window.location.href = app.url;
  };

  container.appendChild(el);
});