import React, { useContext } from "react";

import ApiServicesContext from "../sw-service-context";

const ImageView = (props) => {
    const { getImgUrl, onImageError } = useContext(ApiServicesContext),
    { id, name } = props,
    imageName = `${ name }-image`;

    return (
        <img className={ imageName }
             src={ getImgUrl(name, id) }
             onError={ (e) => onImageError(e) }
             alt= { imageName } />
    )
};

export default ImageView;