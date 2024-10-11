
export default function StudentTable({studensTable}){
  console.log(studensTable);
  
  return (
    <>
      {studensTable.map(x=> (
        <p key={x.id} >{x.name} -- Sınav 1={x.sinav_1} Sınav 2={x.sinav_2} Sınav 3={x.sinav_3} Ortalaması={x.ort}</p>
      ))}
    </>
  )
}