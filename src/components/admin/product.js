import { getAll } from "../../api/product";


const adminProductList = {
	async render() {
		const response = await getAll();
		return/*html*/`
        <div style="width:100%;padding-left:250px;padding-right:20px">
		
	<div class="table">
	<button><a href="/admin/news/index">Add</button>
		<div style="text-align:left;" class="table-header">
			<div class="header__item"><a id="name" class="filter__link" href="#">ID</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Name</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Image</a></div>
			<div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Description</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Quantity</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Categories</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Price</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Option</a></div>
			
		</div>
		<div class="table-content">	
		${response.data.map((products, index) => /*html*/`
			<div class="table-row">		
				<div class="table-data">${index + 1}</div>
				<div class="table-data">${products.name}</div>
				 <img style="width:150px;height:105px" src="${products.img}">
				<div class="table-data">${products.desc}</div>
				<div class="table-data">${products.quantity}</div>
				<div class="table-data">${products.categories}</div>
				<div class="table-data">${products.price}</div>
				<ul>
				<div class="table-data">
				<li><button>Delete</button></li>
				<li><a href="/admin/news/:id/edit"><button>Edit</button></a></li>
				</div>
				
			</div>
			
	 `).join("")}
</div>
        `
	}
};
export default adminProductList;