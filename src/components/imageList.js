import React from 'react';

const imageList = (props) =>{
   const images =  props.images.map(
        (image) => {
            return <img  key={image.id} alt= { image.alt_description} src={image.urls.regular}/>
        }

    );


    return(<div> Img {images}</div>); 
};

export default imageList;
