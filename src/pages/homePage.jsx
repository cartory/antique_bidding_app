import logo from '../logo.svg'
import { Routes, Route, useNavigate } from 'react-router-dom'

import {
	Grid,
	AppBar,
	Toolbar,
	IconButton,
	CssBaseline,
} from '@mui/material'

import { ListPage } from './antiques/listPage'
import { DetailPage } from './antiques/detailPage'
import { SettingsPage } from './auth/settingsPage'

export const HomePage = () => {
	const navigate = useNavigate()

	return <>
		<CssBaseline />
		<AppBar elevation={1} position={'static'}>
			<Toolbar style={{ minHeight: '56px' }}>
				<Grid container direction="row" alignItems="center">
					<Grid item md={10}>
						<IconButton
							children={<img src={logo} alt={logo} height={50} />}
							onClick={() => navigate('/home')}
						/>
					</Grid>
					<Grid item md={1} sm={1}>
						<h4 style={{ textAlign: 'end' }}>username</h4>
					</Grid>
					<Grid item md={1} sm={1}>
						<img src={logo} alt={logo} height={40} style={{ borderRadius: 100 }} />
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
		<Routes>
			<Route path="home" element={<ListPage />} />
			<Route path="settings" element={<SettingsPage />} />
			<Route path="detail/:id" element={<DetailPage />} />
		</Routes>
	</>
} 