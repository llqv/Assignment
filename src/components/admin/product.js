import { getAll } from "../../api/product";


const adminProductList = {
	async render() {
		const response = await getAll();
		return/*html*/`
        <div class="container">
	<div class="table">
		<div class="table-header">
			<div class="header__item"><a id="name" class="filter__link" href="#">ID</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Name</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Image</a></div>
			<div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Description</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Quantity</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Option</a></div>
		</div>
		<div class="table-content">	
		${response.data.map((products, index) => `
			<div class="table-row">		
				<div class="table-data">${index + 1}</div>
				<div class="table-data">${products.name}</div>
				 <img src="${products.img}">
				<div class="table-data">${products.desc}</div>
				<div class="table-data">${products.price}</div>
				<button>Delete</button>
			</div>
			
	 `).join("")}
</div>
        `
	}
};
export default adminProductList;