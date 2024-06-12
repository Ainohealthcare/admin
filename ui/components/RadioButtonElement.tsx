import styled from '@emotion/styled'
import { CSSProperties } from 'react'

import { HStack } from '@/ui/components/Stack'
import { TextElement } from '@/ui/components/TextElement'
import { Colors } from '@/ui/theme/ColorPalette'

interface Props {
  isSelected: boolean
  onChange(value: number): void
  text: string
  value: number
  cssStyle?: CSSProperties
}

export const RadioButtonElement = ({
    isSelected,
    onChange,
    text,
    value,
    cssStyle,
}: Props) => {
    return (
        <HStack
            gap={8}
            alignItems={'end'}
            height={24}
            style={{ ...cssStyle }}
        >
            <SelectButton
                isSelected={isSelected}
                onClick={() => onChange(value)}
            ></SelectButton>
            <TextElement
                textStyle={'TProperty'}
                color={Colors.TText}
            >
                {text}
            </TextElement>
        </HStack>
    )
}

const SelectButton = styled.div<{ isSelected: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: ${(props) => (props.isSelected ? Colors.Selected : Colors.Unselected)}
`
