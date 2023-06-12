import { render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { theme } from '@inheartive/ui/theme';

interface Props {
  children: JSX.Element;
}

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

const AllTheProviders = (props: Props) => {
  return (
    <NativeBaseProvider initialWindowMetrics={inset} theme={theme}>
      {props.children}
    </NativeBaseProvider>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customRender = (ui: any, options?: any) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
