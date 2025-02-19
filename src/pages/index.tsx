import Head from "next/head";
import LiquidBackground from "@/components/LiquidBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Material from "@/components/Material";
import InstagramPreview from "@/components/InstagramPreview";

export default function Home() {
    return (
        <>
            <Head>
                <title>BloomBooth | Captura Momentos</title>
            </Head>
            <LiquidBackground />
            <Header />
            <main className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-4 max-w-screen-sm mx-auto sm:max-w-screen-lg">
                {/* Sección de Contenido (Izquierda) */}
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

                {/* Sección del Widget de Instagram (Derecha) */}
                <div className="flex flex-col flex-1 items-center sm:items-start">
                    <Material />
                    <InstagramPreview />
                </div>
            </main>
            <Footer />
        </>
    );
}
