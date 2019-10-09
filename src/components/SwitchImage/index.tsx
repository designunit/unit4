import * as React from 'react'

import { Button } from '../Button'
import { Image } from '../Image'

export interface IImageItem {
    src: string
    alt?: string
    buttonText?: string
}

export function useSwitchImage(images: IImageItem[]): [IImageItem, () => void] {
    const [index, setIndex] = React.useState(0)
    const switchImage = React.useCallback(
        () => {
            setIndex(
                (index + 1) % images.length,
            )
        },
        [index, images],
    )
    const image = React.useMemo(
        () => images[index],
        [images, index],
    )

    return [image, switchImage]
}

export interface ISwitchImageProps {
    images: IImageItem[]
}

export const SwitchImage: React.FC<ISwitchImageProps> = props => {
    const [image, switchImage] = useSwitchImage(props.images)
    const buttonText = React.useMemo(
        () => image.buttonText ? image.buttonText : 'Click',
        [image],
    )

    return (
        <div className='switch-image'>
            <div className='image-text'>
                <Button
                    onClick={switchImage}
                >
                    {buttonText}
                </Button>
            </div>

            <Image
                src={image.src}
                alt={image.alt}
            />
        </div>
    )
}
