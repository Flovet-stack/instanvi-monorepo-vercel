import React from 'react';
import {
  SpinnerCircular,
  SpinnerCircularFixed,
  SpinnerCircularSplit,
  SpinnerDiamond,
  SpinnerDotted,
  SpinnerInfinity,
  SpinnerRomb,
  SpinnerRound,
  SpinnerRoundFilled,
  SpinnerRoundOutlined,
} from 'spinners-react';

import { NamedColor } from './types';

type Spinner =
  | 'SpinnerCircular'
  | 'SpinnerCircularFixed'
  | 'SpinnerCircularSplit'
  | 'SpinnerDiamond'
  | 'SpinnerDotted'
  | 'SpinnerInfinity'
  | 'SpinnerRomb'
  | 'SpinnerRound'
  | 'SpinnerRoundFilled'
  | 'SpinnerRoundOutlined';

interface AppLoaderProps {
  text?: string;
  size?: number;
  type?: Spinner;
  color?: string | NamedColor;
}

const spinnerComponents = {
  SpinnerCircular,
  SpinnerCircularFixed,
  SpinnerCircularSplit,
  SpinnerDiamond,
  SpinnerDotted,
  SpinnerInfinity,
  SpinnerRomb,
  SpinnerRound,
  SpinnerRoundFilled,
  SpinnerRoundOutlined,
};

const AppLoader: React.FC<AppLoaderProps> = ({
  text,
  size,
  type = 'SpinnerCircular',
  color = 'white',
}) => {
  const style = { height: size ?? 25, width: size ?? 25 };
  const SpinnerComponent = spinnerComponents[type] || SpinnerCircular;

  return (
    <div className="app-loader flex flex-col items-center justify-center">
      <SpinnerComponent color={color} style={style} />
      {text && <p className="mt-2 font-medium">{text}</p>}
    </div>
  );
};

export default AppLoader;
