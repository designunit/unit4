import { Button } from '../Button'
import Image from 'next/legacy/image'
import { useCallback, useMemo, useState } from 'react'

export interface ImageItem {
    src: string
    width: number
    height: number
    alt: string
    buttonText?: string
}

export function useSwitchImage(images: ImageItem[]): [ImageItem, () => void] {
    const [index, setIndex] = useState(0)
    const switchImage = useCallback(
        () => {
            setIndex(
                prev => (prev + 1) % images.length,
            )
        },
        [images.length],
    )
    const image = useMemo(
        () => images[index],
        [images, index],
    )

    return [image, switchImage]
}

export interface SwitchImageProps {
    images: ImageItem[]
}

export const SwitchImage: React.FC<SwitchImageProps> = props => {
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
