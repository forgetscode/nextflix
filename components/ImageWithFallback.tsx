import React, { useState } from 'react';
import Image from 'next/image';

interface Props{
    src:string
    fallbackSrc:string
}

const ImageWithFallback = (props:Props) => {
    const { src, fallbackSrc, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...rest}
            src={imgSrc}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
            className="rounded-sm object-cover md:rounded"
            layout="fill"
        />
    );
};

export default ImageWithFallback;