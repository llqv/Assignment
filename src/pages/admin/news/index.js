import navAd from "../../../components/admin/navAd";
import adminAddPost from "./add";

const adminNew = {
    render() {
        return/*html*/`
         <div>
         ${navAd.render()}
         </div>
         
         <div>
         ${adminAddPost.render()}
         </div>
        `
    },
    afterRender() {
        adminAddPost.render();
    }
};
export default adminNew;