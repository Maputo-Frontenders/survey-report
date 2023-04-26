import './globals.css'

export const metadata = {
  title: 'MozDevz Survey Report',
  description: 'Resultados do survey lançado pela MozDevz em 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#060a35] overflow-x-hidden'>
        {children}
      </body>
    </html>
  )
}
