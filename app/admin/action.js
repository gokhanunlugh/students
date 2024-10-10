"use server"
import { defaultHeader } from "@/utils/header";


export default async function addStudent(formData){
  const sinav1 = formData.get('sinav1')
  const sinav2 = formData.get('sinav2')
  const sinav3 = formData.get('sinav3')
  const ort = (sinav1 + sinav2 + sinav3)/3;
  const name = formData.get('name')
  console.log(formData);
  
  const response = await fetch('https://edwrpskmitwxvipmcyoy.supabase.co/rest/v1/student',{
    method: "POST",
    headers: defaultHeader,
    body: JSON.stringify({
      name: name,
      sinav_1:  sinav1,
      sinav_2:  sinav2,
      sinav_3:  sinav3,
      ort:  ort
    })
  })

  if(response.ok){
    console.log('response aldık')
  }
}
  
