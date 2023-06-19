import { ILinearGradientProps } from "native-base/src/components/primitives/Box/types";
import { ResponsiveValue, ColorType } from "native-base/src/components/types";
import { ReactNode } from "react";
import { Box, useToast } from 'native-base';

interface Props {
    title?: ReactNode;
    bg?: ResponsiveValue<ColorType | (string & {}) | ILinearGradientProps>;
}

function Toast(props: Props) {
    const toast = useToast();
    const title = props.title
    const background = props.bg
    return toast.show({
        render: () => {
            return <Box bg={background} px={5} py={2} rounded="sm" mb={5}>
                {title}
            </Box>;
        }
    });
}

export { Toast };
