import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_ANON_KEY";

const supabase = createClient(supabaseUrl, supabaseKey);

// Example: fetch reports
async function loadReports() {
    let { data, error } = await supabase
        .from('reports')
        .select('*');

    console.log(data);
}

loadReports();
