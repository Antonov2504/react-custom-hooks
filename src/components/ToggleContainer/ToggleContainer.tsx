import { useState } from 'react';
import { useToggle } from '../../hooks/useToggle';
import * as Styled from './ToggleContainer.styled';

const COLORS = ['blue', 'orange', 'cyan', 'teal'];

export const ToggleContainer = () => {
  const [type, setType] = useState('color');

  const [value, toggleValue] = useToggle(COLORS);
  const [boolean, toggleBoolean] = useToggle();

  const color = type === 'color' ? value : boolean;

  const handleToggle = (color?: string) => {
    if (type === 'color') {
      toggleValue(color);
      return;
    }

    toggleBoolean();
  };

  return (
    <Styled.Container color={(typeof color === 'string') ? color : color ? 'green' : 'red'} isBoolean={type === 'boolean'}>
      <Styled.Buttons>
        <Styled.ButtonSet type='button' onClick={() => setType('color')} disabled={type === 'color'}>Set color</Styled.ButtonSet>
        <Styled.ButtonSet type='button' onClick={() => setType('boolean')} disabled={type === 'boolean'}>Set boolean</Styled.ButtonSet>
        <Styled.Button type='button' onClick={() => handleToggle()}>
          {`${type === 'color' ? value : boolean}`}
        </Styled.Button>
        {type === 'color' && (
          <Styled.ButtonsColors>
            {COLORS.map((color) => (
              <Styled.ButtonColor
                type='button'
                color={color}
                onClick={() => handleToggle(color)}
                disabled={color === value}
              >
                {color.substring(0, 1).toUpperCase()}
              </Styled.ButtonColor>)
            )}
          </Styled.ButtonsColors>
        )}
      </Styled.Buttons>
    </Styled.Container>
  );
};
