import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import axios from 'axios';

// component sudo code
// component for actual "card". This will be added with each map
// component for the info that will show on click plus buttons?
// Click handle for the description
// Add form to the top for stretch
// update like count next to like button
// get request via axios
// put request via axios

function App() {
	const [galleryList, setGalleryList] = useState([]);

	useEffect(() => {
		getGallery();
	}, []);

	const getGallery = () => {
		axios
			.get('/gallery')
			.then((response) => {
				console.log(response.data);
				// setGalleryList(response.data);
			})
			.catch((error) => {
				alert('Error with get request', error);
			});
	};

	console.log(galleryList);

	return (
		<div className='App'>
			<Header />
			<Form />
			<div className='card'>
				<div className='card__content'>
					<img src='images/goat_small.jpg' />
					<p className='description'>Description goes here</p>
					<button className='likeButton'>LIKE</button>
				</div>
			</div>
			<div className='card'>
				<div className='card__content'>
					<img src='images/goat_small.jpg' />
					<p className='description'>Description goes here</p>
					<button className='likeButton'>LIKE</button>
				</div>
			</div>
			<div className='card'>
				<div className='card__content'>
					<img src='images/goat_small.jpg' />
					<p className='description'>Description goes here</p>
					<button className='likeButton'>LIKE</button>
				</div>
			</div>
		</div>
	);
}

export default App;
