import { defaultHeader } from "@/utils/header";


export default async function addStudent(formData){
  const sinav1 = formData.get('sinav1')
  const sinav2 = formData.get('sinav2')
  const sinav3 = formData.get('sinav3')

  const response = await fetch('https://edwrpskmitwxvipmcyoy.supabase.co/rest/v1/student',{
    method: "POST",
    headers: defaultHeader,
    body: JSON.stringify({
      sinav1:  sinav1,
      sinav2:  sinav2,
      sinav3:  sinav3,
      ort:  ort
    })
  })
}
  
