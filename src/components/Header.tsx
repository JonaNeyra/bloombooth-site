import { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaBars } from "react-icons/fa";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-salmon p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center justify-between w-full sm:w-auto">
                <h1 className="text-lg sm:text-xl font-bold">¡Bienvenidos a BloomBooth!</h1>

                {/* Botón de menú en mobile */}
                <button className="sm:hidden text-black text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    <FaBars />
                </button>
            </div>

            {/* Íconos de redes sociales */}
            <div className="flex space-x-4 mt-3 sm:mt-0">
                <Link href="https://www.facebook.com/share/12FQbLyHVXF/?mibextid=wwXIfr" target="_blank">
                    <FaFacebook className="text-black cursor-pointer text-xl" />
                </Link>
                <Link href="https://www.instagram.com/cabinafotograficabloombooth" target="_blank">
                    <FaInstagram className="text-black cursor-pointer text-xl" />
                </Link>
                <Link href="https://www.tiktok.com/@bloombooth.cabina" target="_blank">
                    <FaTiktok className="text-black cursor-pointer text-xl" />
                </Link>
            </div>

            {/* Menú móvil (se muestra si isOpen es true) */}
            {isOpen && (
                <nav className="flex flex-col space-y-2 sm:hidden mt-3 text-center">
                    <Link href="/" className="text-black">Inicio</Link>
                    {/* <Link href="/pricing" className="text-black">Tarifas</Link> */}
                    {/* <Link href="/contact" className="text-black">Contacto</Link> */}
                </nav>
            )}

            {/* Menú normal en escritorio */}
            <nav className="hidden sm:flex space-x-4">
                <Link href="/" className="text-black">Inicio</Link>
                {/* <Link href="/pricing" className="text-black">Tarifas</Link> */}
                {/* <Link href="/contact" className="text-black">Contacto</Link> */}
            </nav>
        </header>
    );
}
