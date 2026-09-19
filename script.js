const courses={
"Mentalidade Forte":["Disciplina Diária","Controle Emocional","Foco Total","Confiança","Plano de Evolução"],
"Hábitos Saudáveis":["Rotina Matinal","Sono de Qualidade","Alimentação","Constância","Desafio 7 Dias"],
"Produtividade":["Organização","Gestão do Tempo","Eliminando Distrações","Planejamento","Execução"],
"Boxe para Iniciantes":["Base e Guarda","Jab e Direto","Esquivas","Combinações","Treino Completo"]};
const grid=document.getElementById('cursos');
Object.keys(courses).forEach(n=>{
 const d=document.createElement('div');
 d.className='card';
 d.innerHTML=`<h3>${n}</h3><p>5 vídeos • até 30 min</p><div class="price">R$ 23,90</div><button>Comprar</button>`;
 d.querySelector('button').onclick=()=>openPix(n);
 grid.appendChild(d);
});
let current="";
function openPix(n){current=n;curso.textContent=n+" • R$ 23,90";pix.classList.remove('hidden')}
function copyPix(){navigator.clipboard.writeText("82993503710");alert("Pix copiado!")}
function unlock(){pix.classList.add('hidden');titulo.textContent=current;aulas.innerHTML=courses[current].map((a,i)=>`<div class='lesson'>🎥 Aula ${i+1}: ${a}<br><small>Até 30 minutos</small></div>`).join('');aluno.classList.remove('hidden')}
function closeAll(){aluno.classList.add('hidden')}
