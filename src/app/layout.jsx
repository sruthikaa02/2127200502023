import './globals.css'


export const metadata = {
  title: 'Number',
  description: 'Number problem',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
