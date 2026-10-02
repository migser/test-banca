const eur = n => n.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
function toast(msg){let t=document.querySelector(".toast");if(!t){t=document.createElement("div");t.className="toast";document.body.appendChild(t)}t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),3000)}

document.addEventListener("DOMContentLoaded", () => {
  // Menú móvil
  const tg=document.querySelector(".menu-toggle"), ul=document.querySelector(".nav ul");
  if(tg) tg.addEventListener("click",()=>ul.classList.toggle("open"));

  // Año footer
  document.querySelectorAll(".year").forEach(e=>e.textContent=new Date().getFullYear());

  // Banner de cookies (solo memoria de sesión de la página)
  const ck=document.querySelector(".cookie");
  if(ck){ck.style.display="block";ck.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{ck.style.display="none";toast(b.dataset.msg)}))}

  // Simulador de préstamo / hipoteca
  const calc=document.querySelector("[data-calc]");
  if(calc){
    const imp=calc.querySelector("#importe"),pl=calc.querySelector("#plazo"),ti=calc.querySelector("#tin");
    const out=calc.querySelector("#cuota"),lbl=calc.querySelector("#lbl-importe"),lblp=calc.querySelector("#lbl-plazo");
    const run=()=>{const P=+imp.value,n=+pl.value*12,r=+ti.value/100/12;const c=r?P*r/(1-Math.pow(1+r,-n)):P/n;
      out.textContent=eur(c);lbl.textContent=eur(P);lblp.textContent=pl.value+" años"};
    [imp,pl,ti].forEach(e=>e.addEventListener("input",run));run();
  }

  // Formularios demo (no envían datos a ningún sitio)
  document.querySelectorAll("form[data-demo]").forEach(f=>f.addEventListener("submit",e=>{
    e.preventDefault();
    if(f.dataset.demo==="login"){window.location.href="area-clientes.html";return}
    toast("Formulario de demostración: no se ha enviado ningún dato.");f.reset();
  }));

  // Área de clientes
  if(document.querySelector("#dash") && typeof DEMO!=="undefined"){
    document.querySelector("#saludo").textContent="Hola, "+DEMO.cliente.nombre;
    document.querySelector("#cuentas").innerHTML=DEMO.cuentas.map(c=>`
      <div class="balance-card"><small>${c.nombre}</small><div class="big">${eur(c.saldo)}</div><small>${c.iban}</small></div>`).join("");
    const tb=document.querySelector("#movs tbody"), sel=document.querySelector("#filtro");
    const cats=[...new Set(DEMO.movimientos.map(m=>m.categoria))];
    sel.innerHTML='<option value="">Todas las categorías</option>'+cats.map(c=>`<option>${c}</option>`).join("");
    const pinta=()=>{tb.innerHTML=DEMO.movimientos.filter(m=>!sel.value||m.categoria===sel.value).map(m=>`
      <tr><td>${new Date(m.fecha).toLocaleDateString("es-ES")}</td><td>${m.concepto}</td><td>${m.categoria}</td>
      <td class="${m.importe<0?"amount-neg":"amount-pos"}">${eur(m.importe)}</td></tr>`).join("")};
    sel.addEventListener("change",pinta);pinta();
    document.querySelector("#presupuesto").innerHTML=DEMO.presupuesto.map(p=>{const pc=Math.min(100,Math.round(p.gastado/p.limite*100));
      return `<div style="margin-bottom:14px"><div style="display:flex;justify-content:space-between"><span>${p.categoria}</span><span>${eur(p.gastado)} / ${eur(p.limite)}</span></div>
      <div class="bar"><span style="width:${pc}%;${p.gastado>p.limite?"background:#dc2626":""}"></span></div></div>`}).join("");
  }

  // Oficinas
  const of=document.querySelector("#oficinas");
  if(of && typeof DEMO!=="undefined") of.innerHTML=DEMO.oficinas.map(o=>`<div class="card"><h3>${o.ciudad}</h3><p>${o.direccion}<br>${o.horario}</p></div>`).join("");
});
