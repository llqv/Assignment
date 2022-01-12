import Banner from "../components/banner";
import News from "../components/news";

const HomePage = {
    render() {
        return /* html */` 
        <div class="banner">
           ${Banner.render()}
        </div>
        <div class="news">
           ${News.render()}
        </div>
          </div>
  
          <h2 class="uppercase font-bold text-xl my-5 text-blue-900">
            Hoạt động sinh viên
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="border shadow rounded p-4">
              <a href="">
                <img src="images/image-1.jpg" width="500px" height="500px" alt="">
              </a>
              <h3 class="my-3">
                <a href="" class="text-orange-500 font-semibold">Vinh danh 295 sinh viên FPT Polytechnic học kỳ Spring 2018</a>
              </h3>
              <p class="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus officia dolorum obcaecati eos 
              </p>
            </div>
            <div class="border shadow rounded p-4">
              <a href="">
                <img src="images/image-1.jpg" width="500px" height="500px" alt="">
              </a>
              <h3 class="my-3">
                <a href="" class="text-orange-500 font-semibold">Sinh viên các khối ngành Kinh tế học cách "chạm" vào cảm xúc </a>
              </h3>
              <p class="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus officia dolorum obcaecati eos 
              </p>
            </div>
            <div class="border shadow rounded p-4">
              <a href="">
                <img src="images/image-1.jpg" width="500px" height="500px" alt="">
              </a>
              <h3 class="my-3">
                <a href="" class="text-orange-500 font-semibold">Sinh viên FPoly trai nghiệm thực tế tại Mường Thanh Luxury</a>
              </h3>
              <p class="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus officia dolorum obcaecati eos 
              </p>
            </div>
          </div>
        </div>
      `;
    },
};
export default HomePage;
