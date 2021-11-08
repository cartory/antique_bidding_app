import logo from '../assets/logo.svg'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { createContext } from 'react'

import {
	Box,
	Grid,
	Avatar,
	AppBar,
	Toolbar,
	IconButton,
	CssBaseline,
	AvatarGroup,
} from '@mui/material'

import { getAuth } from 'firebase/auth'
import { Logout } from '@mui/icons-material'

import { ListPage } from './antiques/listPage'
import { DetailPage } from './antiques/detailPage'
import { SettingsPage } from './auth/settingsPage'

export const HomePage = () => {
	const navigate = useNavigate()

	const rawUser = sessionStorage.getItem('user')
	!rawUser && navigate('/', { replace: true })

	const user = JSON.parse(rawUser)
	const context = createContext(user)

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				elevation={1}
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar style={{ minHeight: '56px' }}>
					<Grid container direction="row" alignItems="center">
						<Grid item md={10}>
							<IconButton
								children={<img src={logo} alt={logo} height={50} />}
								onClick={() => navigate('/home')}
							/>
						</Grid>
						<Grid item md={1} sm={1}>
							<h4 style={{ textAlign: 'end', paddingRight: 10, textOverflow: 'clip' }}>{user.name}</h4>
						</Grid>
						<Grid item md={1} sm={1}>
							<AvatarGroup max={2}>
								<Avatar alt={user?.name} src={user?.photoUrl} sx={{ height: 50, width: 50 }} />
								<IconButton
									title='logOut'
									children={[<Logout color='secondary' key='logout' />]}
									onClick={async () => {
										let auth = getAuth()
										await auth?.signOut()
										sessionStorage.clear()
										navigate('/', { replace: true })
									}}
								/>
							</AvatarGroup>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<context.Provider value={user}>
				<Routes>
					<Route path="home" element={<ListPage />} />
					<Route path="settings/:id" element={<SettingsPage user={user} context={context} />} />
					<Route path="detail/:id" element={<DetailPage user={user} context={context} />} />
				</Routes>
			</context.Provider>
		</Box>
	)
} 