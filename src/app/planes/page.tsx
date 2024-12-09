'use client'
import Header from "../components/header";
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
                    <div className="min-h-screen">
                        <div className="grid grid-cols-4 w-full">
                            <Header />
                            <MainPlans />
                        </div>
                        <Footer />
                    </div>
                </MobileProvider>
            </TextProvider>
        </Provider>

    )
}

export default Planes;

