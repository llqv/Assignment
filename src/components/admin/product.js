import { getAll, remove } from "../../api/product";


const adminProductList = {
	async render() {
		const { data } = await getAll();
		return/*html*/`
        <div style="width:100%;padding-left:250px;padding-right:20px">
	    
		
	<div class="table">
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
		${data.map((products, index) => /*html*/`
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
				<span data-id="${products.id}" class=" btn btn-remove"><button>Delete</button></span>
				<a href="/admin/news/${products.id}/edit"><button>Edit</button></a>
				</div>
				
			</div>
			
	 `).join("")}
</div>
        `
	},
	afterRender() {
		const btns = document.querySelectorAll('.btn');
		btns.forEach(btn => {
			const id = btn.dataset.id;
			btn.addEventListener('click', async function () {
				alert("Bạn có muốn xoá không?")
				await remove(id).then(() => {
					window.location.href = "/#/admin/dashboard";
				})

			})
		});
	}
};
export default adminProductList;