import './globals.css';

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
    <html lang="pt-pt">
      <body className='bg-home overflow-x-hidden'>
        { children }
      </body>
    </html>
  )
}
