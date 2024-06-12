import { HStack } from './Stack'
import { TextElement } from './TextElement'
import { Colors } from '../theme/ColorPalette'

interface Props {
    text: string
    isSelected: boolean
    onChange(isSelected: boolean): void
}
export const CheckBoxElement = ({ text, isSelected, onChange }: Props) => {
    return <HStack
        height={24}
        alignItems={'end'}
        gap={8}
    >
        <CheckBox
            isSelected={isSelected}
            onChange={onChange}
        ></CheckBox>
        <TextElement
            textStyle={'TProperty'}
            color={Colors.TText}
        >{text}</TextElement>
    </HStack>
}

interface CheckBoxProps {
    isSelected: boolean
    onChange(isSelected:boolean): void
}

const CheckBox = ({ isSelected, onChange }: CheckBoxProps) => {
    return <HStack
        width={16}
        height={16}
        backgroundColor={isSelected ? Colors.Selected : Colors.Unselected}
        onClick={() => onChange(!isSelected)}
    ></HStack>
}
