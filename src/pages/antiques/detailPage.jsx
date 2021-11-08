/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

import Countdown from 'react-countdown'

import {
	Box,
	Grid,
	Paper,
	Button,
	Checkbox,
	Typography,
	CssBaseline,
	FormControlLabel,
} from '@mui/material'

const { useSocket, useFetchAPI } = require('../../hooks/useFetch')

const getLastBid = (antique) => {
	if (!antique.user) {
		return antique?.startPrice
	}

	return antique.user['User_Antique']['lastBid']
}

const getIndex = (bots, user, antique) => {
	if (bots) {
		return bots.findIndex(({ Userid, Bot_Antique, id }) => {
			return Userid === user.id && Bot_Antique['Botid'] === id && Bot_Antique['Antiqueid'] === antique.id
		})
	}

	return -1
}

export const DetailPage = ({ context }) => {
	const { id } = useParams()
	const socket = useSocket()
	const navigate = useNavigate()
	const user = useContext(context)


	const [antique, setAntique] = useFetchAPI({ endpoint: `antiques/${id}` })
	!antique && navigate('/home', { replace: true })

	const [index, setIndex] = useState(-1)

	useEffect(() => {
		setIndex(getIndex(antique.bots, user, antique))
	}, [antique, antique.bots, antique.id, user, user.id])

	socket.on('lastBid', (antiqueResult) => {

		setAntique(antiqueResult)

		if (index >= 0) {
			// setTimeout(() => {
			// 	socket.emit('bid', {
			// 		Userid: user.id,
			// 		Antiqueid: Number.parseInt(id),
			// 		endDate: Date.parse(antique?.endDate),
			// 		price: getLastBid(antique) + 1,
			// 		maximumBidAmount: 
			// 	})
			// }, 1000);
		}
	})

	const handleBotCheck = async () => {
		if (index < 0) {
			setIndex(getIndex(antique.bots, user, antique))
		} else {
			setIndex(-1)
		}
		
		try {
			let url = `${process.env.REACT_APP_API}/api/bots/${user['bot']['id']}?Antiqueid=${Number.parseInt(id)}`
			const res = await fetch(url)
			console.log(await res.json())
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<Box component="main" sx={{ flexGrow: 1, p: 0, paddingTop: 5 }}>
			<CssBaseline />
			<Grid container component="main" sx={{ height: '93vh' }}>
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						opacity: '.9',
						backgroundSize: 'contain',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundImage: `url(${antique?.photoUrl})`,
						backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
					}}
				/>
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={0}>
					<Box
						sx={{
							my: 8, mx: 4,
							display: 'flex',
							alignItems: 'start',
							flexDirection: 'column',
						}}
					>
						<Typography component="h2" variant="h6" style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
							{antique?.productName}
						</Typography>
						<legend style={{ color: 'grey', fontSize: '110%', marginTop: 0, marginBottom: 0 }}>
							Minimum bid <strong>${antique?.startPrice}</strong>
						</legend>
						<Box
							component="form"
							noValidate onSubmit={() => { }} sx={{ mt: 1 }}
						>
							<p style={{ color: 'grey', fontSize: '80%' }}>
								<strong style={{ margin: 2, color: 'black' }}>Details</strong><br />
								{antique?.description}
							</p>
							<br />
							<Grid container direction="row" justifyContent="space-between">
								<Grid item>
									<p style={{ color: 'grey', fontSize: '90%', textAlign: 'start' }}>
										<strong style={{ margin: 2, color: 'black' }}>Last Bid</strong><br />
										{!antique.user ? `${getLastBid(antique)}$` : `${getLastBid(antique)}$ - ${antique['user']['email']}`}
									</p>
								</Grid>
								<Grid item>
									<p style={{ color: 'grey', fontSize: '80%', textAlign: 'end' }}>
										<strong style={{ margin: 2, color: 'black' }}>Available Until</strong><br />
										<Countdown
											date={new Date(Date.parse(antique?.endDate))}
											renderer={({ days, hours, minutes, seconds, completed }) => {
												if (completed) {
													return <span className="countdown" >Time Out!</span>
												}
												return <span className="countdown">{days}d:{hours}h:{minutes}m:{seconds}s</span>
											}}
										/>
									</p>
								</Grid>
							</Grid>
							<Button
								fullWidth
								variant="contained"
								children={['Place a Bid +1$']}
								sx={{ mt: 3, mb: 2, textTransform: 'capitalize' }}
								onClick={() => {
									socket.emit('bid', {
										Userid: user.id,
										Antiqueid: Number.parseInt(id),
										endDate: Date.parse(antique?.endDate),
										price: getLastBid(antique) + 1,
									})
								}}
							/>
							<br />
							<FormControlLabel
								name='check'
								checked={index >= 0}
								control={<Checkbox color="secondary" />}
								onChange={handleBotCheck}
								label={
									<p style={{ fontSize: '75%' }}>
										Activate the <Link to={`/settings/${user.id}`} color="secondary" style={{ color: '#FF5D73' }} >auto-binding</Link>
									</p>
								}
							/>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Box>
	)
}