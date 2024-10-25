import { Button } from '../Button'
import Image from 'next/legacy/image'
import { useCallback, useMemo, useState } from 'react'

export interface IImageItem {
    src: string
    width: number
    height: number
    alt: string
    buttonText?: string
}

export function useSwitchImage(images: IImageItem[]): [IImageItem, () => void] {
    const [index, setIndex] = useState(0)
    const switchImage = useCallback(
        () => {
            setIndex(
                (index + 1) % images.length,
            )
        },
        [index, images],
    )
    const image = useMemo(
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
    const buttonText = useMemo(
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
                width={image.width}
                height={image.height}
                alt={image.alt}
            />
        </div>
    )
}
