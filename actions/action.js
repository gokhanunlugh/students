'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


import { createClient } from '@/utils/supabase/server'


export async function login(formData) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser();
  console.log(user);

  

  
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')

  if(user.user_metadata.role == "admin"){
    redirect('/admin')
  }
  
  redirect('/')
}

export async function signup(formData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signUp({...data,options:{data:{role:'user' , firstName: formData.get('fullName')}}})

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

