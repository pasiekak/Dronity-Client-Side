import {useLayoutEffect} from "react";
import {getScrollbarWidth} from "../../shared/utils/utils";
import useBodyScrollable from "../../shared/hooks/useBodyScrollable";

const scrollbarWidth = getScrollbarWidth();
const WidthController = () => {
    const bodyScrollable = useBodyScrollable()

    useLayoutEffect(() => {
        if (bodyScrollable) {
            document.body.style.paddingLeft = '0px';
        } else {
            document.body.style.paddingLeft = `${scrollbarWidth}px`
        }
    }, [bodyScrollable])

    return null
}

export default WidthController;