import { CSSProperties, ReactNode } from 'react'

interface Props {
    children: ReactNode
    cssStyle?: CSSProperties
    color?: string
    textStyle:
        | 'TPropertyTitle'
        | 'TProperty'
        | 'TNormal'
        | 'TGoto'
        | 'TCheck'
}

export const TextElement = ({ children, cssStyle, color, textStyle }: Props) => {
    const textElementProps = (): CSSProperties => {
        switch (textStyle) {
            case 'TPropertyTitle': {
                return {
                    fontSize: 22,
                    fontWeight: 600,
                }
            }
            case 'TProperty': {
                return {
                    fontSize: 16,
                    fontWeight: 400,
                }
            }
            case 'TNormal': {
                return {
                    fontSize: 14,
                    fontWeight: 400,
                }
            }
            case 'TGoto': {
                return {
                    fontSize: 16,
                    fontWeight: 400,
                }
            }
            case 'TCheck': {
                return {
                    fontSize: 16,
                    fontWeight: 400,
                }
            }
        }
    }

    return <p
        style={{
            textAlign: 'center',
            color: color ?? '#212428',
            margin: 0,
            ...cssStyle,
            ...textElementProps(),
        }}
    >{children}</p>
}
