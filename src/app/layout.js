import Topo from "./Componentes/Topo";
import Rodape from "./Componentes/Rodape";

import "./globals.css";

export const metadata = {
    title: "Create Next App",
    descrption: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="pt-br">
            <body>
                <Topo />
                {children}
                <Rodape />
                </body>
        </html>
    );
}