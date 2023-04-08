import React from 'react'
import Data from './attendance.json'
import './attendance.css'

function Attendance(){

    
	const DisplayData=Data.map(
		(info,idx)=>{
			return(
				<tr key={idx}>
					<td>{info.code}</td>
					<td>{info.name}</td>
					<td className='total_hr'>{info.total}</td>
                    <td className='total_hr'>{info.present}</td>
                    <td className='total_hr'>{info.percent}</td>
                   
				</tr>
			)
		}
	)

	return(
		<div className='head' >
            <div className='table_content'>
            <h1>Attendance Details </h1>
            <h3>During the period 08.02.2022 to 08.04.2022</h3>
            </div>
            <br/>  
			<div className='attendance_table'>
			<table className="table table-striped" >
                
				<thead>
					<tr>
					<th>Subject Code</th>
					<th>Subject Name</th>
					<th>Total Scheduled Hours</th>
                    <th>Attendance(Present Hours)</th>
                    <th>Percentage (%)</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
               
			</table>
			</div> 

			<p className='note'>Note: For any discrepancy in attendance, please contact your subject teacher. </p>

			<p className='calculate'>Attendance Perecentage (%) = Student Present / Total Attendance Marked * 100 </p>

		</div>
	)
}

export default Attendance;
