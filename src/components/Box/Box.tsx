import { TouchableOpacity, TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';
import {
    BoxProps as RSNoxProps,
    createBox,
    createRestyleComponent,
    backgroundColor,
    BackgroundColorProps,
    spacing,
    SpacingProps,
    layout,
    LayoutProps,
    border,
    BorderProps,
    spacingShorthand,
    SpacingShorthandProps,
} from '@shopify/restyle';
import { Theme } from '../../theme/theme';

export const Box = createBox<Theme>();

export type BoxProps = RSNoxProps<Theme>;

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme>
    & SpacingProps<Theme>
    & LayoutProps<Theme>
    & BorderProps<Theme>
    & SpacingShorthandProps<Theme>
    & RNTouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
    TouchableOpacityBoxProps, Theme
>([backgroundColor, spacing, spacingShorthand, layout, border], TouchableOpacity);
