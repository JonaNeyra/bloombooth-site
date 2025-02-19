import Head from "next/head";
import LiquidBackground from "@/components/LiquidBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Material from "@/components/Material";

export default function Pricing() {
    return (
        <>
            <Head>
                <title>Pricing | Photobooth</title>
            </Head>
            <LiquidBackground />
            <Header/>
            <Material/>
            <main className="container">
                <h1 className="index">Explora nuestros paquetes y elige el ideal para tu evento.</h1>
                <div className="photo-gallery">
                    <div className="photo-frame">
                        <div className="photo-content">
                            <h2>📸 Bsico</h2>
                            <p>$50 USD</p>
                        </div>
                    </div>

                    <div className="photo-frame">
                        <div className="photo-content">
                            <h2>📸 Premium</h2>
                            <p>$100 USD</p>
                        </div>
                    </div>

                    <div className="photo-frame">
                        <div className="photo-content">
                            <h2>📸 VIP</h2>
                            <p>$200 USD</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </>
    );
}
