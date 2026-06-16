const chapters = [...ENERGY_DATA.chapters].sort((a, b) => a.order - b.order);
const $ = (selector) => document.querySelector(selector);
const storeKey = "papa-feu-progress-v1";
const scoreLabels = {power:"Puissance",pollution:"Pollution",availability:"Disponibilité",danger:"Danger",ease:"Facilité",storage:"Stockage",complexity:"Complexité"};
const cityLabels = {comfort:"Confort",pollution:"Pollution",cost:"Coût",autonomy:"Autonomie",security:"Sécurité",durability:"Durabilité"};
let currentIndex = 0;
let progress = loadProgress();
let cityChoices = {};

function loadProgress(){
  try { return JSON.parse(localStorage.getItem(storeKey)) || {read:[], last:"intro", theme:"light"}; }
  catch { return {read:[], last:"intro", theme:"light"}; }
}
function saveProgress(){ localStorage.setItem(storeKey, JSON.stringify(progress)); }
function escapeHtml(text){ return String(text).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }
function chapterById(id){ return chapters.find(c => c.id === id) || chapters[0]; }
function progressPercent(){ return Math.round((progress.read.length / chapters.length) * 100); }
function updateProgressUi(){
  const pct = progressPercent();
  $("#globalProgress").style.width = `${pct}%`;
  $("#progressSummary").innerHTML = `<strong>${pct}% de l’aventure explorée</strong><span>${progress.read.length}/${chapters.length} chapitres marqués comme lus.</span>`;
  document.querySelectorAll(".timeline-item").forEach(btn => btn.classList.toggle("done", progress.read.includes(btn.dataset.id)));
}
function renderTimeline(){
  $("#timeline").innerHTML = chapters.map(ch => `<button class="timeline-item" data-id="${ch.id}" type="button"><span>${ch.icon}</span><strong>${escapeHtml(ch.title.replace(/^Papa, /,""))}</strong><small>${escapeHtml(ch.period)}</small></button>`).join("");
  $("#timeline").addEventListener("click", e => { const item = e.target.closest(".timeline-item"); if(item) openChapter(item.dataset.id, true); });
}
function listCards(items, cls){ return `<div class="mini-grid">${items.map(x => `<div class="info-pill ${cls}">${escapeHtml(x)}</div>`).join("")}</div>`; }
function scoreBars(scores){
  const bars = Object.entries(scoreLabels).map(([key,label]) => {
    const value = scores[key] || 0;
    return `<div class="score-row"><span>${label}</span><div class="bar"><i style="width:${value*20}%"></i></div><b>${value}/5</b></div>`;
  }).join("");
  const renewable = scores.renewable === null ? "Dépend du contexte" : scores.renewable ? "Renouvelable" : "Non renouvelable";
  return `<div class="scores">${bars}<div class="renewable-badge">${renewable}</div></div>`;
}
function renderActivity(ch){
  const a = ch.activity;
  const pool = a.items || a.cards || a.events || a.resources || a.actions || a.steps || a.skills || a.sources || [];
  if(a.type === "resource_management") return `<div class="activity" data-type="forest"><h3>${a.title}</h3><p>${a.description}</p><div class="forest-state">🌲🌲🌲🌲🌲<b>Forêt saine</b></div><div class="activity-actions"><button data-forest="cut">Couper</button><button data-forest="plant">Planter</button></div><p class="feedback">${a.rules.join(" · ")}</p></div>`;
  if(a.type === "battery_management") return `<div class="activity" data-type="battery"><h3>${a.title}</h3><p>${a.description}</p><div class="battery"><i style="width:80%"></i></div>${pool.map((x,i)=>`<button class="chip" data-battery="${i}">${escapeHtml(x)}</button>`).join("")}<p class="feedback">Ta batterie attend tes choix.</p></div>`;
  if(a.type === "data_path") return `<div class="activity path"><h3>${a.title}</h3><p>${a.description}</p>${pool.map((x,i)=>`<button class="path-step" data-order="${i}">${escapeHtml(x)}</button>`).join("<span>→</span>")}<p class="feedback">Clique les étapes dans l’ordre.</p></div>`;
  return `<div class="activity"><h3>${a.title}</h3><p>${a.description}</p><div class="activity-board">${pool.map(x => `<button class="activity-card" type="button">${escapeHtml(x)}</button>`).join("")}</div><p class="feedback">Clique sur les cartes pour tester et discuter : utile, risqué, ou à vérifier ?</p></div>`;
}
function openChapter(id, scroll=false){
  const ch = chapterById(id); currentIndex = chapters.indexOf(ch); progress.last = ch.id; saveProgress();
  $("#chapterHeading").textContent = ch.title;
  $("#chapterView").innerHTML = `<div class="chapter-top"><div class="chapter-icon">${ch.icon}</div><div><p class="eyebrow">${escapeHtml(ch.period)} · ${escapeHtml(ch.theme)}</p><h2>${escapeHtml(ch.title)}</h2></div></div><div class="chapter-layout"><div><section><h3>Mini-histoire</h3><p>${escapeHtml(ch.story)}</p></section><section><h3>Explication simple</h3><p>${escapeHtml(ch.simple_explanation)}</p></section><div class="duo"><section><h3>Ce que ça apporte</h3>${listCards(ch.benefits,"benefit")}</section><section><h3>Les dilemmes</h3>${listCards(ch.dilemmas,"dilemma")}</section></div><section class="dialogue"><p><strong>👧 Question :</strong> ${escapeHtml(ch.child_question)}</p><p><strong>👨 Réponse :</strong> ${escapeHtml(ch.father_answer)}</p></section>${renderActivity(ch)}<blockquote>${escapeHtml(ch.key_sentence)}</blockquote><div class="chapter-nav"><button id="prevChapter">← Précédent</button><button id="markRead">✓ Marquer comme lu</button><button id="nextChapter">Suivant →</button></div></div><aside><h3>Jauges de l’énergie</h3>${scoreBars(ch.energy_scores)}</aside></div>`;
  bindChapterControls(); updateProgressUi(); if(scroll) location.hash = "chapitres";
}
function bindChapterControls(){
  $("#prevChapter").onclick = () => openChapter(chapters[Math.max(0,currentIndex-1)].id,true);
  $("#nextChapter").onclick = () => openChapter(chapters[Math.min(chapters.length-1,currentIndex+1)].id,true);
  $("#markRead").onclick = () => { const id = chapters[currentIndex].id; if(!progress.read.includes(id)) progress.read.push(id); saveProgress(); updateProgressUi(); $("#markRead").textContent = "✓ Chapitre lu"; };
  document.querySelectorAll(".activity-card").forEach(btn => btn.onclick = () => {btn.classList.toggle("selected"); btn.closest(".activity").querySelector(".feedback").textContent = "Bien vu ! Maintenant demande-toi : quel avantage et quelle limite vois-tu ?";});
  document.querySelectorAll("[data-forest]").forEach(btn => btn.onclick = forestGame);
  document.querySelectorAll("[data-battery]").forEach(btn => btn.onclick = batteryGame);
  let pathNext = 0; document.querySelectorAll(".path-step").forEach(btn => btn.onclick = () => { if(+btn.dataset.order === pathNext){btn.classList.add("selected"); pathNext++;} btn.parentElement.querySelector(".feedback").textContent = pathNext>=document.querySelectorAll(".path-step").length ? "Photo arrivée ! Le numérique voyage grâce à de l’énergie." : "Continue le trajet de la donnée."; });
}
let trees = 5; function forestGame(e){ trees += e.target.dataset.forest === "plant" ? 1 : -1; trees = Math.max(0, Math.min(8, trees)); const msg = trees < 2 ? "Attention, la forêt disparaît." : trees > 6 ? "Belle réserve, mais planter prend du temps." : "Équilibre intéressant."; $(".forest-state").innerHTML = `${"🌲".repeat(trees)}<b>${msg}</b>`; }
let battery = 80; function batteryGame(e){ battery += e.target.textContent.includes("Éteindre") || e.target.textContent.includes("soleil") ? 18 : -16; battery = Math.max(0, Math.min(100,battery)); $(".battery i").style.width = `${battery}%`; e.target.closest(".activity").querySelector(".feedback").textContent = battery < 25 ? "Batterie faible : il faut choisir les usages essentiels." : "La maison tient encore !"; }
function renderQuestions(){ $("#questions").innerHTML = ENERGY_DATA.big_questions.map((q,i)=>`<details class="question-card"><summary>${i+1}. ${escapeHtml(q.question)}</summary><p>${escapeHtml(q.answer)}</p></details>`).join(""); }
function renderCityGame(){
  const g = ENERGY_DATA.final_city_game;
  $("#cityGame").innerHTML = `<div class="city-places">${g.places.map(p=>`<label class="place-card"><strong>${escapeHtml(p.label)}</strong><small>${p.needs.join(" · ")}</small><select data-place="${p.id}"><option value="">Choisir une énergie</option>${g.energy_options.map(o=>`<option value="${o.id}">${o.label}</option>`).join("")}</select></label>`).join("")}</div><div class="city-results"><h3>Résultat de ta ville</h3><div id="cityScores"></div><p id="cityComment">Choisis des énergies pour commencer.</p></div>`;
  document.querySelectorAll("[data-place]").forEach(sel => sel.onchange = () => { cityChoices[sel.dataset.place]=sel.value; updateCityScores(); }); updateCityScores();
}
function updateCityScores(){
  const opts = ENERGY_DATA.final_city_game.energy_options; const selected = Object.values(cityChoices).filter(Boolean).map(id=>opts.find(o=>o.id===id));
  const avg = {}; Object.keys(cityLabels).forEach(k => avg[k] = selected.length ? selected.reduce((s,o)=>s+o.impact[k],0)/selected.length : 0);
  $("#cityScores").innerHTML = Object.entries(cityLabels).map(([k,l])=>`<div class="score-row"><span>${l}</span><div class="bar"><i style="width:${avg[k]*20}%"></i></div><b>${avg[k].toFixed(1)}/5</b></div>`).join("");
  let c = "Ta ville cherche un bon compromis."; if(avg.pollution>=3.8)c="Ta ville est confortable, mais elle pollue beaucoup."; else if(avg.durability>=3.7)c="Ta ville pense au futur."; else if(avg.autonomy<2.6)c="Ta ville dépend beaucoup de ressources extérieures."; else if(avg.comfort<2.7)c="Ta ville est sobre, mais certains besoins sont difficiles à couvrir.";
  $("#cityComment").textContent = selected.length ? c : "Choisis des énergies pour commencer.";
}
function init(){
  document.documentElement.dataset.theme = progress.theme || "light";
  renderTimeline(); renderQuestions(); renderCityGame(); openChapter(progress.last || "intro"); updateProgressUi();
  $("#startBtn").onclick = () => openChapter("intro", true); $("#resumeBtn").onclick = () => openChapter(progress.last || "intro", true);
  $("#navToggle").onclick = () => { const nav=$("#mainNav"); nav.classList.toggle("open"); $("#navToggle").setAttribute("aria-expanded", nav.classList.contains("open")); };
  $("#themeToggle").onclick = () => { progress.theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark"; document.documentElement.dataset.theme = progress.theme; saveProgress(); };
}
document.addEventListener("DOMContentLoaded", init);
