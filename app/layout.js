import './globals.css'
export const metadata = { title: 'FacturaCol', description: 'Herramienta de facturación en línea para freelancers colombianos, simplificando el proceso de emisión de facturas y seguimiento de pagos. Permite a los freelancers gestionar sus finanzas de manera eficiente y cumplir con las regulaciones fiscales colombianas.' }
export default function RootLayout({ children }) {
  return (<html lang='es'><body>{children}</body></html>)
}
