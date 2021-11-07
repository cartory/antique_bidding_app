import { useState } from 'react';

import {
	Box,
	Slider,
	Drawer,
	Toolbar,
	Container,

	Button,
	FormLabel,
	FormControl,
	FormControlLabel,

	Radio,
	RadioGroup,
	ImageList,
	ImageListItem,
	ImageListItemBar,
} from '@mui/material'

import { Link } from 'react-router-dom'
import { useFetchAPI } from '../../hooks/useFetch'

const drawerWidth = 240;

const marks = [
	{ value: 10, label: '10$' },
	{ value: 50, label: '50$' },
	{ value: 100, label: '100$' },
]

export const ListPage = () => {
	const [filter, setFilter] = useState({ Categoryid: 2, startPrice: 20 })

	const [categories] = useFetchAPI({ endpoint: 'categories' })
	const [antiques] = useFetchAPI({
		endpoint: 'antiques', query: filter, delayInMilliseconds: 200
	})

	return (
		<>
			<Drawer
				variant="permanent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: 'auto' }} borderRight={0}>
					<Container >
						<h3>Filters</h3>
					</Container>
					<br />
					<Container>
						<FormLabel component="legend">Minimum bid</FormLabel>
						<br />
						<Slider
							color="secondary"
							marks={marks}
							min={10} max={100}
							valueLabelDisplay='auto'
							value={filter.startPrice}
							onChange={({ target }) => setFilter({ ...filter, startPrice: target.value })}
						/>
					</Container>
					<br />
					<Container>
						<FormControl onChange={({ target }) => setFilter({ ...filter, Categoryid: target.value })}>
							<br />
							<FormLabel component="legend">Category</FormLabel>
							<RadioGroup
								aria-label="category"
								defaultValue={filter.Categoryid}
								name="radio-buttons-group"
							>
								{categories?.map(({ id, name }) => {
									return <FormControlLabel key={id} value={id} control={<Radio color="secondary" />} label={name} />
								})}
							</RadioGroup>
						</FormControl>
					</Container>
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: 7 }}>
				<ImageList
					cols={3}
					rowHeight={260}
					gap={3}
					variant="quilted"
					style={{ overflowY: 'hidden' }}
				>
					{antiques.map((antique, index) => {
						return (
							<ImageListItem
								key={index} cols={1} rows={1}
							>
								<img
									loading='lazy'
									src={antique.photoUrl}
									alt={antique.name}
									style={{ borderRadius: 25 }}
								/>
								<ImageListItemBar
									title={<>
										<strong>{`$${antique.startPrice}`}</strong>{`-${antique.name}`}
									</>}
									subtitle={antique.description}
									style={{
										textOverflow: 'clip',
										borderBottomRightRadius: 25, borderBottomLeftRadius: 25,
									}}
									actionIcon={
										<Link
											to={`/detail/${antique.id}`}
											style={{ textDecoration: 'none' }}
											children={[
												<Button
													key="detail"
													size="small"
													color="secondary"
													variant="contained"
													style={{ color: 'white', textTransform: 'none', marginRight: 10 }}
												>
													Bid now
												</Button>
											]}
										/>
									}
								/>
							</ImageListItem>
						)
					})}
				</ImageList>
			</Box>
		</>
	);
}
