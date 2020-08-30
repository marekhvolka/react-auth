import styled, { css, ThemeProps } from 'styled-components';
import { Button as AntdButton } from 'antd'
import { theme } from '../../theme';

type Props = ThemeProps<typeof theme> & {
  float?: string;
  center?: boolean;
};

export const Button = styled(AntdButton)<Props>`
  float: ${(props) => props.float || 'none'};
  margin: 0 10px;
 
  ${(props: Props) => props.center
    && css`
      display: block;
      margin-left: auto;
      margin-right: auto;
    `}
`;
