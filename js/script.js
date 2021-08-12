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
	{
		id: 8,
		productCategory: 'Misc',
		productTitle: 'Poster Mockup',
		price: 89.0,
		topProducts: false,
		sale: false,
		uploadedImageSrc: 'https://source.unsplash.com/400x300/?Poster',
	},
	// {
	// 	id: 9,
	// 	productCategory: 'Misc',
	// 	productTitle: 'Poster Mockup',
	// 	price: 89.0,
	// 	topProducts: false,
	// 	sale: false,
	// 	uploadedImageSrc: 'https://source.unsplash.com/400x300/?Poster',
	// },
	// {
	// 	id: 10,
	// 	productCategory: 'Misc',
	// 	productTitle: 'Poster Mockup',
	// 	price: 89.0,
	// 	topProducts: false,
	// 	sale: false,
	// 	uploadedImageSrc: 'https://source.unsplash.com/400x300/?Poster',
	// },
	// {
	// 	id: 11,
	// 	productCategory: 'Misc',
	// 	productTitle: 'Poster Mockup',
	// 	price: 89.0,
	// 	topProducts: false,
	// 	sale: false,
	// 	uploadedImageSrc: 'https://source.unsplash.com/400x300/?Poster',
	// },
];

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
var maxProductsPerPage = 9;
var pageCount = 1;

window.onload = function () {
	renderProducts(productsArray);
	renderTopProducts(topProductsArray);

	// need to work on this part
	if (productsArray.length > maxProductsPerPage) {
		pageCount++;
		console.log(pageCount);

		if (pageCount == 2) {
			var pagination = document.querySelector('.pagination');
			console.log(pagination);
			var pageNum = document.createElement('a');
			pageNum.setAttribute('class', 'page');
			pageNum.setAttribute('onclick', 'displayProducts(this)');
			pageNum.textContent = 2;
			pagination.appendChild(pageNum);
		}
		if (productsArray.length > 2 * maxProductsPerPage) {
			var pagination = document.querySelector('.pagination');
			console.log(pagination);
			var pageNum = document.createElement('a');
			pageNum.setAttribute('class', 'page');
			pageNum.setAttribute('onclick', 'displayProducts(this)');
			pageNum.textContent = 3;
			pagination.appendChild(pageNum);
		}
	}
};
function editProduct() {
	var id = document.getElementById('productId');
	var currentSelectedId = idarray[idarray.length - 1];
	// console.log(idarray[idarray.length - 1]);
	productsArray.forEach((obj) => {
		// console.log(obj);
		if (obj.id == currentSelectedId) {
			// alert('woring');
			console.log(obj);
			var e = document.getElementById('selectedCategory');
			var category = e.options[e.selectedIndex].text;
			obj.productCategory = category;
			var title = document.getElementById('title').value;
			obj.productTitle = title;
			var price = document.getElementById('price').value;
			obj.price = price;
			var topProduct = document.getElementById('topProduct').checked;
			obj.topProducts = topProduct;
			// var uploadValue = document.querySelector('input[type="file"]').value;
			// // // var uploadFile = document.querySelector('input[type="file"]').files;
			// obj.uploadedImageSrc = uploadValue.slice(12);
			// // console.log(uploadFile);

			var uploadFile = document.querySelector('input[type="file"]').files[0];
			var image = URL.createObjectURL(uploadFile);
			obj.uploadedImageSrc = image;

			console.log(category);
			console.log(title);
			console.log(price);
			console.log(topProduct);
			// console.log(uploadValue);
			console.log(obj);
		}
	});
	var productcard = document.querySelectorAll('.product-card');
	productcard.forEach((element) => {
		element.style.display = 'none';
	});
	renderProducts(productsArray);
}

// fiving default values for the product modal
var idarray = [];
function modalOpen(element) {
	var modal = document.getElementById('myModal');
	var save = document.getElementById('save');
	var modalProductCategory = document.querySelectorAll(
		'.product-category select option'
	);
	var modalProductTitle = document.querySelector('.product-title input');
	var modalProductPrice = document.querySelector('.product-price input');
	// var id = document.getElementById('productId');
	var clikedProductId = element.childNodes[3].childNodes[1].innerHTML;
	// changing the onclick function
	save.setAttribute('onclick', 'editProduct()');

	var body = document.getElementsByTagName('body')[0];
	modal.style.display = 'block';
	body.style.overflow = 'hidden';
	idarray.push(clikedProductId);
	productsArray.forEach((obj) => {
		if (obj.id == clikedProductId) {
			console.log(obj);
			modalProductCategory.forEach((option) => {
				if (option.value === obj.productCategory) {
					console.log(option);
					option.setAttribute('selected', '');
				}
			});
			modalProductTitle.setAttribute('value', obj.productTitle);
			modalProductPrice.setAttribute('value', obj.price);
		}
	});
	console.log(clikedProductId);
}

function displayProducts(element) {
	// unactive background for all page number
	var allPageNumber = document.querySelectorAll('.page');
	allPageNumber.forEach((elmnt) => {
		elmnt.style.backgroundColor = '#fff';
		elmnt.style.color = '#303030';
	});
	// active background for clicked pageNumber
	element.style.backgroundColor = 'red';
	element.style.color = '#fff';

	// remove all product cards
	var productcard = document.querySelectorAll('.product-card');
	productcard.forEach((element) => {
		element.style.display = 'none';
	});
	var productListing = document.querySelector('.product-listing');

	productsArray.map((e, index) => {
		// if page number 1 is clicked
		if (element.textContent == 1) {
			if (index < maxProductsPerPage) {
				showProducts(productListing, e);
			}
		}
		// if page number 2 is clicked
		else if (element.textContent == 2) {
			if (index >= maxProductsPerPage && index < 2 * maxProductsPerPage) {
				showProducts(productListing, e);
			}
		}
	});
}
function renderProducts(arr) {
	var productListing = document.querySelector('.product-listing');

	arr.map((e, index) => {
		if (index < maxProductsPerPage) {
			showProducts(productListing, e);
		}
	});
}
function showProducts(productListing, e) {
	var productCard = document.createElement('div');
	productCard.setAttribute('class', 'product-card');
	productCard.setAttribute('id', 'cardBtn');
	productCard.setAttribute('onclick', 'modalOpen(this)');
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
                />
            </div>
            <div class="product-details">
				<span id="productId" style="display: none">${e.id}</span>
                <div class="product-name">${e.productTitle}</div>
                <div class="product-price">$${e.price}</div>
            <div/>
        `;
	productCard.innerHTML = productCardDetails;
}
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

//adding product to the product list
const addProduct = () => {
	// hide modal after save
	var modal = document.getElementById('myModal');
	modal.style.display = 'none';
	body.style.overflow = 'auto';

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
	var uploadFile = document.querySelector('input[type="file"]').files[0];
	var image = URL.createObjectURL(uploadFile);
	obj['uploadedImageSrc'] = image;

	console.log(image);
	console.log(category);
	console.log(title);
	console.log(price);
	console.log(topProduct);

	// console.log(obj);
	if (topProduct === true) {
		// remove all top product cards
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

// selecting sort by price type (ASC/DESC)
function sortByPrice() {
	var e = document.getElementById('selectedSort');
	var category = e.options[e.selectedIndex].value;
	console.log(category);

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

// filter array based on the chosen category
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
