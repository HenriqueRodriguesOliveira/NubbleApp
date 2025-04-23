import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Text } from '../Text/Text';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { buttonPresets } from './buttonPresets';

export type ButtonPreset = 'primary' | 'outline' | 'secondary';

interface ButtonProps extends TouchableOpacityBoxProps {
    title: string;
    loading?: boolean;
    preset?: ButtonPreset;
}

export function Button({ title, loading, preset = 'primary', ...TouchableOpacityBoxProps }: ButtonProps) {
    const ButtonPreset = buttonPresets[preset];
    return (
        <TouchableOpacityBox
            paddingHorizontal="s20"
            height={50}
            alignItems="center"
            justifyContent="center"
            borderRadius="s16"
            {...ButtonPreset.container}
            {...TouchableOpacityBoxProps}
        >
            {loading ? <ActivityIndicator /> :
                <Text preset="paragraphMedium" bold color={ButtonPreset.content} >{title}</Text>
            }
        </TouchableOpacityBox>
    );
}
