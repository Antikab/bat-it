(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const g of r.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const c=document.querySelector("#toggle-spotlight"),a=document.querySelector("#remove-mask"),m=document.querySelector("#avatar"),i=document.querySelector(".card-content"),u=document.querySelector(".spotlight"),d=document.querySelector(".card");let n=!1;const f=(o,t)=>{u.style.background=`radial-gradient(circle at ${o}% ${t}%, rgba(255, 255, 255, 0.1) 10%, rgba(0, 0, 0, 1) 40%)`};document.body.addEventListener("mousemove",o=>{if(!n)return;const t=o.clientX/window.innerWidth*100,l=o.clientY/window.innerHeight*100;f(t,l);const s=i.getBoundingClientRect();o.clientX>s.left&&o.clientX<s.right&&o.clientY>s.top&&o.clientY<s.bottom?(c.classList.add("colored"),i.classList.add("colored"),d.classList.add("colored")):(c.classList.remove("colored"),i.classList.remove("colored"),d.classList.remove("colored"))});document.body.addEventListener("touchmove",o=>{if(!n)return;const t=o.touches[0],l=t.clientX/window.innerWidth*100,s=t.clientY/window.innerHeight*100;f(l,s);const e=i.getBoundingClientRect();t.clientX>e.left&&t.clientX<e.right&&t.clientY>e.top&&t.clientY<e.bottom?(c.classList.add("colored"),i.classList.add("colored"),d.classList.add("colored")):(c.classList.remove("colored"),i.classList.remove("colored"),d.classList.remove("colored"))});a.addEventListener("click",()=>{m.src.includes("noMask.jpg")?(m.src="/bat-it/addMask.jpg",a.textContent="Снять маску"):(m.src="/bat-it/noMask.jpg",a.textContent="Надеть маску")});c.addEventListener("click",()=>{n=!n,c.setAttribute("aria-pressed",n),n?(c.textContent="🦇 Выключить прожектор",i.classList.remove("hidden"),a.classList.remove("colored"),u.style.background="radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.1) 10%, rgba(0, 0, 0, 1) 40%)",c.classList.add("active")):(c.textContent="🦇 Включить прожектор",i.classList.add("hidden"),i.classList.remove("colored"),d.classList.remove("colored"),u.style.background="radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 1) 100%)",c.classList.remove("active"))});u.style.background="radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 1) 100%)";