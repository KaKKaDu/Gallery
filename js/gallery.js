

let navig = $("#navig");
let buton = $("#buton");
let sect = $("#sect");
let plus = $("#plus");
let navigation = document.querySelector('.navbar-nav');
let morelink = document.getElementsByClassName('morelink');
let opt = $("#opt");

let openclose = function () {
	navig.toggleClass('navbshow');
	buton.toggleClass('btnopen');
	plus.toggleClass('plusopen');
	sect.toggleClass('sectop');
}

function newlibrary(html) {
			const template = document.createElement("template");
			template.innerHTML = html.trim();
			return template.content.firstElementChild; 
		}

function makeid() {
	return "_" + Math.random().toString(36).substr(2,9);
}

let makelib = function(){
	let lib = newlibrary(`
			<li class="nav-item row">
				<a href="javascript:void(0)" class="nav-link col-8 offset-1">New</a>
				<a href="javascript:void(0)" class="col-3 morelink"><i class="fa-solid fa-ellipsis"></i></a>
				<ul class="option col-12 hidde" id="opt">
					<li class="optli">
						<a href="javascript:void(0)">Delete</a>
					</li>
					<li class="optli">
						<a href="javascript:void(0)">Rename</a>
					</li>
				</ul>
			</li>
		`);
	lib.setAttribute('id', makeid())
	navigation.appendChild(lib);
	console.log(morelink);
}

navigation.addEventListener('click', function(e) {
	if (e.target.classList.contains('fa-ellipsis')) {
		e.target.parentNode.parentNode.lastElementChild.classList.toggle('hidde');
	} else if (e.target.classList.contains('morelink')) {
		console.log(e.target.parentNode);
	}
})


/*for (let i = 0; i < morelink.length; i++) {
  	morelink[i].addEventListener('click', function() {
  	alert('Спасибо!');
  })

  if (e.target.classList.contains('morelink')) {
		console.log(e.target.parentNode);
	}
}*/



/*morelink.addEventListener('click', function(e) {
	let libid = e.target.parentNode;
	console.log(libid);
})*/
