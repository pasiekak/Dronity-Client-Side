import useProgressiveImage from "../../hooks/useProgressiveImage";

const BlurredUpImage = ({highQualitySrc, lowQualitySrc, width, height, className, id, onClick}) => {
    const [src, {blur}] = useProgressiveImage(lowQualitySrc, highQualitySrc);
    return (
        <img
            src={src}
            className={className}
            id={id}
            onClick={onClick}
            style={{
                width: width,
                height: height,
                filter: blur ? "blur(20px)" : "none",
                transition: blur ? "none" : "filter 0.3s ease-out"
            }}
            alt=''
        />
    );
}

export default BlurredUpImage;