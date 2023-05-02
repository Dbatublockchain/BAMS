import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import Create from "./Create/Create";
import Update from "./Update/Update";
import WriteOff from "./WriteOff/WriteOff";
import Member from "./Member/Member";
import Inspection from "./Inspection/Inspection";



function Layout() {
    return (
        <div style={{ paddingTop: "4.5rem" }}>
            
            <Routes>
                <Route path="/Home">
                    <Home />
                </Route>
                <Route path="/Create">
                    <Create />
                </Route>
                <Route path="/Update">
                    <Update />
                </Route>
                <Route path="/WriteOff">
                    <WriteOff />
                </Route>
                <Route path="/Inspection">
                    <Inspection />
                </Route>
                <Route path="/Member">
                    <Member />
                </Route>
            </Routes>
            
        </div>
    );
};

export default Layout;