// import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Section from "./Section/Section";
import Footer from "./Footer/Footer"


const App=()=>{
    return(
        <div>
            <Header />
            <About />
            <Section
            heading="Skills"
            para="Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, and more recently 
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum." /> 
            <Section
            heading="Qualifications"
            para="Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, and more recently 
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum." />
            <Section
            heading="Projects"
            para="Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, and more recently 
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum." />
            <Footer />

        </div>
    )
}


export default App;