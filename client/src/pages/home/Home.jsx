import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Home() {
    return (
        <>
            <Topbar />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Sidebar />
                    </div>
                    <div className="col-6">
                        <Feed />
                    </div>
                    <div className="col">
                        <Rightbar  />
                    </div>
                </div>
            </div>

        </>
    );
};
