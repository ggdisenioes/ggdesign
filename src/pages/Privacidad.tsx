import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Privacidad() {
  const { t } = useLanguage();

  return (
    <Layout>
      <Seo title={t.seo.privacy.title} description={t.seo.privacy.description} />
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl sm:text-5xl font-bold mb-8"
            >
              Política de <span className="text-gradient">Privacidad</span>
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
                  1. Responsable del Tratamiento
                </h2>
                <p>
                  <strong className="text-foreground">Identidad:</strong> GG Diseño<br />
                  <strong className="text-foreground">Dirección:</strong> Madrid, España<br />
                  <strong className="text-foreground">Email:</strong> info@ggdisenio.es<br />
                </p>
                <p className="mt-4">
                  En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) 
                  y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía 
                  de los derechos digitales (LOPDGDD), le informamos sobre el tratamiento de sus datos personales.
                </p>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  2. Datos que Recopilamos
                </h2>
                <p>Podemos recopilar los siguientes tipos de datos personales:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong className="text-foreground">Datos de identificación:</strong> nombre, apellidos, email, teléfono.</li>
                  <li><strong className="text-foreground">Datos profesionales:</strong> empresa, cargo, sector de actividad.</li>
                  <li><strong className="text-foreground">Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia.</li>
                  <li><strong className="text-foreground">Datos de comunicación:</strong> contenido de mensajes enviados a través de formularios de contacto.</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  3. Finalidad del Tratamiento
                </h2>
                <p>Los datos personales que nos proporcione serán tratados con las siguientes finalidades:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Responder a consultas y solicitudes de presupuesto.</li>
                  <li>Gestionar la relación comercial y prestación de servicios.</li>
                  <li>Enviar comunicaciones comerciales (solo con consentimiento previo).</li>
                  <li>Mejorar la experiencia de usuario y la funcionalidad del sitio web.</li>
                  <li>Cumplir con obligaciones legales y contractuales.</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  4. Base Legal del Tratamiento
                </h2>
                <p>El tratamiento de sus datos personales se basa en:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong className="text-foreground">Consentimiento:</strong> para el envío de comunicaciones comerciales y uso de cookies no esenciales.</li>
                  <li><strong className="text-foreground">Ejecución de contrato:</strong> para la prestación de servicios solicitados.</li>
                  <li><strong className="text-foreground">Interés legítimo:</strong> para la mejora de nuestros servicios y seguridad del sitio web.</li>
                  <li><strong className="text-foreground">Cumplimiento legal:</strong> para atender obligaciones legales aplicables.</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  5. Conservación de Datos
                </h2>
                <p>
                  Los datos personales se conservarán durante el tiempo necesario para cumplir con la 
                  finalidad para la que se recabaron y para determinar las posibles responsabilidades 
                  que pudieran derivarse. En particular:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Datos de clientes: durante la relación contractual y hasta 6 años después (obligaciones fiscales).</li>
                  <li>Datos de contacto: hasta 2 años desde el último contacto, salvo que exista otra base legal.</li>
                  <li>Datos de navegación: según lo establecido en nuestra Política de Cookies.</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  6. Destinatarios de los Datos
                </h2>
                <p>
                  No cederemos sus datos personales a terceros, salvo obligación legal o cuando sea 
                  necesario para la prestación de servicios (proveedores de hosting, herramientas de 
                  gestión, etc.), con los que existen contratos de encargado de tratamiento que 
                  garantizan la protección de sus datos.
                </p>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  7. Transferencias Internacionales
                </h2>
                <p>
                  Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio 
                  Económico Europeo. En estos casos, nos aseguramos de que existan garantías adecuadas, 
                  como cláusulas contractuales tipo aprobadas por la Comisión Europea o decisiones de 
                  adecuación.
                </p>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  8. Derechos del Usuario
                </h2>
                <p>Usted tiene derecho a:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong className="text-foreground">Acceso:</strong> conocer qué datos personales tratamos sobre usted.</li>
                  <li><strong className="text-foreground">Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
                  <li><strong className="text-foreground">Supresión:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
                  <li><strong className="text-foreground">Oposición:</strong> oponerse al tratamiento de sus datos.</li>
                  <li><strong className="text-foreground">Limitación:</strong> solicitar la limitación del tratamiento en determinadas circunstancias.</li>
                  <li><strong className="text-foreground">Portabilidad:</strong> recibir sus datos en formato estructurado y de uso común.</li>
                </ul>
                <p className="mt-4">
                  Para ejercer estos derechos, puede contactarnos en: <strong className="text-foreground">info@ggdisenio.es</strong>
                </p>
                <p className="mt-4">
                  También tiene derecho a presentar una reclamación ante la Agencia Española de 
                  Protección de Datos (AEPD) en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>.
                </p>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  9. Medidas de Seguridad
                </h2>
                <p>
                  Hemos implementado medidas técnicas y organizativas apropiadas para proteger sus 
                  datos personales contra el acceso no autorizado, la pérdida, la destrucción o 
                  alteración accidental. Estas medidas incluyen cifrado SSL, controles de acceso, 
                  y políticas internas de seguridad.
                </p>
              </div>

              <div className="p-6 rounded-xl glass">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  10. Modificaciones
                </h2>
                <p>
                  Nos reservamos el derecho de modificar esta Política de Privacidad para adaptarla 
                  a novedades legislativas o jurisprudenciales. Los cambios serán publicados en esta 
                  página y, si son significativos, le notificaremos por email.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
