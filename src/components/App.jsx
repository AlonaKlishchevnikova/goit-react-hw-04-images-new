import {useState, useEffect } from 'react'
import searchPages from "searchApi";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import Loader from "./Loader/Loader";


const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
        if (search === '') {
      return;
    }
    setLoader(true);

    searchPages(search, page).then(data => {
      if (data.hits.length < 1) {
        setLoader(false);
        setLoadMore(false);
        return alert('No images found for your request');
      }

      const newImages = data.hits.map(
        ({ id, webformatURL, largeImageURL }) => {
          return { id, webformatURL, largeImageURL };
        }
      );
      setImages(prevImages=>[...prevImages, ...newImages]);
      setLoader(false);
      setLoadMore(false);
    });
  }, [ search, page ]);
  
  
  const searchImage = query => {
       if (search === query) {
      return;
    }
     setSearch(query);
     setImages([]);
       setPage(1); 
      setError(null);
    setLoader(true)  
  }
  

  const  showLoadMore = () => {
    setPage(prevPage => prevPage + 1)
  };


  
  const showImage = e => {
      toggleModal();
      setLargeImageURL(e.target.dataset.source);
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  };
    return (
      <div>
        <Searchbar onSubmit={searchImage} />
        {images.length > 0 && !error &&  (
          <ImageGallery
            images={images}
           showImage={showImage}
          />
        )}
        {loader && <Loader/>}
        {!loadMore && images.length >= 12 && !error &&  (<Button onClick={showLoadMore} />)}
            {showModal && (<Modal
                onToggleModal={toggleModal}
                largeImageURL={largeImageURL} />)}


    </div>
    );
}
export default App;