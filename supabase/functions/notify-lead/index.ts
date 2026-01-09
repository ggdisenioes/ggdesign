import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface LeadNotificationRequest {
  name: string;
  email: string;
  company?: string;
  message: string;
  acceptCommercial: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, message, acceptCommercial }: LeadNotificationRequest = await req.json();

    console.log("Received lead notification request:", { name, email, company });

    // Send notification to business owners
    const notificationResponse = await resend.emails.send({
      from: "GG Diseño <noreply@ggdisenio.es>",
      to: ["hola@ggdisenio.es", "info@ggdisenio.es"],
      subject: `🎯 Nuevo lead: ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🎯 Nuevo Lead Recibido</h1>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
            <h2 style="color: #1e293b; margin-top: 0;">Datos del contacto</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
              <p style="margin: 8px 0;"><strong style="color: #6366f1;">Nombre:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong style="color: #6366f1;">Email:</strong> <a href="mailto:${email}" style="color: #6366f1;">${email}</a></p>
              ${company ? `<p style="margin: 8px 0;"><strong style="color: #6366f1;">Empresa:</strong> ${company}</p>` : ''}
              <p style="margin: 8px 0;"><strong style="color: #6366f1;">Acepta comunicaciones comerciales:</strong> ${acceptCommercial ? '✅ Sí' : '❌ No'}</p>
            </div>
            
            <h3 style="color: #1e293b;">Mensaje:</h3>
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; border-left: 4px solid #6366f1;">
              <p style="margin: 0; color: #475569; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
              <a href="mailto:${email}?subject=Re: Consulta desde GG Diseño" style="display: inline-block; background: #6366f1; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                Responder al lead
              </a>
            </div>
          </div>
          
          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px;">
            Este email fue enviado automáticamente desde el formulario de contacto de GG Diseño
          </p>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationResponse);

    // Send confirmation to the lead
    const confirmationResponse = await resend.emails.send({
      from: "GG Diseño <noreply@ggdisenio.es>",
      to: [email],
      subject: "¡Hemos recibido tu mensaje! - GG Diseño",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">¡Gracias por contactarnos!</h1>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
            <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">
              Hola <strong>${name}</strong>,
            </p>
            
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              Hemos recibido tu mensaje y te responderemos en las próximas <strong>24-48 horas hábiles</strong>.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin: 20px 0;">
              <p style="color: #64748b; font-size: 14px; margin: 0 0 10px 0;"><strong>Tu mensaje:</strong></p>
              <p style="color: #475569; font-size: 14px; margin: 0; font-style: italic; white-space: pre-wrap;">"${message}"</p>
            </div>
            
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              Mientras tanto, si tienes alguna consulta urgente, puedes contactarnos directamente por WhatsApp:
            </p>
            
            <div style="text-align: center; margin: 25px 0;">
              <a href="https://wa.me/34652638407" style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                💬 Contactar por WhatsApp
              </a>
            </div>
            
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              ¡Gracias por confiar en nosotros!
            </p>
            
            <p style="color: #1e293b; font-size: 16px; margin-bottom: 0;">
              <strong>El equipo de GG Diseño</strong>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 20px; background: #f1f5f9; border-radius: 8px;">
            <p style="color: #64748b; font-size: 12px; margin: 0;">
              GG Diseño · Madrid, España<br/>
              <a href="mailto:hola@ggdisenio.es" style="color: #6366f1;">hola@ggdisenio.es</a>
            </p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent to lead:", confirmationResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        notification: notificationResponse,
        confirmation: confirmationResponse 
      }), 
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in notify-lead function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
