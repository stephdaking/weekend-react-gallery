import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

//? past the list array and the getGallery function to be passed down to the gallery item
function GalleryList({ list, getGallery }) {
	return (
		<>
			{list.map((item) => {
				return (
					<div className='card' key={item.id}>
						<div className='card__content'>
							<GalleryItem item={item} getGallery={getGallery} />
						</div>
					</div>
				);
			})}
		</>
	);
}

export default GalleryList;
