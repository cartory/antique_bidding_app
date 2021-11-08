/* eslint-disable react-hooks/rules-of-hooks */
import {
	Box, Paper,
	InputAdornment,
	Typography, Grid,
	TextField, CssBaseline, Button,
} from '@mui/material'

import { useContext } from 'react'
import { AttachMoney } from '@mui/icons-material'
import { useParams, useNavigate } from 'react-router-dom'

import { usePostAPI } from '../../hooks/useFetch'
import robo_square from '../../assets/robo_hand.svg'

export const SettingsPage = ({ context }) => {
	const { id } = useParams()
	const navigate = useNavigate()

	const user = useContext(context)
	id !== user['id'] && navigate('/', { replace: true })
	let { bot } = user

	return (
		<Box component="main" sx={{ flexGrow: 1, p: 0, paddingTop: 5 }}>
			<CssBaseline />
			<Grid container component="main" sx={{ height: '93vh' }}>
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={0}>
					<Box
						sx={{
							my: 8, mx: 4,
							display: 'flex',
							alignItems: 'start',
							flexDirection: 'column',
						}}
					>
						<legend style={{ color: 'grey', fontSize: '90%', marginTop: 0 }}>Settings</legend>
						<Typography component="h3" variant="h6" style={{ fontWeight: 'bold' }}>
							Configure The Auto-bidding
						</Typography>
						<Box
							component="form"
							noValidate onSubmit={async (e) => {
								e.preventDefault()
								if (isNaN(bot['maximumBidAmount'])) {
									alert('MaximumBidValue Not a Valid Number')
								} else {
									bot['maximumBidAmount'] = Number.parseFloat(bot['maximumBidAmount'])
									try {
										bot = await usePostAPI({ endpoint: `bots/${bot['id']}`, body: bot })
										user['bot'] = bot
										sessionStorage.setItem('user', JSON.stringify(user))
									} catch (err) {
										console.error(err);
									}
								}
							}} sx={{ mt: 1 }}
						>
							<p style={{ color: 'grey', fontSize: '75%' }}>
								<strong style={{ margin: 2, color: 'black' }}>Maximum bid amount</strong><br />
								The maximum amount will be split between all items where we have we have activated auto-bidding
							</p>
							<TextField
								size="small"
								margin="none"
								name="maximumBidAmount"
								defaultValue={user['bot']['maximumBidAmount']}
								variant="standard"
								style={{ padding: 0 }}
								onChange={({ target }) => bot[target.name] = target.value}
								InputProps={{
									startAdornment: <InputAdornment position="start" children={[<AttachMoney key='bid' />]} />
								}}
							/>
							<br />
							<br />
							{/* <p style={{ color: 'grey', fontSize: '75%' }}>
								<strong style={{ margin: 2, color: 'black' }}>Bid Alert Notification</strong><br />
								Get the notification about your reserved bids
							</p> */}
							{/* <TextField
								size="small"
								margin="none"
								name="password"
								type="tel"
								variant="standard"
								style={{ padding: 0 }}
								InputProps={{
									endAdornment: <InputAdornment position="start" children={[<p key='text' style={{ fontWeight: 'bolder', fontSize: '110%' }} children={['%']} />]} />
								}}
							/> */}
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
								children={['Save']}
							/>
						</Box>
					</Box>
				</Grid>
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: `url(${robo_square})`,
						backgroundRepeat: 'no-repeat',
						backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
						backgroundSize: '75%',
						backgroundPosition: 'center',
					}}
				/>
			</Grid>
		</Box>
	)
}