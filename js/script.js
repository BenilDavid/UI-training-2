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
		price: 19.0,
		topProducts: false,
		sale: false,
		uploadedImageSrc: 'https://source.unsplash.com/400x300/?Poster',
	},
	{
		id: 9,
		productCategory: 'Misc',
		productTitle: 'Poster Mockup',
		price: 20.0,
		topProducts: false,
		sale: false,
		uploadedImageSrc: 'https://source.unsplash.com/400x300/?Poster',
	},
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

// onload rendering
window.onload = function () {
	renderProducts(productsArray);
	renderTopProducts(topProductsArray);

	rangeCheck();

	window.addEventListener('click', function (event) {
		var modal = document.getElementById('myModal');
		if (event.target == modal) {
			var body = document.getElementsByTagName('body')[0];
			var title = document.getElementById('title');
			var price = document.getElementById('price');
			modal.style.display = 'none';
			body.style.overflow = 'auto';
			title.value = '';
			price.value = '';
		}
	});
};

function checkPagination() {
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
}

// pagination
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
				checkPagination();
			}
		}
		// if page number 2 is clicked
		else if (element.textContent == 2) {
			if (index >= maxProductsPerPage && index < 2 * maxProductsPerPage) {
				showProducts(productListing, e);
				checkPagination();
			}
		}
	});
}

function closeModal() {
	var modal = document.getElementById('myModal');
	var body = document.getElementsByTagName('body')[0];
	var title = document.getElementById('title');
	var price = document.getElementById('price');
	modal.style.display = 'none';
	body.style.overflow = 'auto';
	title.value = '';
	price.value = '';
}
function cancel() {
	var modal = document.getElementById('myModal');
	var body = document.getElementsByTagName('body')[0];
	var title = document.getElementById('title');
	var price = document.getElementById('price');
	modal.style.display = 'none';
	body.style.overflow = 'auto';
	title.value = '';
	price.value = '';
}
// add product button
function addProductBtn() {
	var modal = document.getElementById('myModal');
	var body = document.getElementsByTagName('body')[0];

	var save = document.getElementById('save');
	save.setAttribute('onclick', 'addProduct()');

	var title = document.getElementById('title');
	var price = document.getElementById('price');
	var topProduct = document.getElementById('topProduct').checked;
	var uploadFile = document.querySelector('input[type="file"]').files[0];
	title.value = '';
	price.value = '';
	console.log(title);
	console.log(price);
	console.log(topProduct);
	console.log(uploadFile);
	modal.style.display = 'block';
	body.style.overflow = 'hidden';
}

var idarray = [];
// when product is clicked
// showing default values for the product modal
function productClicked(element) {
	var modal = document.getElementById('myModal');
	var save = document.getElementById('save');
	var modalProductCategory = document.querySelectorAll(
		'.product-category select option'
	);
	var modalProductTitle = document.querySelector('#title');
	var modalProductPrice = document.querySelector('#price');
	var clikedProductId = element.childNodes[3].childNodes[1].innerHTML;
	// changing the onclick function
	save.setAttribute('onclick', 'editProduct()');

	// showing the modal
	var body = document.getElementsByTagName('body')[0];
	modal.style.display = 'block';
	body.style.overflow = 'hidden';

	// store product id
	idarray.push(clikedProductId);

	// setting default values for the product that is clicked
	productsArray.forEach((obj) => {
		if (obj.id == clikedProductId) {
			console.log(obj);
			modalProductCategory.forEach((option) => {
				if (option.value === obj.productCategory) {
					option.setAttribute('selected', '');
				}
			});
			modalProductTitle.value = obj.productTitle;
			modalProductPrice.value = obj.price;
		}
	});
	console.log(modalProductTitle);
	console.log(modalProductPrice);
}

// save button when editting a product details
function editProduct() {
	var e = document.getElementById('selectedCategory');
	var title = document.getElementById('title').value;
	var price = document.getElementById('price').value;
	var topProduct = document.getElementById('topProduct').checked;
	var uploadFile = document.querySelector('input[type="file"]').files[0];

	if (!title || !price) {
		if (!title) {
			document.getElementById('error-msg-title').innerHTML =
				'Please Enter the Title';
		} else {
			document.getElementById('error-msg-title').innerHTML = '';
		}
		if (!price) {
			document.getElementById('error-msg-price').innerHTML =
				'Please Enter the Price';
		} else {
			document.getElementById('error-msg-price').innerHTML = '';
		}
	} else {
		// hide modal after save
		var modal = document.getElementById('myModal');
		var body = document.getElementsByTagName('body')[0];
		modal.style.display = 'none';
		body.style.overflow = 'auto';

		// var id = document.getElementById('productId');
		var currentSelectedId = idarray[idarray.length - 1];
		productsArray.forEach((obj) => {
			if (obj.id == currentSelectedId) {
				console.log(obj);
				var category = e.options[e.selectedIndex].text;
				obj.productCategory = category;
				obj.productTitle = title;
				obj.price = parseInt(price);
				obj.topProducts = topProduct;

				if (uploadFile) {
					var image = URL.createObjectURL(uploadFile);
					obj.uploadedImageSrc = image;
				}

				console.log(category);
				console.log(title);
				console.log(price);
				console.log(topProduct);
				console.log(obj);
			}
		});
		var productcard = document.querySelectorAll('.product-card');
		productcard.forEach((element) => {
			element.style.display = 'none';
		});
		renderProducts(productsArray);
		rangeCheck();
		checkPagination();
	}
}

// rendering products
function renderProducts(arr) {
	var productListing = document.querySelector('.product-listing');

	arr.map((e, index) => {
		if (index < maxProductsPerPage) {
			showProducts(productListing, e);
			checkPagination();
		}
	});
}

// HTML for products
function showProducts(productListing, e) {
	var productCard = document.createElement('div');
	productCard.setAttribute('class', 'product-card');
	productCard.setAttribute('id', 'cardBtn');
	productCard.setAttribute('onclick', 'productClicked(this)');
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

// rendering top products in sidebar
function renderTopProducts(toparr) {
	var topProductsShowContainer = document.querySelector(
		'.mini-product-show-container'
	);
	toparr.map((e) => {
		var topProductsShow = document.createElement('div');
		topProductsShow.setAttribute('class', 'mini-product-show');
		topProductsShowContainer.appendChild(topProductsShow);
		let topProductDetails = `
                            <img style="width: 70px;height:70px;" src="${e.uploadedImageSrc}" alt="" />
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

// save button for add product button
//adding product to the product list (when Save button is clicked)
const addProduct = () => {
	obj = {};
	obj['id'] = productsArray.length + 1;
	var e = document.getElementById('selectedCategory');
	var category = e.options[e.selectedIndex].text;
	obj['productCategory'] = category;
	var title = document.getElementById('title').value;
	obj['productTitle'] = title;
	var price = document.getElementById('price').value;
	obj['price'] = parseInt(price);
	var topProduct = document.getElementById('topProduct').checked;
	obj['topProducts'] = topProduct;
	var uploadFile = document.querySelector('input[type="file"]').files[0];

	console.log(uploadFile);
	if (uploadFile != undefined) {
		var imgName = document.querySelector('.show-img-name');
		imgName.innerHTML = uploadFile.name;
	}
	if (!title || !price || uploadFile == undefined) {
		if (!title) {
			document.getElementById('error-msg-title').innerHTML =
				'Please Enter the Title';
			// alert('no file added');
		} else {
			document.getElementById('error-msg-title').innerHTML = '';
		}
		if (!price) {
			document.getElementById('error-msg-price').innerHTML =
				'Please Enter the Price';
		} else {
			document.getElementById('error-msg-price').innerHTML = '';
		}
		if (uploadFile == undefined) {
			document.getElementById('error-msg-file').innerHTML =
				'Please Upload the file';
		} else {
			document.getElementById('error-msg-file').innerHTML = '';
		}
	} else {
		var image = URL.createObjectURL(uploadFile);
		obj['uploadedImageSrc'] = image;

		// hide modal after save
		var modal = document.getElementById('myModal');
		var body = document.getElementsByTagName('body')[0];
		modal.style.display = 'none';
		body.style.overflow = 'auto';

		// unactive background for all page
		var pageNum = document.querySelectorAll('.pagination a');
		pageNum.forEach((pageNo) => {
			pageNo.style.backgroundColor = '#fff';
			pageNo.style.color = '#303030';
		});
		// active background for first page
		var pageNum1 = document.querySelectorAll('.pagination a')[0];
		pageNum1.style.backgroundColor = 'red';
		pageNum1.style.color = '#fff';

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
			// alert('added to top products list');
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
			rangeCheck();
		}
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
		defaultSorting();
	}
}

function defaultSorting() {
	// remove all product cards
	var productcard = document.querySelectorAll('.product-card');
	productcard.forEach((element) => {
		element.style.display = 'none';
	});
	console.log(filterCategory);
	const newarr = filterCategory.sort(function (a, b) {
		return parseFloat(a.id) - parseFloat(b.id);
	});
	console.log(newarr);
	renderProducts(newarr);
}

function priceLowToHigh() {
	// remove all product cards
	var productcard = document.querySelectorAll('.product-card');
	productcard.forEach((element) => {
		element.style.display = 'none';
	});
	if (rangeFilteredArray.length > 0) {
		const newarr = rangeFilteredArray.sort(function (a, b) {
			return parseFloat(a.price) - parseFloat(b.price);
		});
		renderProducts(newarr);
	} else if (filterCategory.length !== productsArray.length) {
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
	if (rangeFilteredArray.length > 0) {
		const newarr = rangeFilteredArray.sort(function (a, b) {
			return parseFloat(b.price) - parseFloat(a.price);
		});
		renderProducts(newarr);
	} else if (filterCategory.length !== productsArray.length) {
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

function rangeCheck() {
	// array of price
	var priceArr = productsArray.map((costs) => {
		return costs.price;
	});
	console.log(priceArr);
	// max = max price range
	var max = Math.max(...priceArr);
	var maxx = parseInt(max);
	console.log(maxx);

	var priceRange = document.querySelector('.price-range b span');
	var slider = document.getElementById('slider');

	slider.value = 0;
	// if (max != priceRange.innerHTML) {
	priceRange.innerHTML = maxx;
	slider.max = maxx;
	// }
	console.log(slider);
}
var rangeFilteredArray = [];
function rangeSlider(el) {
	console.log(el.value);

	var priceRange = document.querySelector('.price-range b span');
	priceRange.innerHTML = el.value;
	var val = el.value;
	// rangeChanged(el.value);
	// remove all product cards
	var productcard = document.querySelectorAll('.product-card');
	productcard.forEach((element) => {
		element.style.display = 'none';
	});

	var filterPrice = [];
	filterCategory.forEach((arr) => {
		if (arr.price <= val) {
			filterPrice.push(arr);
		}
	});
	console.log(filterPrice);

	if (filterPrice.length <= 9) {
		// unactive background for all page
		var pageNum = document.querySelectorAll('.pagination a');
		pageNum.forEach((pageNo) => {
			if (pageNo.innerHTML == 2) {
				console.log(pageNo);
				pageNo.style.display = 'none';
			}
			pageNo.style.backgroundColor = '#fff';
			pageNo.style.color = '#303030';
		});
		// active background for first page
		var pageNum1 = document.querySelectorAll('.pagination a')[0];
		pageNum1.style.backgroundColor = 'red';
		pageNum1.style.color = '#fff';
	}
	rangeFilteredArray = filterPrice;
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

	// array of price
	var priceArr = filterCategory.map((costs) => {
		return costs.price;
	});
	console.log(priceArr);
	var max = Math.max(...priceArr);
	var maxx = parseInt(max);
	console.log(max);
	console.log(maxx);

	var priceRange = document.querySelector('.price-range b span');
	var slider = document.getElementById('slider');
	slider.value = 0;
	priceRange.innerHTML = maxx;
	slider.max = maxx;
	console.log(slider);
	// rangeCheck();

	// productsArray = filterCategory;
};
