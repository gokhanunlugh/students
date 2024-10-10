const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkd3Jwc2ttaXR3eHZpcG1jeW95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NjY1MzQsImV4cCI6MjA0NDE0MjUzNH0.ftIB6_oS_oFfQ6pM4ejoUaEDZMLbUJ6fN-XzyG2VDvY"


export const defaultHeader = {
    "apikey": apikey,
    "Authorization": `Bearer ${apikey}`,
    "Content-Type": "application/json"
}