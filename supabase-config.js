/* ============================================================
   PLANT ART — supabase-config.js
   Supabase client para recepción de leads del formulario web
   ============================================================ */

const SUPABASE_URL  = 'https://urqpfidfbytuggfcpbpf.supabase.co';
const SUPABASE_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVycXBmaWRmYnl0dWdnZmNwYnBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyOTI0MTYsImV4cCI6MjA4NTg2ODQxNn0.XEIOhwHuWagpzzxCXLkdXtux3Z5LiMrHrxmXenxngsc';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function submitContactLead(data) {
  const { error } = await supabaseClient
    .from('contact_leads')
    .insert([{
      nombre:     data.nombre,
      empresa:    data.empresa,
      cargo:      data.cargo   || null,
      correo:     data.correo,
      telefono:   data.telefono || null,
      proyecto:   data.proyecto,
      source_url: window.location.href
    }]);

  if (error) throw error;
}
