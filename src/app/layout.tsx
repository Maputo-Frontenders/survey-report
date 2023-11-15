import useTranslation from 'next-translate/useTranslation'
import './globals.css';

export const metadata = {
  title: 'MozDevz Survey Report',
  description: 'Resultados do survey lançado pela MozDevz em 2023',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const { t, lang } = useTranslation("common");

  return (
    <html lang={lang}>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className='bg-home overflow-x-hidden'>
        {children}
      </body>
    </html>
  )
}
