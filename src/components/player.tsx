import Sidebar from "./Sidebar";
import MainBody from "./MainBody";
import Footer from "./Footer";
import "./player.css";

function Player(){

    return(
        <div className="player">
            <div className="player-body">
                <Sidebar />
                <MainBody />

            </div>
            
            <Footer />

        </div>
    )

}

export default Player;