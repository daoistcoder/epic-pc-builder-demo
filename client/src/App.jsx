import React from "react";
import NavComponent from "./shared_components/NavComponent.jsx";
import EpicBuilder from "./components/EpicBuilder";
import FooterComponent from "./shared_components/FooterComponent";

function App() {
    return (
        <>
            <NavComponent />
            <EpicBuilder />
            <FooterComponent />
        </>
    );
}

export default App;
