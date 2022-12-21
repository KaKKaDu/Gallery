

let navig = $("#navig");
let buton = $("#buton");
let quest = $('#quest');
window.sectop = document.getElementById("sect");
let plus = $("#plus");
let navigation = document.querySelector('.navbar-nav');
let morelink = document.getElementsByClassName('morelink');
let opt = document.getElementById("opt");
let suretex = $("#suretex");
let renam = $("#renam");
let renamcont = $("#renamcont");

let openclose = function () {
	navig.toggleClass('navbshow');
	buton.toggleClass('btnopen');
	plus.toggleClass('plusopen');
	sectop.classList.toggle('sectop');
}

function newlibrary(html) {
			const template = document.createElement("template");
			template.innerHTML = html.trim();
			return template.content.firstElementChild; 
		}


window.currentSectionId='sect';
window.currentButId = 'butdef';
let butdef = document.getElementById('butdef');
let sectdef = document.getElementById('sect');

function makeid() {
	return "_" + Math.random().toString(36).substr(2,9);
}

let makelib = function(){
	let id = makeid();
	let lib = newlibrary(`
			<li class="nav-item row">
				<a href="javascript:void(0)" class="nav-link col-8 offset-1">New ` + id +`</a>
				<a href="javascript:void(0)" class="col-3 morelink"><i class="fa-solid fa-ellipsis"></i></a>
				<ul class="option col-12 hidde">
					<li class="optli del" id = 'delete-` + id + `'>
						<a href="javascript:void(0)">Delete</a>
					</li>
					<li class="optli ren" id = 'rename-` + id + `'>
						<a href="javascript:void(0)">Rename</a>
					</li>
				</ul>
			</li>
		`);
	console.log(lib);
	
	lib.setAttribute('id', 'menu-' + id);
	navigation.appendChild(lib);
	let section = newlibrary(`
		<section id="sect" class='hidde actsect'>
			<div class="nothing">
				<h2>This library is empty. Add your first photo! `+ id +`</h2>
			</div>
		</section>
		`)
	section.setAttribute('id', 'section-' + id);
	document.body.appendChild(section);


	lib.onclick = function(event) {
		const prevbut = document.getElementById(window.currentButId);
		prevbut.classList.remove('libraryfoc');

		const but = document.getElementById('menu-' + id);
		but.classList.add('libraryfoc');
		window.currentButId = ('menu-' + id);

		const prevsection = document.getElementById(window.currentSectionId); 
		prevsection.classList.add('hidde');
		prevsection.classList.remove('currentsect');
		prevsection.classList.remove('sectop');

		const section = document.getElementById('section-' + id);
		window.sectop = document.getElementById('section-' + id);
		section.classList.remove('hidde');
		section.classList.add('currentsect');
		section.classList.add('sectop');
		window.currentSectionId = ('section-' + id); 
	}
}

butdef.onclick = function(event) {
	const prevbut = document.getElementById(window.currentButId);
	prevbut.classList.remove('libraryfoc');
	butdef.classList.add('libraryfoc');
	window.currentButId = ('butdef');

	const prevsection = document.getElementById(window.currentSectionId); 
	prevsection.classList.add('hidde');
	prevsection.classList.remove('currentsect');
	prevsection.classList.remove('sectop');
	window.sectop = sectdef;
	sectdef.classList.remove('hidde');
	sectdef.classList.add('currentsect');
	sectdef.classList.add('sectop');
	window.currentSectionId = 'sect';
}

navigation.addEventListener('click', function (cli) {
	if(cli.target.classList.contains('del') || cli.target.classList.contains('ren')) {
		navig.addClass('point');
		quest.removeClass('hidde');
		buton.addClass('point');
		let cursect = document.getElementById(window.currentSectionId);
		console.log('cursect');
		cursect.classList.add('point');
	}

	if (cli.target.classList.contains('del')) {
		suretex.html('Are u sure u want to delete this library?');
		renamcont.addClass('hidde');
	} else if (cli.target.classList.contains('ren')) {
		suretex.html('How do you want to rename this library?');
		renamcont.removeClass('hidde');
	}
})

let endquest = function (exbut) {
	navig.removeClass('point');
	quest.addClass('hidde');
	buton.removeClass('point');
	let cursect = document.getElementById(window.currentSectionId);
	cursect.classList.remove('point');
	renam.val('');
}

navigation.addEventListener('click', function(e) {
	if (e.target.classList.contains('fa-ellipsis')) {
		e.target.parentNode.parentNode.lastElementChild.classList.toggle('hidde');
	} else if (e.target.classList.contains('morelink')) {
		e.target.parentNode.lastElementChild.classList.toggle('hidde');
	}
})