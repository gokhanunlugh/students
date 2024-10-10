"use client"

export default function StudentTable({studensTable}){
  console.log(studensTable);
  
  return (
    <>
      {studensTable.map(x=> (
        <p key={x.id} >{x.name} {x.sinav_1} {x.sinav_2} {x.sinav_3} {x.ort}</p>
      ))}
    </>
  )
}