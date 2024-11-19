import Header from './Header';
import SideBar from './SideBar';

function Defaultlayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default Defaultlayout;
