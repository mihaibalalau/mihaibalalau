window.addEventListener("DOMContentLoaded",()=>{document.body.append(n({children:Array(10).map(e=>d({text:o()}))})),renderMathInElement(document.body,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],throwOnError:!1})});const s=(e,a)=>{const t=document.createElement(e);return a.className&&(t.className=a.className),a.children&&t.append(...a.children),a.text&&(t.innerText=a.text),t},n=e=>s("div",{...e,className:"row "+(e.className??"")}),d=e=>s("div",{...e,className:"column "+(e.className??"")}),l=(e=0,a=100)=>Math.floor(Math.random()*(1+a-e)+e),o=()=>{const e=l(1,3),a=l(0,50),t=l(0,50),c=a*t;let r="";switch(e){case 1:r=`${c} = ${t} * x`;break;case 2:r=`\\frac{${c}}{x} = ${t}`;break;case 3:r=`\\frac{${c}}{${t}} = x`;break;default:throw new Error("Whoaa!")}return i(r)},i=e=>`$$${e}$$`;
