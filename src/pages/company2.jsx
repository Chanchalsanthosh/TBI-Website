import '../styles/company.css';
import Records from '../assests/records.json';
import Header from "../components/header";
function company2() {
  const colors = ['rgb(244, 214, 252)', 'rgb(229, 248, 203', 'rgb(246 246 246)', 'rgb(219, 230, 236)', 'rgb(250, 228, 201)'];
  return (
    <div id="company2">
      <Header/>
    <div className='app2'>
       
       {
          Records && Records.map((record, index) => {
            const color = colors[index % colors.length];
            return(
             
              <div className={`company company-${record.id}`} key={record.id} style={{ backgroundColor: color }}>
                <div className='img'>
                  {record.image && <img className={`image image-${record.id}`} src={record.image} alt={record.title} />}
               </div>
                
                <div className={`title title-${record.id}`}>{record.title}</div>

              
             
              <div className={`sector sector-${record.id}`}>{record.sector}</div>
              <br />
              <div className={`content content-${record.id}`}>{record.content}</div>
              <br />
                
              <a className={`contact contact-${record.id}`} href={`https://${record.contact}`}>{record.contact}</a>


              </div>

            )
          })
       }

    </div>
    </div>
  )
}

export default company2;