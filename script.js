const tUbah = document.createElement('button');
const teksUbah = document.createTextNode('Ubah Warna');
tUbah.appendChild(teksUbah);
tUbah.setAttribute('type', 'button');
const tbl = document.getElementsByClassName('tbl')[0];
tbl.appendChild(tUbah);

tUbah.addEventListener('click', function() {
	document.body.classList.toggle('maroon');
});

const tAcak = document.createElement('button');
const text = document.createTextNode('Acak Warna');
tAcak.appendChild(text);
tAcak.setAttribute('type', 'button');
tUbah.after(tAcak);

tAcak.addEventListener('click', function(){
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

const sMerah = document.querySelector('input[name=sMerah]');
sMerah.defaultValue = 0;
const sHijau = document.querySelector('input[name=sHijau]');
sHijau.defaultValue = 0;
const sBiru = document.querySelector('input[name=sBiru]');
sBiru.defaultValue = 0;

sMerah.addEventListener('input', function(){
	const r =sMerah.value;
	const g =sHijau.value;
	const b =sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sHijau.addEventListener('input', function(){
	const r =sMerah.value;
	const g =sHijau.value;
	const b =sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener('input', function(){
	const r =sMerah.value;
	const g =sHijau.value;
	const b =sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

const h1 = document.getElementsByTagName('h1')[0];
document.body.addEventListener('mousemove', function(e){
	const xPos = Math.round((e.clientX / window.innerWidth) * 255);
	const yPos = Math.round((e.clientY / window.innerHeight) * 255);
	const zPos = Math.round((xPos + yPos) / 3);

	h1.style.backgroundColor = 'rgb('+ xPos +','+ yPos +','+ zPos +')';
	h1.style.color = 'rgb('+ zPos +','+ xPos +','+ yPos +')';
	console.log(h1.style.backgroundColor);
});