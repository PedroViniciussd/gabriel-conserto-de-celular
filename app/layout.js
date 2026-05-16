import './globals.css';

export const metadata = {
  title: 'Gabriel Tech Elite | Assistência Técnica em Celulares em Goiânia - GO',
  description:
    'Assistência técnica em celulares em Goiânia. Troca de tela, bateria, conector de carga, limpeza técnica, reparo básico e diagnóstico completo com atendimento humanizado.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#020617" />

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