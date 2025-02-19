import { useState, useEffect } from "react";
import Head from "next/head";
import LiquidBackground from "@/components/LiquidBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Material from "@/components/Material";
import InstagramPreview from "@/components/InstagramPreview";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 15000); // Simula la carga
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Head>
                <title>BloomBooth | Captura Momentos</title>
            </Head>
            <LiquidBackground />
            <Header />
            <main className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-4 max-w-screen-sm mx-auto sm:max-w-screen-lg">
                <div className="w-full sm:w-48 ml-auto">
                    <div className="photo-gallery grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="photo-frame w-full">
                            <div className="photo-content">
                                <h2>📸 Fotos al instante</h2>
                                <p>Captura recuerdos en nuestra cabina y vive una experiencia increíble.</p>
                            </div>
                        </div>
                        <div className="photo-frame w-full">
                            <div className="photo-content">
                                <h2>🎉 Perfecto para eventos</h2>
                                <p>Desde bodas hasta fiestas, personaliza tu foto con tu logo y fondo de preferencia.</p>
                            </div>
                        </div>
                        <div className="photo-frame w-full">
                            <div className="photo-content">
                                <h2>🎭 Contamos con múltiples accesorios</h2>
                                <p>Anima tus fotos con lentes, pelucas, sombreros, estolas, máscaras y mucho más.</p>
                            </div>
                        </div>
                        <div className="photo-frame w-full">
                            <div className="photo-content">
                                <h2>📩 Reserva fácil</h2>
                                <p>Contáctanos y agenda para tu próximo evento.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 items-center sm:items-start">
                    {loading ? (
                        <div className="flex items-center justify-center h-40 w-40">
                            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
                        </div>
                    ) : (
                        <Material />
                    )}
                    <InstagramPreview />
                </div>
            </main>
            <Footer />
        </>
    );
}
