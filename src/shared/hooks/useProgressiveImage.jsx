import {useEffect, useState} from "react";

const useProgressiveImage = (lowQualitySrc, highQualitySrc) => {
    const [src, setSrc] = useState(lowQualitySrc);
    const [end, setEnd] = useState(false)

    useEffect(() => {
        setSrc(lowQualitySrc);

        const img = new Image();
        img.src = highQualitySrc;

        img.onload = () => {
            setSrc(highQualitySrc);
            setEnd(true);
        }
    }, [lowQualitySrc, highQualitySrc]);

    return [src, { blur: !end}];
}

export default useProgressiveImage;