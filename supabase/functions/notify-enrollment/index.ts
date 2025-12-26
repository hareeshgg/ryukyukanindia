import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req: Request) => {
if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

try {
  const { name, email, phone, dojo } = await req.json();

  const { error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'ryukyukanindia@gmail.com',
    subject: "New Trial Class Enrollment",
    html: `
      <h2>New Enrollment Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Dojo:</strong> ${dojo}</p>
    `,
  });

   return new Response(
      JSON.stringify({ success: true }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
} catch (error) {
  return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
}
  
});
