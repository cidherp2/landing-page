import { Routes, Route} from "react-router-dom";
import MailComponent from "./MailComponent";
import MainComponenSLP from "./MainComponenSLP";
import MainComponenQRO from "./MainComponentQRO";


const AppRoutes = () => {
    return(
        <Routes>
            {/* <Route path="/login" element={<> <Login></Login></>}>  </Route> */}
            <Route path="/" element={<> <MailComponent/> </>}>  </Route>
            <Route path="/SLP" element={<> <MainComponenSLP/> </>}>  </Route>
            <Route path="/QRO" element={<> <MainComponenQRO/> </>}>  </Route>
        </Routes>

    )
}

export default AppRoutes;