import Head from "next/head";
import LiquidBackground from "@/components/LiquidBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact | Bloombooth</title>
            </Head>
            <LiquidBackground />
            <Header />
            <main className="flex flex-col items-center justify-center min-h-screen px-4">
                <div className="bg-[#2A363B] p-8 rounded-2xl shadow-lg w-full max-w-lg">
                    <h1 className="text-3xl font-bold text-[#FECEA8] text-center">¡Contáctanos!</h1>
                    <p className="text-lg text-[#E84A5F] text-center mt-2">
                        ¿Tienes preguntas? Escríbenos y con gusto te ayudamos.
                    </p>
                    <form className="mt-6 flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Tu nombre"
                            className="w-full p-3 border-2 border-[#FF847C] rounded-lg bg-[#FF847C] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#E84A5F]"
                        />
                        <input
                            type="email"
                            placeholder="Tu correo"
                            className="w-full p-3 border-2 border-[#FF847C] rounded-lg bg-[#FF847C] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#E84A5F]"
                        />
                        <textarea
                            placeholder="Tu mensaje"
                            rows={4}
                            className="w-full p-3 border-2 border-[#FF847C] rounded-lg bg-[#FF847C] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#E84A5F]"
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#E84A5F] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#FF847C] transition-all"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}
