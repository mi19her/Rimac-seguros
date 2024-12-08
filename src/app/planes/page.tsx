'use client'
import Header from "../components/header";
import ContactForm from "../components/contactForm";
import { TextProvider } from "../context/Texts";
import Footer from "../components/footer";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { MobileProvider } from "../context/Mobile";
import MainPlans from "../components/mainPlans";


const Planes: React.FC = () => {
    return (
        <Provider store={store}>
            <TextProvider>
                <MobileProvider>
                    <div style={{ backgroundImage: "url(./blur-left.svg), url(./blur-right.svg)", backgroundPosition: "left, right", backgroundSize: "30%, 30%" }}
                        className="grid grid-cols-4 bg-local bg-no-repeat">
                        <Header />
                        <MainPlans/>
                        <Footer />
                    </div>
                </MobileProvider>
            </TextProvider>
        </Provider>

    )
}

export default Planes;

