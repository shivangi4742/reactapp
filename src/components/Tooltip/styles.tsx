import Styled, { css } from 'styled-components';
import DS from '../../utils/design-system';
import Tooltip from '@material-ui/core/Tooltip';

const Tooltipstyle = Styled(Tooltip)`
    color: white;
   ${props => props.size == 'sm' && css`
        width: ${DS.TOOLTIPS.SMALL.width}px!important;
        height: ${DS.TOOLTIPS.SMALL.height}px!important;
        font-size: ${DS.TOOLTIPS.SMALL.fontSize}px!important;
   `}
   ${props => props.size == 'lg' && css`
        width: ${DS.TOOLTIPS.LARGE.width}px!important;
        height: ${DS.TOOLTIPS.LARGE.height}px!important;
        font-size: ${DS.TOOLTIPS.LARGE.fontSize}px!important;
   `}
`;

export default Tooltipstyle;