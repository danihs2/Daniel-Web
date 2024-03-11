import Link from "next/link" // Componente Link para navegación entre páginas
import Navbar from "../components/Navbar"
import {
  Roboto
} from "next/font/google"

export const metadata = {
  title: 'Holita - Home',
  description: 'This is the home page',
}

const roboto = Roboto({
  weights: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin-ext"],
})

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />

        {children}
        
      </body>
    </html>
  )
}
