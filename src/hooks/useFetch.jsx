import { useState, useEffect } from 'react'

export const useFetchAPI = ({ endpoint = "", query = {} }) => {
	const [data, setData] = useState([])

	Object.keys(query).forEach((k, index) => {
		endpoint += (index === 0 ? '?' : '&') + `${k}=${query[k]}`
	})
	endpoint = `${process.env.REACT_APP_API}/api/${endpoint}`
	useEffect(() => {
		fetch(endpoint)
			.then(async res => setData(await res.json()))
			.catch(err => console.error(err))
	}, [endpoint])

	return [data, setData]
}