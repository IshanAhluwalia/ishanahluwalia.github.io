const splits={new:[40,28,24,12],seen:[56,52,52,24]};
const labels=['Human Archive','Mecka (EgoVerse)','microagi (EgoVerse)','No human pretraining'];
const bars=document.querySelector('#bars');
function renderBars(split){bars.replaceChildren(...labels.map((label,i)=>{const row=document.createElement('div');row.className='bar-row'+(i===0?' lead':'');const head=document.createElement('div');head.className='bar-head';const name=document.createElement('span');name.textContent=label;const value=document.createElement('strong');value.textContent=splits[split][i]+'%';head.append(name,value);const track=document.createElement('div');track.className='bar-track';const fill=document.createElement('div');fill.className='bar-fill';fill.style.width=splits[split][i]+'%';track.append(fill);row.append(head,track);return row}));}
renderBars('new');
document.querySelectorAll('[data-split]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-split]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});renderBars(button.dataset.split)}));
const list=document.querySelector('.project-list');const road=document.querySelector('.road');const paths=[...road.querySelectorAll('path')];
function drawRoad(){const w=list.clientWidth,h=list.clientHeight,x=innerWidth<=700?0:w*.5;road.setAttribute('viewBox',`0 0 ${w} ${h}`);const d=`M ${x} 10 L ${x} ${Math.max(10,h-10)}`;paths.forEach(p=>p.setAttribute('d',d))}
new ResizeObserver(drawRoad).observe(list);document.fonts.ready.then(drawRoad);drawRoad();
