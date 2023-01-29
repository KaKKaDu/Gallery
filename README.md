# Gallery
This project main target is to learn as much of **javascript** and **jquery** in aspect of interacting with website layout and page elements as possible.
The main idea is to create an **interact gallery**, where you can make your own libraries, add some photos (from local files) etc. In short, I'ma make normal gallery app unless you reload the page)
That's planned to connect **firebase** in the future, but now the main target is to finish work with javascript features.
## What I've already learnt?
### Creating elements by interacting with the page (libraries in this case)
I used function **createElement** in combination with **innerHTML** and **firstElementChild** to make function, which is able to create any html element.
___
```javascript
function newlibrary(html) {
		const template = document.createElement("template");
		template.innerHTML = html.trim();
		return template.content.firstElementChild; 
}

let makelib = function(){
	let lib = newlibrary(`
			<li class="nav-item row">
				...
			</li>
		`);
	
	lib.setAttribute('id', 'menu-' + id);
```
___
Then I can add this element to the page anywhere I want:
```javascript
navigation.appendChild(lib);
```
___
Then I just started connecting all the stuff together with few functions. All other features I want to add are still in development.


