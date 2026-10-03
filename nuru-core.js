/* NURU – núcleo compartido por index.html y admin.html */
(function(){
const DIR="imagenes productos/";
const STOP=new Set(["de","del","la","el","los","las","en","con","y","un","una"]);
const norm=s=>String(s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
function key(s){
  s=norm(s).replace(/\.(jpe?g|png|webp|gif|avif)$/,"");
  return s.split(/[^a-z0-9]+/).filter(w=>w&&!STOP.has(w)).join("-");
}
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const money=n=>"$ "+Math.round(n).toLocaleString("es-AR");

const DEFAULT={v:3,
 config:{
  wa:"5493764828027", btn:"Pedir por WhatsApp",
  customBtn:"Pedir una vela personalizada", customWa:"5493764828027",
  customMsg:"¡Hola Nuru! 🕯️ Quiero pedir una vela personalizada. Te cuento lo que tengo en mente:",
  heroTitle:"Deja que la vida te sorprenda", heroSub:"Velas de soja, cuencos y bandejas de yeso hechas a mano en Posadas, Misiones.",
  promo:"",
  insta:"nuru_aromas", phone:"376 4828027",
  pagos:["Efectivo","Transferencia"],
  envios:[{n:"Retiro en punto de encuentro – Posadas",p:0},{n:"Retiro en punto de encuentro – Garupá",p:0}],
  beneficios:[
    {icon:"🕯️", text:"Velas de soja hechas a mano"},
    {icon:"📍", text:"Retiro en Posadas y Garupá"},
    {icon:"💳", text:"Efectivo y transferencia"},
    {icon:"🎁", text:"Souvenirs personalizados"}
  ],
  pagosIcon:"💳",
  cuidadosTitulo:"Cuidados de tu vela",
  cuidadosItems:[
    "La primera vez que la enciendas, dejala prendida hasta que toda la capa superior de cera se derrita hasta los bordes.",
    "Cortá el pabilo a unos 0,5 cm antes de cada encendido para evitar humo negro.",
    "No la dejes encendida más de 4 horas seguidas.",
    "No muevas ni toques el recipiente mientras la cera esté líquida.",
    "Mantenela lejos de niños, mascotas, objetos que puedan encenderse y corrientes de aire."
  ]
 },
 aromas:["Lavanda","Rosa búlgara","Vainilla","Coco Vainilla","Naranja Pimienta","Bergamota","Gardenia","Pitanga"],
 cats:[
  {id:"velas",n:"Velas de soja",e:"🕯️"},
  {id:"cuencos",n:"Cuencos de yeso",e:"🥣"},
  {id:"bandejas",n:"Bandejas de yeso",e:"🍃"},
  {id:"souvenirs",n:"Souvenirs",e:"🎁"},
  {id:"recarga",n:"Recarga de cuencos",e:"🌷"}
 ],
 prods:[
  {id:"p1",n:"Vela soja",c:"velas",p:9000,tam:"Vaso de vidrio",d:"Vela de soja con flores secas. Elegí tu aroma.",aroma:true},
  {id:"p2",n:"Vela flor margarita",c:"velas",p:4500,tam:"Con packaging kraft",d:"Ideal para regalar. Se puede personalizar con nombre.",aroma:true},
  {id:"p3",n:"Vela osito",c:"velas",p:7500,tam:"Sobre tronco",d:"Osito de soja sobre base decorada.",aroma:true},
  {id:"p4",n:"Vela flor de loto",c:"velas",p:6500,tam:"",d:"Flor de loto con detalles florales.",aroma:true},
  {id:"p5",n:"Cuenco Ondulado",c:"cuencos",p:6000,tam:"6,3 cm alto · 5,5 cm ancho",d:"Cuenco de yeso cerámico.",aroma:true},
  {id:"p6",n:"Cuenco Plisado",c:"cuencos",p:6000,tam:"6,0 cm alto · 6,5 cm ancho",d:"Cuenco de yeso cerámico.",aroma:true},
  {id:"p7",n:"Cuenco Tronco flor",c:"cuencos",p:6500,tam:"4,3 cm alto · 7,0 cm ancho",d:"Cuenco con tapa en forma de flor.",aroma:true},
  {id:"p8",n:"Cuenco Caracol",c:"cuencos",p:6500,tam:"4,0 cm alto · 11,0 cm ancho",d:"Cuenco de yeso cerámico.",aroma:true},
  {id:"p9",n:"Cuenco Rayado",c:"cuencos",p:6000,tam:"4,0 cm alto · 8,0 cm ancho",d:"Cuenco de yeso cerámico.",aroma:true},
  {id:"p10",n:"Cuenco Círculo tejido",c:"cuencos",p:5500,tam:"3,0 cm alto · 6,0 cm ancho",d:"También disponible en forma de corazón.",aroma:true},
  {id:"p11",n:"Cuenco Flor de loto",c:"cuencos",p:6500,tam:"4,0 cm alto · 7,5 cm ancho",d:"Cuenco de yeso cerámico.",aroma:true},
  {id:"p12",n:"Cuenco Plisado liso",c:"cuencos",p:6000,tam:"6,5 cm alto · 6,5 cm ancho",d:"Cuenco de yeso cerámico.",aroma:true},
  {id:"p13",n:"Bandeja Hojas",c:"bandejas",p:5000,tam:"Uva 16×15,3 cm · Árbol 17×12 cm",d:"Bandeja de yeso en forma de hoja.",aroma:false},
  {id:"p14",n:"Bandeja Bublee",c:"bandejas",p:5000,tam:"11,5 cm",d:"Bandeja de yeso con borde de burbujas.",aroma:false},
  {id:"p15",n:"Bandeja Ovalada",c:"bandejas",p:5500,tam:"17,5 × 9,2 cm",d:"Bandeja de yeso ovalada.",aroma:false},
  {id:"p16",n:"Souvenir vela margarita",c:"souvenirs",p:0,tam:"Personalizado",d:"Souvenirs para cumpleaños, 15, bodas y más. Consultá por cantidad.",aroma:false},
  {id:"p17",n:"Recarga de cuenco",c:"recarga",p:0,tam:"",d:"Recargamos tu cuenco con vela de soja del aroma que elijas.",aroma:true}
 ]
};

function clone(o){return JSON.parse(JSON.stringify(o))}
function normalize(d){
  d=d||{}; const B=clone(DEFAULT);
  d.config=Object.assign(B.config,d.config||{});
  if(!d.config.beneficios) d.config.beneficios=B.config.beneficios;
  if(!d.config.cuidadosItems) d.config.cuidadosItems=B.config.cuidadosItems;
  d.cats=Array.isArray(d.cats)?d.cats:B.cats;
  d.prods=Array.isArray(d.prods)?d.prods:B.prods;
  d.aromas=Array.isArray(d.aromas)?d.aromas:B.aromas;
  d.v=d.v||1; return d;
}
function readLS(k,def){try{const x=JSON.parse(localStorage.getItem(k));return x==null?def:x}catch(e){return def}}
function writeLS(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}}

async function load(opts){
  opts=opts||{}; let remote=null;
  try{const r=await fetch("datos.json?t="+Date.now(),{cache:"no-store"}); if(r.ok) remote=await r.json();}catch(e){}
  const draft=opts.ignoreDraft?null:readLS("nuru_draft",null);
  let d=remote||DEFAULT;
  if(draft&&(!remote||(draft.v||0)>(remote.v||0))) d=draft;
  return {data:normalize(clone(d)),fromFile:!!remote,usingDraft:d===draft&&!!draft};
}

const EXT=["jpg","png","webp","jpeg","JPG","PNG"];
function pend(){return readLS("nuru_pend",{})}
function url(f){return DIR.replace(" ","%20")+encodeURIComponent(f)}

function imgCandidates(p){
  const pe=pend(), out=[];
  if(p.img){ if(pe[p.img]) out.push(pe[p.img]); out.push(url(p.img)); return out; }
  const words=norm(p.n).split(/[^a-z0-9]+/).filter(Boolean), kw=words.filter(w=>!STOP.has(w));
  const bases=new Set();
  [words,kw].forEach(w=>{ if(w.length){ bases.add(w.join("_")); bases.add(w.join("-")); bases.add(w.join(" ")); bases.add(w.join("")); } });
  bases.forEach(b=>{ const pk=Object.keys(pe).find(k=>key(k)===key(b)); if(pk&&!out.includes(pe[pk])) out.push(pe[pk]); });
  bases.forEach(b=>EXT.forEach(e=>out.push(url(b+"-."+e))));
  return out;
}

function parseOff(v){ if(!v) return null; const m=/^([pm])(\d+(?:\.\d+)?)$/.exec(v); return m?{t:m[1],n:+m[2]}:null; }
function offLabel(v){const o=parseOff(v); return !o?"":(o.t==="p"?"-"+o.n+"%":"-"+money(o.n));}
function applyOff(price,v){const o=parseOff(v); if(!o) return price; return Math.max(0,o.t==="p"?price*(1-o.n/100):price-o.n);}
function bestOff(p,d){
  if(p.off) return p.off;
  const c=d.cats.find(c=>c.id===p.c);
  if(c&&c.off&&!p.noCat) return c.off;
  return "";
}
function priceOf(p,d){return applyOff(p.p||0,bestOff(p,d))}

window.NURU={DIR,key,norm,esc,money,DEFAULT,clone,normalize,load,readLS,writeLS,imgCandidates,url,parseOff,offLabel,applyOff,bestOff,priceOf,pend,
 waLink:(num,msg)=> "https://wa.me/"+String(num||"").replace(/\D/g,"")+"?text="+encodeURIComponent(msg)};

document.addEventListener("error",function(e){
  const t=e.target; if(!t||t.tagName!=="IMG"||!t.dataset.c) return;
  let a; try{a=JSON.parse(t.dataset.c)}catch(x){a=[]}
  if(a.length){t.src=a.shift(); t.dataset.c=JSON.stringify(a);}
  else{t.style.display="none"; t.parentNode&&t.parentNode.classList.add("noimg");}
},true);
})();