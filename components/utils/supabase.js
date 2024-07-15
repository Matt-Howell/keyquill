import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://mqdckrtdwdmbjybiwbfx.supabase.co"
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xZGNrcnRkd2RtYmp5Yml3YmZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyODA5MTYsImV4cCI6MjAyNjg1NjkxNn0.OwKPv5DchfK07Rha9fqBS7J9ioSI7g4G0PZP0-ULSwY'

export const supabase = createClient(supabaseUrl, supabaseKey)