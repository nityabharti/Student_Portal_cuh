import React from "react";

import Marks from "./internals.json";
import './internals.css'
function Internal(){
	const DisplayMarks=Marks.map(
		(record)=>{
			return(
				<tr>
					<td>{record.code}</td>
					<td>{record.name}</td>
					<td>{record.marks}</td>
                    <td>{record.total}</td>
				</tr>
			)
		}
	)

	return(
		<div className='head' >
            <h1 >Internal Awards</h1>
            <br/>   
			<table class="table table-striped">
                
				<thead>
					<tr>
					<th >Subject Code</th>
					<th>Subject Name</th>
					<th>Marks Obtained</th>
                    <th>Maximum Marks</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayMarks}
					
				</tbody>
			</table>
			
		</div>
	)
}

export default Internal;