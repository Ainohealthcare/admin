import { CSSProperties, useCallback, useEffect, useState } from 'react'

import { HStack } from './Stack'
import { ImageElement } from '@/ui/components/ImageElement'

export interface TextFieldElementProps {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  isCleared?: boolean
  inputRef: React.Ref<any>; // eslint-disable-line
  defaultValue?: string
  placeholder?: string
  width?: number | string
  height?: number | string
  imageSrc?: string
  imageWidth?: number
  imageHeight?: number
  maxLength?: number
  style?: CSSProperties
}

export const TextFieldElement = (props: TextFieldElementProps) => {
    const {
        style,
        onChange,
        isCleared,
        inputRef,
        defaultValue,
        width,
        height,
        imageSrc,
        imageWidth,
        imageHeight,
        placeholder,
        maxLength,
    } = props
    const [value, setValue] = useState(defaultValue ?? '')

    useEffect(() => {
        if (isCleared) {
            setValue('')
        }
    }, [isCleared])

    const handleOnChange = useCallback(
        (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            onChange(event)
            setValue(event.target.value)
        },
        [onChange],
    )

    return (
        <HStack
            alignItems={'center'}
            style={{
                backgroundColor: '#F1F2F4',
                borderRadius: 5,
            }}
            width={width ?? '100%'}
            height={height}
        >
            <input
                ref={inputRef}
                type={'text'}
                value={value}
                onChange={handleOnChange}
                placeholder={placeholder}
                maxLength={maxLength}
                style={{
                    backgroundColor: '#F1F2F4',
                    borderRadius: 5,
                    border: '0px solid transparent',
                    outline: 'none',
                    fontFamily: 'IBM Plex Sans KR',
                    fontSize: '15px',
                    fontWeight: 500,
                    letterSpacing: '0.45px',
                    color: '#858585',
                    padding: '8px 10px',
                    width: width ?? '100%',
                    ...style,
                }}
            />
            {imageSrc && (
                <ImageElement
                    src={imageSrc}
                    width={imageWidth ?? 20}
                    height={imageHeight ?? 20}
                    style={{ marginLeft: 12, marginRight: 12 }}
                />
            )}
        </HStack>
    )
}
