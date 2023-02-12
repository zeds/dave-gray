import React, { useState } from 'react'
import MocData from '../MOCK_DATA.json'

export const SortTable = () => {
	const [data, setData] = useState(MocData)
	const [order, setOrder] = useState("ASC")

	const sorting = (col) => {
		if (order === "ASC") {
			const sorted = [...data].sort((a,b) =>
				a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
			);
			setData(sorted);
			setOrder("DSC")
		}
		if (order === "DSC") {
			const sorted = [...data].sort((a,b) =>
				a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
			);
			setData(sorted);
			setOrder("ASC")
		}
	}

	return (
		<div className='container'>
			<table className='table table-bordered'>
				<thead>
					<th onClick={()=>sorting("first_name")}>First Name</th>
					<th onClick={()=>sorting("last_name")}>Last Name</th>
					<th onClick={()=>sorting("email")}>Email</th>
					<th onClick={()=>sorting("gender")}>Gender</th>
				</thead>
				<tbody>
					{ data.map((d)=>(
						<tr key={d.id}>
							<td>{d.first_name}</td>
							<td>{d.last_name}</td>
							<td>{d.email}</td>
							<td>{d.gender}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
