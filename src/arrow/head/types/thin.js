import Element from 'jsx/element';
import { HEAD_DEFAULT_SIZE } from 'consts';

const thin = ({ size = HEAD_DEFAULT_SIZE }) => ({
  node: (
    <g>
      <line
        x1={-size}
        y1={-size}
        x2={0}
        y2={0}
      />
      <line
        x1={0}
        y1={0}
        x2={-size}
        y2={size}
      />
    </g>
  ),
  width: size,
  height: size,
});


export default thin;
