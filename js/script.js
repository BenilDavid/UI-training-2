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
	renderTopProducts(topProductsArray);
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
var topProductsArray = [
	{
		id: 1,
		productCategory: 'Misc',
		productTitle: 'Mug Mockup',
		price: 99.0,
		topProducts: true,
		uploadedImageSrc: 'https://source.unsplash.com/70x70/?mug,mockup',
	},
];
function renderTopProducts(toparr) {
	var topProductsShowContainer = document.querySelector(
		'.mini-product-show-container'
	);

	toparr.map((e) => {
		var topProductsShow = document.createElement('div');
		topProductsShow.setAttribute('class', 'mini-product-show');
		topProductsShowContainer.appendChild(topProductsShow);
		let topProductDetails = `
                            <img src="${e.uploadedImageSrc}" alt="" />
							<div class="product-content">
								<span class="mini-product-heading">${e.productTitle}</span>
								<div class="star">
									<img src="images/star.png" alt="" />
									<img src="images/star.png" alt="" />
									<img src="images/star.png" alt="" />
									<img src="images/star.png" alt="" />
									<img src="images/star.png" alt="" />
								</div>
								<div class="mini-price">$${e.price}</div>
							</div>
        `;
		topProductsShow.innerHTML = topProductDetails;
	});
}

const addProduct = () => {
	// productsArray = [];
	// topProductsArray = [];
	// alert('saved');
	obj = {};
	var e = document.getElementById('selectedCategory');
	var category = e.options[e.selectedIndex].text;
	obj['productCategory'] = category;
	var title = document.getElementById('title').value;
	obj['productTitle'] = title;
	var price = document.getElementById('price').value;
	obj['price'] = price;
	var topProduct = document.getElementById('topProduct').checked;
	obj['topProducts'] = topProduct;
	var uploadValue = document.querySelector('input[type="file"]').value;
	// var uploadFile = document.querySelector('input[type="file"]').files;
	obj['uploadedImageSrc'] = uploadValue.slice(12);
	// console.log(uploadFile);

	console.log(category);
	console.log(title);
	console.log(price);
	console.log(topProduct);
	console.log(uploadValue.slice(12));

	// console.log(obj);
	if (topProduct === true) {
		// remove all product cards
		var miniProductShow = document.querySelectorAll('.mini-product-show');
		miniProductShow.forEach((element) => {
			element.style.display = 'none';
		});
		alert('added to top products list');
		topProductsArray.push(obj);
		renderTopProducts(topProductsArray);
	} else {
		// remove all product cards
		var productcard = document.querySelectorAll('.product-card');
		productcard.forEach((element) => {
			element.style.display = 'none';
		});
		productsArray.push(obj);
		renderProducts(productsArray);
	}
};

function sortByPrice() {
	var e = document.getElementById('selectedSort');
	var category = e.options[e.selectedIndex].value;
	console.log(category);

	// sortedArray = [];
	if (category == 1) {
		priceHighToLow();
	} else if (category == 2) {
		priceLowToHigh();
	} else {
		console.log(category);
		// remove all product cards
		var productcard = document.querySelectorAll('.product-card');
		productcard.forEach((element) => {
			element.style.display = 'none';
		});
		console.log(productsArray);
		renderProducts(productsArray);
	}
}
// var newarr =
function priceLowToHigh() {
	// remove all product cards
	var productcard = document.querySelectorAll('.product-card');
	productcard.forEach((element) => {
		element.style.display = 'none';
	});

	if (filterCategory.length !== productsArray.length) {
		const newarr = filterCategory.sort(function (a, b) {
			return parseFloat(a.price) - parseFloat(b.price);
		});
		renderProducts(newarr);
	} else {
		const newarr = productsArray.sort(function (a, b) {
			return parseFloat(a.price) - parseFloat(b.price);
		});
		renderProducts(newarr);
	}

	// console.log(newarr);
}

function priceHighToLow() {
	// remove all product cards
	var productcard = document.querySelectorAll('.product-card');
	productcard.forEach((element) => {
		element.style.display = 'none';
	});

	if (filterCategory.length !== productsArray.length) {
		const newarr = filterCategory.sort(function (a, b) {
			return parseFloat(b.price) - parseFloat(a.price);
		});
		renderProducts(newarr);
	} else {
		const newarr = productsArray.sort(function (a, b) {
			return parseFloat(b.price) - parseFloat(a.price);
		});
		renderProducts(newarr);
	}
}

function rangeSlider(el) {
	console.log(el.value);
	var priceRange = document.querySelector('.price-range b span');
	priceRange.innerHTML = el.value;

	rangeChanged(el.value);
}

function rangeChanged(val) {
	// remove all product cards
	var productcard = document.querySelectorAll('.product-card');
	productcard.forEach((element) => {
		element.style.display = 'none';
	});

	var filterPrice = [];
	productsArray.forEach((arr) => {
		if (arr.price < val) {
			filterPrice.push(arr);
		}
	});
	renderProducts(filterPrice);
}

var filterCategory = productsArray;

const filterByCategory = (category) => {
	// remove all product cards
	var productcard = document.querySelectorAll('.product-card');
	productcard.forEach((element) => {
		element.style.display = 'none';
	});

	var SelectedCategoryName = category.textContent;

	var temp = [];
	productsArray.forEach((arr) => {
		if (arr.productCategory === SelectedCategoryName) {
			temp.push(arr);
		}
	});
	filterCategory = temp;
	console.log(filterCategory);
	renderProducts(filterCategory);
	// productsArray = filterCategory;
};
