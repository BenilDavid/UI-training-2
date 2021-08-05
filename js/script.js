var productsArray = [
	{
		id: 1,
		productCategory: 'Books',
		productTitle: 'Plain Notebook',
		price: 109.0,
		topProducts: false,
		sale: true,
		uploadedImageSrc: 'https://source.unsplash.com/400x300/?notebook',
	},
	{
		id: 2,
		productCategory: 'Bags',
		productTitle: 'Casual HandBag',
		price: 49.0,
		topProducts: false,
		sale: false,
		uploadedImageSrc: 'https://source.unsplash.com/400x300/?handbag',
	},
	{
		id: 3,
		productCategory: 'Books',
		productTitle: 'e-Book Reader',
		price: 199.0,
		topProducts: false,
		sale: true,
		uploadedImageSrc: 'https://source.unsplash.com/400x300/?e-book',
	},
	{
		id: 4,
		productCategory: 'Books',
		productTitle: 'Hard CoverBook',
		price: 59.0,
		topProducts: false,
		sale: false,
		uploadedImageSrc: 'https://source.unsplash.com/400x300/?Book',
	},
	{
		id: 5,
		productCategory: 'Misc',
		productTitle: 'Mug Mockup',
		price: 99.0,
		topProducts: false,
		sale: false,
		uploadedImageSrc: 'https://source.unsplash.com/400x300/?Mug',
	},
	{
		id: 6,
		productCategory: 'Hoodie/T-shirt',
		productTitle: 'Hoodie Red',
		price: 599.0,
		topProducts: true,
		sale: true,
		uploadedImageSrc: 'https://source.unsplash.com/400x300/?Hoodie',
	},
	{
		id: 7,
		productCategory: 'Misc',
		productTitle: 'Poster Mockup',
		price: 89.0,
		topProducts: false,
		sale: false,
		uploadedImageSrc: 'https://source.unsplash.com/400x300/?Poster',
	},
];

window.onload = function () {
	renderProducts(productsArray);
};

function renderProducts(arr) {
	var productListing = document.querySelector('.product-listing');

	arr.map((e) => {
		var productCard = document.createElement('div');
		productCard.setAttribute('class', 'product-card');
		productListing.appendChild(productCard);
		let productCardDetails = `
            <div class="product-image">
                ${
									e.sale === true
										? '<button class="product-sale">sale</button>'
										: ''
								}
                <img
                    src="${e.uploadedImageSrc}"
                    alt=""
                    id="preview"
                />
            </div>
            <div class="product-details">
                <div class="product-name">${e.productTitle}</div>
                <div class="product-price">$${e.price}</div>
            </div>
        `;
		productCard.innerHTML = productCardDetails;
	});
}

const addProduct = () => {
	productsArray = [];
	alert('saved');
	obj = {};
	var e = document.getElementById('selectedCategory');
	var category = e.options[e.selectedIndex].text;
	obj['productCategory'] = category;
	console.log(category);
	var title = document.getElementById('title').value;
	obj['productTitle'] = title;
	console.log(title);
	var price = document.getElementById('price').value;
	obj['price'] = price;
	console.log(price);
	var topProduct = document.getElementById('topProduct').checked;
	obj['topProducts'] = topProduct;
	console.log(topProduct);
	var upload = document.querySelector('input[type="file"]').value;

	obj['uploadedImageSrc'] = upload.slice(12);
	console.log(upload.slice(12));
	console.log(obj);

	productsArray.push(obj);
	renderProducts(productsArray);
};

const filterByCategory = (category) => {
	// remove all product cards
	var productcard = document.querySelectorAll('.product-card');
	productcard.forEach((element) => {
		element.style.display = 'none';
	});

	var SelectedCategoryName = category.textContent;

	var filterCategory = [];
	productsArray.forEach((arr) => {
		if (arr.productCategory === SelectedCategoryName) {
			filterCategory.push(arr);
		}
		// else if (arr.productCategory === 'Hoodie/T-shirt') {
		// 	filterCategory.push(arr);
		// }
	});
	console.log(filterCategory);
	renderProducts(filterCategory);
};
