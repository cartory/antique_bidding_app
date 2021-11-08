import io from 'socket.io-client'
import { useState, useEffect } from 'react'

const debounce = (fn, milliSeconds = 0) => {
	let timeout
	return function () {
		var context = this;
		var args = arguments;

		clearTimeout(timeout)
		timeout = setTimeout(() => {
			fn.apply(context, args)
		}, milliSeconds)
	}
}

export const useFetchAPI = ({ endpoint = "", query = {}, delayInMilliseconds = 0 }) => {
	const [data, setData] = useState([])

	Object.keys(query).forEach((k, index) => {
		endpoint += (index === 0 ? '?' : '&') + `${k}=${query[k]}`
	})

	endpoint = `${process.env.REACT_APP_API}/api/${endpoint}`

	useEffect(() => {
		debounce(fetch(endpoint)
			.then(async res => setData(await res.json()))
			.catch(err => console.error(err)),
			delayInMilliseconds,
		);
	}, [endpoint, delayInMilliseconds])

	return [data, setData]
}

export const usePostAPI = async ({ endpoint = "", body = {}, method = "POST" }) => {
	try {
		const res = await fetch(`${process.env.REACT_APP_API}/api/${endpoint}`, {
			method,
			headers: {
				"Accept": "Application/json",
				"Content-Type": "Application/json"
			},
			body: JSON.stringify(body)
		})

		return await res.json()
	} catch (err) {
		console.error(err);
	}

	return null
}

export const useSocket = () => {
	try {
		return io(process.env.REACT_APP_API, { transports: ['websocket'] })
	} catch (err) {
		console.error(err);
	}
	return null
}