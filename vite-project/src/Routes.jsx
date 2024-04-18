import { Routes, Route} from "react-router-dom";
import MailComponent from "./MailComponent";
import MainComponenSLP from "./MainComponenSLP";


const AppRoutes = () => {
    return(
        <Routes>
            {/* <Route path="/login" element={<> <Login></Login></>}>  </Route> */}
            <Route path="/" element={<> <MailComponent/> </>}>  </Route>
            <Route path="/SLP" element={<> <MainComponenSLP/> </>}>  </Route>
        </Routes>

    )
}

export default AppRoutes;