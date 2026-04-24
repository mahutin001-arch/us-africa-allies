import type { Metadata } from 'next';
import { Tinos, Montserrat } from 'next/font/google';
import Masthead from '@/components/Masthead';
import Colophon from '@/components/Colophon';
import './globals.css';

const tinos = Tinos({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-tinos',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'U.S.–Africa Allies Foundation',
  description:
    'A values-based foundation committed to principled leadership, family empowerment, and transformative cooperation between the United States and the nations of Africa.',
  icons: { icon: '/assets/logo1.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${tinos.variable} ${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js');`,
          }}
        />
        <a href="#main" className="skip">Skip to content</a>
        <Masthead />
        <main id="main">{children}</main>
        <Colophon />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
                var io = new IntersectionObserver(function(entries){
                  entries.forEach(function(e){
                    if (e.isIntersecting) {
                      e.target.classList.add('in');
                      io.unobserve(e.target);
                    }
                  });
                }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
                document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
