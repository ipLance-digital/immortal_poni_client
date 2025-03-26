import { CSSProperties } from 'react';

type GapObject = {
  row?: CSSProperties['rowGap'];
  column?: CSSProperties['columnGap'];
};

export interface IStackProps {
  $height?: CSSProperties['height'];
  $flex?: CSSProperties['flex'];
  $padding?: CSSProperties['padding'];
  $direction?: CSSProperties['flexDirection'];
  $align?: CSSProperties['alignItems'];
  $justify?: CSSProperties['justifyContent'];
  $wrap?: CSSProperties['flexWrap'];
  $gap?: CSSProperties['gap'] | GapObject;
  $center?: boolean;
}
