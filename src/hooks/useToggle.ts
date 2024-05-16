import { Reducer, useReducer } from "react";

type State = {
  value: boolean | string;
  colors: string[];
};

type ReturnValue = [
  value: string | boolean,
  toggle: (color?: string) => void
];

const initState: State = {
  value: false,
  colors: [],
};

const reducer: Reducer<State, { type: string, payload?: string }> = (prevState, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...prevState,
        value: action?.payload ?? prevState.value,
      };
    case 'CHANGE_BOOLEAN':
      return {
        ...prevState,
        value: !prevState.value,
      };
    default:
      throw new Error('error');
  };
};

export const useToggle = (colors?: string[]): ReturnValue => {
  const [state, dispatch] = useReducer(reducer, { ...initState, colors: colors ?? [], value: colors?.[0] ?? false });

  const mapColorsIndex = colors?.reduce<Record<string, number>>((acc, curr, index) => {
    acc[curr] = index;
    return acc;
  }, {}) ?? {};

  const toggle = (color?: string) => {
    if (color) {
      dispatch({
        type: 'CHANGE_COLOR',
        payload: color,
      });

      return;
    }

    if (typeof state.value === 'string') {
      const index = mapColorsIndex[state.value];
      const next = index === state.colors.length - 1 ? 0 : index + 1;

      dispatch({
        type: 'CHANGE_COLOR',
        payload: state.colors[next],
      });

      return;
    }

    dispatch({
      type: 'CHANGE_BOOLEAN',
    });
  };

  return [state.value, toggle];
};
