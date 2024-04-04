import React from 'react'
import Navbar from './Navbar'
import './aca.css';
function Academics() {
  return (
    <>
      <Navbar/>
      <div style={{backgroundColor:"#333",color:"white", fontSize: "1.5rem", padding: "10px 20px"}}>Academics</div>
      <div className='table-container'>
                  <table border="1">
                    <caption className='cap'><h1>Academic details</h1></caption>
                    <tr>
                      <th>Qualification</th>
                      <th>Borad/University</th>
                      <th>Year</th>
                      <th>Grades</th>
                    </tr>
                    <tr>
                      <td>SSC</td>
                      <td>GSEB</td>
                      <td>2017</td>
                      <td>Percentile: 99.77</td>
                    </tr>
                    <tr>
                      <td>HSC</td>
                      <td>GSEB</td>
                      <td>2019</td>
                      <td>Percentile: 97.57</td>
                    </tr>
                    <tr>
                      <td>B.E.(Computer Engineering)</td>
                      <td>GTU</td>
                      <td>2023</td>
                      <td>CPI: 9.09
                        <br/><br/>
                        CGPA:  8.63
                      </td>
                    </tr>
                  </table>

       </div>

    </>
  )
}

export default Academics
