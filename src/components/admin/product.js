import data from "../../data";

const AdminProductList = {
    render() {
        return /* html */`
   
<div class="flex flex-col">
<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID 
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Desc
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Edit</span>  
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        ${data.map((value) => `
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">${value.id}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">${value.title}</div>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <img class="h-10 w-10 rounded-full" src="${value.img}" alt="">
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">${value.desc}</div>
          </td>
            <td class="px-6 text-sm font-medium">
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
            </td>
          </tr>
        </tbody>
        `)};
      </table>
    </div>
  </div>
</div>
</div>

      `;
    },
};
export default AdminProductList;
