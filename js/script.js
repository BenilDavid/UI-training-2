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
		topProducts: false,
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
var filteredArray = [];
filteredArray = productsArray;

var topProductsArray = [
	{
		id: 0,
		productCategory: 'Misc',
		productTitle: 'Mug Mockup',
		price: 99.0,
		topProducts: true,
		uploadedImageSrc: 'https://source.unsplash.com/70x70/?mug,mockup',
	},
];

var maxProductsPerPage = 9;
var pageCount = 1;
var current_page = 1;
var per_page_items = 9;
// onload rendering
window.onload = function () {
	// renderProducts(productsArray);
	showTopProducts(topProductsArray);

	loadPageNumber(paginator(filteredArray, current_page, per_page_items));
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

// -------------------------- MODAL ----------------------------

// add product open modal
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
	// console.log(topProduct);
	// console.log(uploadFile);
	modal.style.display = 'block';
	body.style.overflow = 'hidden';
}

// close modal
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

// close modal
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

var idarray = [];
// -------------------------- PRODUCT CARD CLICKED ----------------------------

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
	var topProduct = document.getElementById('topProduct');
	var uploadFile = document.querySelector('input[type="file"]').files[0];
	var uploadFileValue = document.querySelector('input[type="file"]');
	var clikedProductId = parseInt(element.childNodes[3].childNodes[1].innerHTML);
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
			modalProductCategory.forEach((option) => {
				if (option.value === obj.productCategory) {
					option.setAttribute('selected', '');
				}
			});
			modalProductTitle.value = obj.productTitle;
			modalProductPrice.value = obj.price;
			topProduct.checked = obj.topProducts;
			uploadFileValue.value = '';
		}
	});
	// console.log(uploadFile.files.value);
}

// -------------------------- SAVE: EDIT PRODUCT CARD ----------------------------

// save button when editting a product details
function editProduct() {
	var e = document.getElementById('selectedCategory');
	var title = document.getElementById('title').value;
	var price = document.getElementById('price').value;
	var topProduct = document.getElementById('topProduct');
	var uploadFile = document.querySelector('input[type="file"]').files[0];
	console.log(uploadFile);

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
				var category = e.options[e.selectedIndex].text;
				obj.productCategory = category;
				obj.productTitle = title;
				obj.price = parseInt(price);
				obj.topProducts = topProduct.checked;
				if (uploadFile) {
					var image = URL.createObjectURL(uploadFile);
					obj.uploadedImageSrc = image;
				}
				if (obj.topProducts == true) {
					// remove all top product cards
					var miniProductShow = document.querySelectorAll('.mini-product-show');
					miniProductShow.forEach((element) => {
						element.style.display = 'none';
					});
					topProductsArray.push(obj);
					showTopProducts(topProductsArray);
				} else {
					// remove all top product cards
					var miniProductShow = document.querySelectorAll('.mini-product-show');
					miniProductShow.forEach((element) => {
						element.style.display = 'none';
					});
					topProductsArray.forEach((topObj) => {
						console.log(topObj);
						if (topObj == obj) {
							var index = topProductsArray.indexOf(obj);
							topProductsArray.splice(index, 1);
						}
					});

					showTopProducts(topProductsArray);
				}
			}
		});
		var productcard = document.querySelectorAll('.product-card');
		productcard.forEach((element) => {
			element.style.display = 'none';
		});
		loadPageNumber(paginator(filteredArray, current_page, per_page_items));
		// renderProducts(productsArray); //---------------------rendering
		rangeCheck();
		// checkPagination();
	}
}

// -------------------------- RENDERING PRODUCT CARD ----------------------------

// rendering products
function renderProducts(arr) {
	arr.map((e, index) => {
		if (index < maxProductsPerPage) {
			showProducts(e);
		}
	});
}

// -------------------------- HTML FOR PRODUCT CARD ----------------------------

// HTML for products
function showProducts(e) {
	var productListing = document.querySelector('.product-listing');

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

// -------------------------- HTML FOR TOP PRODUCT CARD ----------------------------

// rendering top products in sidebar
function showTopProducts(toparr) {
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

// -------------------------- SAVE: ADD PRODUCT BUTTON ----------------------------

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

	// console.log(uploadFile);
	// if (uploadFile != undefined) {
	// 	var imgName = document.querySelector('.show-img-name');
	// 	imgName.innerHTML = uploadFile.name;
	// }
	if (!title || !price || uploadFile == undefined) {
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
		if (uploadFile == undefined) {
			document.getElementById('error-msg-file').innerHTML =
				'Please Upload the file';
		} else {
			document.getElementById('error-msg-file').innerHTML = '';
		}
	} else {
		var image = URL.createObjectURL(uploadFile);
		obj['uploadedImageSrc'] = image;
		// console.log(image);
		// URL.revokeObjectURL(image);

		// hide modal after save
		var modal = document.getElementById('myModal');
		var body = document.getElementsByTagName('body')[0];
		modal.style.display = 'none';
		body.style.overflow = 'auto';
		filteredArray = productsArray;
		filterCategory = productsArray;

		// console.log(obj);
		if (topProduct === true) {
			// remove all top product cards
			var miniProductShow = document.querySelectorAll('.mini-product-show');
			miniProductShow.forEach((element) => {
				element.style.display = 'none';
			});
			// alert('added to top products list');
			topProductsArray.push(obj);

			// remove all product cards
			var productcard = document.querySelectorAll('.product-card');
			productcard.forEach((element) => {
				element.style.display = 'none';
			});
			productsArray.push(obj);
			// renderProducts(productsArray);
			loadPageNumber(paginator(filteredArray, current_page, per_page_items));
			showTopProducts(topProductsArray); //---------------------rendering
			rangeCheck();
			// checkPagination();
		} else {
			// remove all product cards
			var productcard = document.querySelectorAll('.product-card');
			productcard.forEach((element) => {
				element.style.display = 'none';
			});
			productsArray.push(obj);
			loadPageNumber(paginator(filteredArray, current_page, per_page_items));
			// renderProducts(productsArray); //---------------------rendering
			rangeCheck();
			// checkPagination();
		}
	}
};

// -------------------------- PRICE: SORTING SELECTION ----------------------------

// selecting sort by price type (ASC/DESC)
function sortByPrice() {
	var e = document.getElementById('selectedSort');
	var category = e.options[e.selectedIndex].value;

	if (category == 1) {
		priceHighToLow();
	} else if (category == 2) {
		priceLowToHigh();
	} else {
		defaultSorting();
	}
}

// -------------------------- PRICE: DEFAULT SORTING ----------------------------
function defaultSorting() {
	// remove all product cards
	var productcard = document.querySelectorAll('.product-card');
	productcard.forEach((element) => {
		element.style.display = 'none';
	});
	if (rangeFilteredArray.length > 0) {
		const newarr = filteredArray.sort(function (a, b) {
			return parseFloat(a.id) - parseFloat(b.id);
		});
		loadPageNumber(paginator(newarr, current_page, per_page_items));
		// renderProducts(newarr); //---------------------rendering
	} else if (filterCategory.length !== productsArray.length) {
		const newarr = filteredArray.sort(function (a, b) {
			return parseFloat(a.id) - parseFloat(b.id);
		});
		loadPageNumber(paginator(newarr, current_page, per_page_items));
		// renderProducts(newarr); //---------------------rendering
	} else {
		const newarr = productsArray.sort(function (a, b) {
			return parseFloat(a.id) - parseFloat(b.id);
		});
		loadPageNumber(paginator(newarr, current_page, per_page_items));
		// renderProducts(newarr); //---------------------rendering
	}
}

// -------------------------- PRICE LOW TO HIGH ----------------------------
function priceLowToHigh() {
	// remove all product cards
	var productcard = document.querySelectorAll('.product-card');
	productcard.forEach((element) => {
		element.style.display = 'none';
	});
	if (rangeFilteredArray.length > 0) {
		const newarr = filteredArray.sort(function (a, b) {
			return parseFloat(a.price) - parseFloat(b.price);
		});
		loadPageNumber(paginator(newarr, current_page, per_page_items));
		// renderProducts(newarr); //---------------------rendering
	} else if (filterCategory.length !== productsArray.length) {
		const newarr = filteredArray.sort(function (a, b) {
			return parseFloat(a.price) - parseFloat(b.price);
		});
		loadPageNumber(paginator(newarr, current_page, per_page_items));
		// renderProducts(newarr); //---------------------rendering
	} else {
		const newarr = productsArray.sort(function (a, b) {
			return parseFloat(a.price) - parseFloat(b.price);
		});
		loadPageNumber(paginator(newarr, current_page, per_page_items));
		// renderProducts(newarr); //---------------------rendering
	}
}

// -------------------------- PRICE HIGH TO LOW ----------------------------
function priceHighToLow() {
	// remove all product cards
	var productcard = document.querySelectorAll('.product-card');
	productcard.forEach((element) => {
		element.style.display = 'none';
	});
	if (rangeFilteredArray.length > 0) {
		const newarr = filteredArray.sort(function (a, b) {
			return parseFloat(b.price) - parseFloat(a.price);
		});
		loadPageNumber(paginator(newarr, current_page, per_page_items));
		// renderProducts(newarr); //---------------------rendering
	} else if (filterCategory.length !== productsArray.length) {
		const newarr = filteredArray.sort(function (a, b) {
			return parseFloat(b.price) - parseFloat(a.price);
		});
		loadPageNumber(paginator(newarr, current_page, per_page_items));
		// renderProducts(newarr); //---------------------rendering
	} else {
		const newarr = productsArray.sort(function (a, b) {
			return parseFloat(b.price) - parseFloat(a.price);
		});
		loadPageNumber(paginator(newarr, current_page, per_page_items));
		// renderProducts(newarr); //---------------------rendering
	}
}

// --------------------------------- RANGE SLIDER ----------------------------------------

function rangeCheck() {
	// array of price
	var priceArr = productsArray.map((costs) => {
		return costs.price;
	});
	// max = max price range
	var max = Math.max(...priceArr);
	var maxx = parseInt(max);

	var priceRange = document.querySelector('.price-range b span');
	var slider = document.getElementById('slider');

	slider.value = 0;
	priceRange.innerHTML = maxx;
	slider.max = maxx;
}

var rangeFilteredArray = [];
function rangeSlider(el) {
	var priceRange = document.querySelector('.price-range b span');
	priceRange.innerHTML = el.value;
	var val = el.value;
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
	filteredArray = filterPrice;
	loadPageNumber(paginator(filteredArray, current_page, per_page_items));
	// renderProducts(filteredArray); //---------------------rendering
}

var filterCategory = productsArray;
// --------------------------------- FILTER BY CATEGORY -----------------------------------------------

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
	filteredArray = filterCategory;
	loadPageNumber(paginator(filteredArray, current_page, per_page_items));
	// renderProducts(filteredArray); //---------------------rendering

	// var e = document.getElementById('selectedSort');
	// var category = e.options[e.selectedIndex].value;
	// console.log(category);
	sortByPrice();

	// array of price
	var priceArr = filterCategory.map((costs) => {
		return costs.price;
	});
	var max = Math.max(...priceArr);
	var maxx = parseInt(max);

	var priceRange = document.querySelector('.price-range b span');
	var slider = document.getElementById('slider');
	slider.value = 0;
	priceRange.innerHTML = maxx;
	slider.max = maxx;
	// rangeCheck();
	// productsArray = filterCategory;
};

// ----------------------------------------- PAGINATION ------------------------------------

// Paginate calculation function
function paginator(items, current_page, per_page_items) {
	let page = current_page || 1,
		per_page = per_page_items || 10,
		offset = (page - 1) * per_page,
		paginatedItems = items.slice(offset).slice(0, per_page_items),
		total_pages = Math.ceil(items.length / per_page);

	return {
		page: page,
		per_page: per_page,
		pre_page: page - 1 ? page - 1 : null,
		next_page: total_pages > page ? page + 1 : null,
		total: items.length,
		total_pages: total_pages,
		data: paginatedItems,
	};
}

// Display Page Numbers Function
function loadPageNumber(response) {
	console.log(response);
	$('.pagination').empty(); //Pageload pagination data empty and fulfil the data with response
	for (let i = 1; i <= response.total_pages; i++) {
		let page_li = "<div class='page' data-page='" + i + "'>" + i + '</div>';
		$('.pagination').append(page_li);
	}
	$('.product-listing').empty(); //Pageload products data empty and fulfil the data with response
	for (let i = 0; i < response.data.length; i++) {
		let temp_products = `
		<div class="product-card" onclick="productClicked(this)">
		<div class="product-image">
                ${
									response.data[i].sale === true
										? '<button class="product-sale">sale</button>'
										: ''
								}
                <img
                    src="${response.data[i].uploadedImageSrc}"
                    alt=""
                />
            </div>
            <div class="product-details">
				<span id="productId" style="display: none">${response.data[i].id}</span>
                <div class="product-name">${response.data[i].productTitle}</div>
                <div class="product-price">$${response.data[i].price}</div>
            <div/>
			<div/>`;

		$('.product-listing').append(temp_products);
	}
	$('.pagination .page').click(function (e) {
		//Onclick pagination function
		e.preventDefault();
		let new_response = paginator(filteredArray, $(this).data('page'), 9);
		$('.product-listing').empty();
		for (let i = 0; i < new_response.data.length; i++) {
			let temp_products = `
		<div class="product-card" onclick="productClicked(this)">
		<div class="product-image">
                ${
									new_response.data[i].sale === true
										? '<button class="product-sale">sale</button>'
										: ''
								}
                <img
                    src="${new_response.data[i].uploadedImageSrc}"
                    alt=""
                />
            </div>
            <div class="product-details">
				<span id="productId" style="display: none">${new_response.data[i].id}</span>
                <div class="product-name">${
									new_response.data[i].productTitle
								}</div>
                <div class="product-price">$${new_response.data[i].price}</div>
            <div/>
			<div/>`;
			$('.product-listing').append(temp_products);
		}
	});
}
