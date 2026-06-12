import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://rziyqqurvhxdmhwchuuq.supabase.co";
const supabaseKey = "sb_publishable_xPiEKwgbj6WQ-2L4Gb9wWQ_sWKXdznH";

const supabase = createClient(supabaseUrl, supabaseKey);

// Example: fetch reports
async function loadReports() {
    let { data, error } = await supabase
        .from('reports')
        .select('*');

    console.log(data);
}

loadReports();
