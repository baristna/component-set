import styled, { css } from 'styled-components';
import { space, color, typography, compose, layout, border } from 'styled-system';
import { ITypographyTextProps } from '../../types';
import { font } from '../../styles/fonts';
import { shouldAvoidPropsFromDOM } from '../../utils/blacklisted-forward-props';

const defaultTextStyles = {
  letterSpacing: 'normal',
  fontWeight: 'regular',
  fontStretch: 'normal',
  mt: 0,
  mb: 0,
};

const BaseCSS = css`
  font-family: ${font};
`;

export const Text = styled('p').withConfig<ITypographyTextProps>({
  shouldForwardProp: shouldAvoidPropsFromDOM,
})`
  ${compose(space, color, typography, layout, border)}
  ${({
    textTransform, cursor, textOverflow,
    whiteSpace, textDecoration,
  }: ITypographyTextProps) => css`
    ${textTransform && `text-transform: ${textTransform};`}
    ${cursor && `cursor: ${cursor};`}
    ${textOverflow && `text-overflow: ${textOverflow};`}
    ${whiteSpace && `white-space: ${whiteSpace};`}
    ${textDecoration && `text-decoration: ${textDecoration};`}
  `}
  ${BaseCSS}
`;

export const Title = styled(Text)``;
Title.defaultProps = {
  ...defaultTextStyles,
  fontSize: 6,
  fontWeight: 'regular',
  lineHeight: 1.33,
  color: 'text',
  as: 'h1',
};

export const Subtitle1 = styled(Text)``;
Subtitle1.defaultProps = {
  ...defaultTextStyles,
  fontSize: 5,
  fontWeight: 'medium',
  lineHeight: 1.4,
  color: 'text',
  as: 'h3',
};

export const Subtitle2 = styled(Text)``;
Subtitle2.defaultProps = {
  ...defaultTextStyles,
  fontSize: 5,
  fontWeight: 'regular',
  lineHeight: 1.4,
  color: 'text',
  as: 'h6',
};

export const Legend = styled(Text)``;
Legend.defaultProps = {
  ...defaultTextStyles,
  fontSize: 3,
  fontWeight: 'medium',
  lineHeight: 1.5,
  color: 'text',
  as: 'legend',
};

export const Body1 = styled(Text)``;
Body1.defaultProps = {
  ...defaultTextStyles,
  fontSize: 3,
  fontWeight: 'regular',
  lineHeight: 1.5,
  color: 'text',
  as: 'p',
};

export const Body2 = styled(Text)``;
Body2.defaultProps = {
  ...defaultTextStyles,
  fontSize: 2,
  fontWeight: 'regular',
  lineHeight: 1.43,
  color: 'text',
  as: 'p',
};

export const ButtonText = styled(Text)``;
ButtonText.defaultProps = {
  ...defaultTextStyles,
  textTransform: 'uppercase',
  fontSize: 2,
  lineHeight: 1.43,
  fontWeight: 'medium',
  letterSpacing: 1.25,
  color: 'text',
};

export const Section = styled(Text)``;
Section.defaultProps = {
  ...defaultTextStyles,
  fontSize: 1,
  textTransform: 'uppercase',
  fontWeight: 'medium',
  letterSpacing: 0.2,
  lineHeight: 1.67,
  color: 'text',
  as: 'section',
};

export const Caption = styled(Text)``;
Caption.defaultProps = {
  ...defaultTextStyles,
  fontSize: 1,
  fontWeight: 'regular',
  letterSpacing: 0.2,
  lineHeight: 1.33,
  color: 'text',
  as: 'label',
};
