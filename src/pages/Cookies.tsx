import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function Cookies() {
  return (
    <Layout>
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl sm:text-5xl font-bold mb-8"
            >
              Política de <span className="text-gradient">Cookies</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="prose prose-invert max-w-none space-y-8 text-muted-foreground"
            >
              <p className="text-sm">
                Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
              </p>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  1. ¿Qué son las Cookies?
                </h2>
                <p>
                  Las cookies son pequeños archivos de texto que los sitios web almacenan en su 
                  dispositivo (ordenador, tablet o móvil) cuando los visita. Las cookies permiten 
                  al sitio web recordar sus acciones y preferencias durante un período de tiempo, 
                  para que no tenga que volver a introducirlos cada vez que visite el sitio o 
                  navegue de una página a otra.
                </p>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  2. Tipos de Cookies que Utilizamos
                </h2>
                
                <h3 className="font-semibold text-foreground mt-4 mb-2">Cookies Estrictamente Necesarias</h3>
                <p>
                  Son esenciales para el funcionamiento del sitio web. Sin ellas, el sitio no 
                  funcionaría correctamente. No requieren consentimiento.
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Cookies de sesión del usuario</li>
                  <li>Cookies de preferencias de privacidad (consentimiento de cookies)</li>
                  <li>Cookies de seguridad</li>
                </ul>

                <h3 className="font-semibold text-foreground mt-6 mb-2">Cookies de Análisis/Rendimiento</h3>
                <p>
                  Nos permiten reconocer y contar el número de visitantes, así como ver cómo los 
                  visitantes navegan por el sitio. Esto nos ayuda a mejorar el funcionamiento del 
                  sitio web.
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Google Analytics (si está habilitado)</li>
                  <li>Cookies de rendimiento del sitio</li>
                </ul>

                <h3 className="font-semibold text-foreground mt-6 mb-2">Cookies de Funcionalidad</h3>
                <p>
                  Permiten al sitio web recordar las elecciones que usted hace (como su nombre de 
                  usuario, idioma o la región en la que se encuentra) y proporcionar características 
                  mejoradas y más personales.
                </p>

                <h3 className="font-semibold text-foreground mt-6 mb-2">Cookies de Marketing/Publicidad</h3>
                <p>
                  Se utilizan para rastrear a los visitantes en los sitios web. La intención es 
                  mostrar anuncios que sean relevantes y atractivos para el usuario individual.
                </p>
                <p className="mt-2 text-primary">
                  Actualmente no utilizamos cookies de marketing en este sitio web.
                </p>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  3. Cookies de Terceros
                </h2>
                <p>
                  Además de nuestras propias cookies, podemos utilizar cookies de terceros para 
                  informar sobre estadísticas de uso del sitio web, entregar anuncios y/o para 
                  ofrecer funciones adicionales.
                </p>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 pr-4 text-foreground">Proveedor</th>
                        <th className="text-left py-2 pr-4 text-foreground">Propósito</th>
                        <th className="text-left py-2 text-foreground">Duración</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4">Cookie Consent</td>
                        <td className="py-2 pr-4">Recordar preferencias de cookies</td>
                        <td className="py-2">1 año</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  4. Gestión de Cookies
                </h2>
                <p>
                  Usted puede controlar y/o eliminar las cookies como desee. Puede eliminar todas 
                  las cookies que ya están en su ordenador y puede configurar la mayoría de los 
                  navegadores para que no las acepten. Sin embargo, si hace esto, es posible que 
                  tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio 
                  y que algunos servicios y funcionalidades no funcionen.
                </p>
                
                <h3 className="font-semibold text-foreground mt-4 mb-2">Cómo gestionar cookies en su navegador:</h3>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Safari
                    </a>
                  </li>
                  <li>
                    <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  5. Consentimiento
                </h2>
                <p>
                  Al utilizar nuestro sitio web, usted acepta que podamos colocar cookies 
                  estrictamente necesarias en su dispositivo. Para las demás cookies, le 
                  solicitamos su consentimiento a través del banner de cookies que aparece 
                  en su primera visita.
                </p>
                <p className="mt-4">
                  Puede modificar sus preferencias de cookies en cualquier momento haciendo 
                  clic en el botón "Configurar cookies" en el pie de página del sitio web.
                </p>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  6. Base Legal
                </h2>
                <p>
                  Esta Política de Cookies cumple con lo establecido en:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Reglamento (UE) 2016/679 (RGPD)</li>
                  <li>Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE)</li>
                  <li>Directiva 2002/58/CE sobre la privacidad en las comunicaciones electrónicas</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  7. Contacto
                </h2>
                <p>
                  Si tiene alguna pregunta sobre nuestra Política de Cookies, puede contactarnos en:
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:hola@ggdiseno.com" className="text-primary hover:underline">
                    hola@ggdiseno.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
