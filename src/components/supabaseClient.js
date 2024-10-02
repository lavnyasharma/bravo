// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ewsorupyhavslsemnmhd.supabase.co';
export const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3c29ydXB5aGF2c2xzZW1ubWhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzMjA0NDUsImV4cCI6MjAzOTg5NjQ0NX0.Ve74RyvXph5erlEIEYMU8GpFN2XmBdPSsa2Q9Q6tNks';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
