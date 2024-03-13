import Link from "next/link" // Componente Link para navegación entre páginas
import Navbar from "../components/Navbar"
import { Poppins } from 'next/font/google'


export const metadata = {
  title: 'Holita - Home',
  description: 'This is the home page',
}
 
const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin-ext'],
})

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />

        {children}
        
      </body>
    </html>
  )
}
