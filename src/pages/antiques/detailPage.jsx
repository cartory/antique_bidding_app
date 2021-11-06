/* eslint-disable eqeqeq */
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import {
	Box,
	Grid,
	Paper,
	Button,
	TextField,
	Typography,
	CssBaseline,
} from '@mui/material'

export const DetailPage = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const [antique, setAntique] = useState(null)

	useEffect(() => {
		const antiques = require('./antiques.json')
		const antique = antiques.find(a => a.productId == id)
		setAntique(antique)
		!antique && navigate('/home', { replace: true })
	}, [id, navigate])

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
						backgroundSize: 'fit',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundImage: `url(${antique?.productImage})`,
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
						{/* <legend style={{ color: 'grey', fontSize: '90%', marginTop: 0 }}>Settings</legend> */}
						<Typography component="h2" variant="h6" style={{ fontWeight: 'bold' }}>
							Configure The Auto-bidding
						</Typography>
						<Box
							component="form"
							noValidate onSubmit={() => { }} sx={{ mt: 1 }}
						>
							<p style={{ color: 'grey', fontSize: '75%' }}>
								<strong style={{ margin: 2, color: 'black' }}>Maximum bid amount</strong><br />
								The maximum amount will be split between all items where we have we have activated auto-bidding
							</p>
							<TextField
								size="small"
								name="email"
								margin="none"
								variant="standard"
								type="tel"
								style={{ padding: 0 }}
							/>
							<br />
							<br />
							<p style={{ color: 'grey', fontSize: '75%' }}>
								<strong style={{ margin: 2, color: 'black' }}>Bid Alert Notification</strong><br />
								Get the notification about your reserved bids
							</p>
							<TextField
								size="small"
								margin="none"
								name="password"
								type="tel"
								variant="standard"
								style={{ padding: 0 }}
							/>
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
			</Grid>
		</Box>
	)
}