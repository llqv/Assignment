const Header = {
    render() {
        return /* html */`
        <div class="max-w-5xl mx-auto" >
        <header>
        <div class="bg-blue-900 py-4">
          <a href="">
            <img src="https://caodang.fpt.edu.vn/vinmart/images/icon2a.png" width="150px" height="40px" alt="" class="mx-auto" />
          </a>
        </div>
        <nav class="bg-orange-500 px-3 my-1">
          <ul class="flex " id="menu">
            <li>
              <a href="/"
                class="transition duration-200 ease-in-out block p-3 text-white font-semibold hover:bg-white hover:text-black">Trang chủ</a>
            </li>
            <li>
              <a href="/about"
                class="transition duration-200 ease-in-out block p-3 text-white font-semibold hover:bg-white hover:text-black">Tuyển sinh</a>
            </li>
            <li>
              <a href="/product"
                class="transition duration-200 ease-in-out block p-3 text-white font-semibold hover:bg-white hover:text-black">Chương trình đào tạo</a>
            </li>
            <li>
              <a href=""
                class="transition duration-300 ease-in-out block p-3 text-white font-semibold hover:bg-white hover:text-black">Góc sinh viên</a>
            </li>
            <li>
              <a href=""
                class="transition duration-300 ease-in-out block p-3 text-white font-semibold hover:bg-white hover:text-black">Tuyển dụng</a>
            </li>
           <label><input class="ml-24 my-3 py rounded-lg"><button class="bg-blue-900 w-20 rounded-lg text-white mx-2 hover:bg-sky-500">Tìm kiếm</button></label>   
          </ul>
        </nav>
      </header>
      </div>
        `;
    },
};
export default Header;
