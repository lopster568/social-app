import Rightbar from "./components/Rightbar/rightbar.component";
import Sidebar from "./components/Sidebar/sidebar.component";
import Add from "./components/Add/add.component";

const WithNavs = (WrappedComponent) => {
    const Navs = ({auth, ...otherProps}) => {
        return auth ? (
            <WrappedComponent {...otherProps} />
        )
    }
    return (  );
}
 
export default WithNavs;