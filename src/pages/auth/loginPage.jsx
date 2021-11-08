/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from 'react-router-dom'

import {
	Google,
	LockOutlined,
} from '@mui/icons-material'

import {
	Typography, Grid,
	Box, Paper, CssBaseline, Button, Avatar
} from '@mui/material'

import bidSquare from '../../assets/bid_square.svg'

import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth'

import { initializeApp } from 'firebase/app'

import { HomePage } from '../homePage'
import { usePostAPI } from '../../hooks/useFetch'

const firebaseConfig = {
	apiKey: "AIzaSyCglHy4McDNoddDzE8m4AhUM5mn9_rIyvs",
	authDomain: "binding-app-scopic.firebaseapp.com",
	projectId: "binding-app-scopic",
	storageBucket: "binding-app-scopic.appspot.com",
	messagingSenderId: "365292781659",
	appId: "1:365292781659:web:48faf0e16f2065b6073f7e"
};

const googleSignIn = async () => {
	const auth = getAuth()
	const googleProvider = new GoogleAuthProvider()

	try {
		const res = await signInWithPopup(auth, googleProvider)
		const credential = GoogleAuthProvider.credentialFromResult(res)

		const apiRes = await usePostAPI({
			endpoint: 'users',
			body: {
				email: res.user.email,
				name: res.user.displayName,
				photoUrl: res.user.photoURL,
			},
		})

		sessionStorage.setItem('user', JSON.stringify(apiRes))
		sessionStorage.setItem('token', JSON.stringify({ token: credential.accessToken }))

		return true
	} catch (err) {
		console.error(err);
	}

	return false
}

export const LoginPage = () => {
	initializeApp(firebaseConfig)
	const navigate = useNavigate()

	const user = sessionStorage.getItem('user')

	if (user) return <HomePage />

	return (
		<Grid container component="main" sx={{ height: '100vh' }}>
			<CssBaseline />
			<Grid
				item
				xs={false}
				sm={4}
				md={7}
				sx={{
					backgroundImage: `url(${bidSquare})`,
					backgroundRepeat: 'no-repeat',
					backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			/>
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={3} square>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlined />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box sx={{ mt: 1 }}>
						<Button
							// type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
							onClick={async () => {
								const isAuth = await googleSignIn()
								if (isAuth) {
									navigate('/home', { replace: true })
								} else {
									alert('Oops, Something goes wrong!!')
								}
							}}
							startIcon={<Google />}
						>
							Google Sign In
						</Button>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
}