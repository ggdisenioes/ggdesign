import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function Legal() {
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
              Aviso <span className="text-gradient">Legal</span>
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
                  1. Datos Identificativos
                </h2>
                <p>
                  En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios 
                  de la Sociedad de la Información y Comercio Electrónico, se informa:
                </p>
                <ul className="list-none mt-4 space-y-2">
                  <li><strong className="text-foreground">Denominación Social:</strong> GG Diseño</li>
                  <li><strong className="text-foreground">Nombre Comercial:</strong> GG Diseño</li>
                  <li><strong className="text-foreground">Domicilio:</strong> Madrid, España</li>
                  <li><strong className="text-foreground">Actividad:</strong> Servicios de desarrollo web, inteligencia artificial, automatizaciones y ciberseguridad</li>
                  <li><strong className="text-foreground">Email de contacto:</strong> hola@ggdisenio.es</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  2. Objeto
                </h2>
                <p>
                  El presente Aviso Legal regula el uso del sitio web ggdisenio.es (en adelante, 
                  "el Sitio Web"), del que es titular GG Diseño.
                </p>
                <p className="mt-4">
                  El acceso al Sitio Web atribuye la condición de usuario del mismo e implica la 
                  aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas 
                  en este Aviso Legal.
                </p>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  3. Propiedad Intelectual e Industrial
                </h2>
                <p>
                  Todos los contenidos del Sitio Web, incluyendo pero no limitándose a textos, 
                  fotografías, gráficos, imágenes, iconos, tecnología, software, así como su 
                  diseño gráfico y códigos fuente, son propiedad de GG Diseño o de terceros que 
                  han autorizado su uso, estando protegidos por los derechos de propiedad 
                  intelectual e industrial.
                </p>
                <p className="mt-4">
                  Quedan expresamente prohibidas la reproducción, distribución, comunicación 
                  pública y transformación de la totalidad o parte de los contenidos de este 
                  Sitio Web sin autorización expresa y por escrito de GG Diseño.
                </p>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  4. Condiciones de Uso
                </h2>
                <p>El usuario se compromete a:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>No utilizar el Sitio Web con fines ilícitos o contrarios a lo establecido en este Aviso Legal.</li>
                  <li>No lesionar los derechos de terceros.</li>
                  <li>No provocar daños en los sistemas físicos y lógicos del Sitio Web.</li>
                  <li>No introducir virus informáticos o cualesquiera otros elementos que pudieran dañar o alterar el Sitio Web.</li>
                  <li>No intentar acceder a áreas restringidas de los sistemas informáticos.</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  5. Exclusión de Responsabilidad
                </h2>
                <p>GG Diseño no se hace responsable de:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Errores u omisiones en los contenidos del Sitio Web.</li>
                  <li>Falta de disponibilidad del Sitio Web.</li>
                  <li>Transmisión de virus o programas maliciosos en los contenidos.</li>
                  <li>Daños directos o indirectos que pueda sufrir el usuario.</li>
                  <li>Contenidos de páginas web de terceros a las que se pueda acceder mediante enlaces.</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  6. Enlaces a Terceros
                </h2>
                <p>
                  El Sitio Web puede contener enlaces a sitios web de terceros. GG Diseño no 
                  asume ninguna responsabilidad sobre el contenido, veracidad o funcionamiento 
                  de dichos sitios externos. La inclusión de estos enlaces no implica ningún 
                  tipo de asociación, fusión o participación con las entidades conectadas.
                </p>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  7. Modificaciones
                </h2>
                <p>
                  GG Diseño se reserva el derecho de efectuar sin previo aviso las modificaciones 
                  que considere oportunas en el Sitio Web, pudiendo cambiar, suprimir o añadir 
                  tanto los contenidos y servicios que presta como la forma en la que éstos 
                  aparezcan presentados o localizados.
                </p>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  8. Legislación Aplicable y Jurisdicción
                </h2>
                <p>
                  La relación entre GG Diseño y el usuario se regirá por la normativa española 
                  vigente y cualquier controversia se someterá a los Juzgados y Tribunales de 
                  la ciudad de Madrid, salvo que la ley disponga otra cosa para consumidores.
                </p>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  9. Resolución de Litigios en Línea
                </h2>
                <p>
                  De conformidad con el Reglamento (UE) 524/2013, le informamos que tiene derecho 
                  a solicitar la resolución de litigios en línea a través de la plataforma de la 
                  Comisión Europea:{" "}
                  <a 
                    href="https://ec.europa.eu/consumers/odr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  10. Contacto
                </h2>
                <p>
                  Para cualquier consulta o sugerencia, puede contactar con nosotros en:
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:hola@ggdisenio.es" className="text-primary hover:underline">
                    hola@ggdisenio.es
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
