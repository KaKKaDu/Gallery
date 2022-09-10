

let navig = $("#navig");
let buton = $("#buton");
window.sectop = document.getElementById("sect");
let plus = $("#plus");
let navigation = document.querySelector('.navbar-nav');
let morelink = document.getElementsByClassName('morelink');
let opt = document.getElementById("opt");;

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
					<li class="optli" id = 'delete-` + id + `'>
						<a href="javascript:void(0)">Delete</a>
					</li>
					<li class="optli" id = 'rename-` + id + `'>
						<a href="javascript:void(0)">Rename</a>
					</li>
				</ul>
			</li>
		`);
	console.log(lib);
	
	lib.setAttribute('id', 'menu-' + id);
	navigation.appendChild(lib);
	let section = newlibrary(`
		<section id="sect" class='hidde'>
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

navigation.addEventListener('click', function(e) {
	if (e.target.classList.contains('fa-ellipsis')) {
		e.target.parentNode.parentNode.lastElementChild.classList.toggle('hidde');
	} else if (e.target.classList.contains('morelink')) {
		e.target.parentNode.lastElementChild.classList.toggle('hidde');
	}
})

/*<li class="optli" id = 'delete-` + id + `'>
						<a href="javascript:void(0)">Delete</a>
					</li>
					<li class="optli" id = 'rename-` + id + `'>
						<a href="javascript:void(0)">Rename</a>
					</li>*/
