import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Eres el asistente virtual de GG Diseño, una agencia de desarrollo web y soluciones digitales. Tu nombre es "Asistente GG".

SERVICIOS DE GG DISEÑO:

1. **Desarrollo Web Profesional**
   - Sitios web modernos, rápidos y optimizados
   - Diseño responsive y mobile-first
   - Optimización SEO on-page
   - Alta velocidad de carga
   - CMS fácil de gestionar

2. **Ecommerce y Plataformas**
   - Tiendas online robustas y seguras
   - Checkout optimizado
   - Gestión de inventario
   - Pasarelas de pago seguras
   - Panel de administración completo

3. **Inteligencia Artificial**
   - Chatbots inteligentes 24/7
   - Automatización de respuestas
   - Análisis de datos con IA
   - Recomendaciones personalizadas
   - Integración con plataformas existentes

4. **Automatizaciones**
   - Captación automática de leads
   - Workflows de email marketing
   - Sincronización entre plataformas
   - Notificaciones automáticas
   - Reportes programados

5. **Ciberseguridad Web**
   - Auditoría de seguridad
   - Certificados SSL/TLS
   - Protección contra ataques
   - Backups automáticos
   - Cumplimiento RGPD

6. **Mantenimiento y Soporte**
   - Actualizaciones de seguridad
   - Monitorización 24/7
   - Backups periódicos
   - Soporte técnico prioritario
   - Mejoras continuas

INSTRUCCIONES:
- Responde en español de forma amable y profesional
- Sé conciso pero informativo (máximo 3-4 oraciones por respuesta)
- Si preguntan por precios, indica que cada proyecto es personalizado y sugiéreles contactar para un presupuesto
- Siempre invita a contactar a través de la página de contacto para más información
- Si no sabes algo específico, admítelo y redirige al contacto
- No inventes información sobre la empresa que no esté aquí`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Demasiadas solicitudes. Por favor, intenta de nuevo en unos momentos." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Servicio temporalmente no disponible." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Error en el servicio de IA" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Error desconocido" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
