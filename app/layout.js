import './globals.css';

export const metadata = {
  metadataBase: new URL('https://gabriel-conserto-de-celular.vercel.app'),

  title:
    'Gabriel Tech Elite | Assistência Técnica em Celulares em Goiânia - GO',

  description:
    'Assistência técnica em celulares em Goiânia. Troca de tela, bateria, conector de carga, limpeza técnica, reparo básico e diagnóstico completo com atendimento humanizado.',

     icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/favicon.ico',
    },

  openGraph: {
    title:
      'Gabriel Tech Elite | Assistência Técnica em Celulares em Goiânia - GO',

    description:
      'Assistência técnica em celulares em Goiânia. Troca de tela, bateria, conector de carga e diagnóstico completo.',

    url: 'https://gabrieltechelite.vercel.app/',

    siteName: 'Gabriel Tech Elite',



    images: [
      {
        url: '/assets/logo-gabriel-tech-elite1.png',
        width: 1200,
        height: 630,
        alt: 'Gabriel Tech Elite',
      },
    ],

    locale: 'pt_BR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Gabriel Tech Elite',

    description:
      'Assistência técnica em celulares em Goiânia - GO.',

    images: ['/assets/logo-gabriel-tech-elite.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#020617" />
        <meta name="google-site-verification" content="zC8WgvMPr6KvjEbYryUlA_ybKILeoDOUsAc6e_hXkLQ" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.tailwind = window.tailwind || {};
              window.tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      eliteBlue: '#008CFF',
                      eliteCyan: '#00D4FF',
                      eliteDark: '#020617',
                      eliteCard: '#07111f'
                    },
                    boxShadow: {
                      glow: '0 0 40px rgba(0, 140, 255, .28)'
                    }
                  }
                }
              }
            `,
          }}
        />

        <script src="https://cdn.tailwindcss.com"></script>
      </head>

      <body>{children}</body>
    </html>
  );
}