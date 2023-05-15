/* eslint-disable max-len */
import React, { useEffect } from "react";
import { View } from "react-native";
import { Easing, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import Svg from "react-native-svg";
import { AnimatedStroke } from "./AnimatedStroke";

const WIDTH = 100
const HEIGHT = 100
const STROKE_WIDTH = 10
const VIEWBOX_MARGIN = STROKE_WIDTH / 2

export function StrokeAnimation() {
    const progress = useSharedValue(0);

    useEffect(() => {
        progress.value = withRepeat(withTiming(1, {
            duration: 2000,
            easing: Easing.linear,
        }), Infinity);
    }, [progress]);

    return (
        <View>
            <Svg
                width={WIDTH}
                height={HEIGHT}
                viewBox={`${VIEWBOX_MARGIN} ${VIEWBOX_MARGIN} ${WIDTH} ${HEIGHT}`}
                fill="none"
            >
                <AnimatedStroke
                    progress={progress}
                    color="black"
                    d="M87 39.154v40.788c0 .927-.188 1.845-.552 2.7a7.047 7.047 0 0 1-1.572 2.29 7.266 7.266 0 0 1-2.352 1.53A7.422 7.422 0 0 1 79.75 87l-21.753-.003a3.676 3.676 0 0 1-2.563-1.034 3.482 3.482 0 0 1-1.062-2.495V55.235h-21.75v28.233c0 .936-.382 1.833-1.061 2.495a3.676 3.676 0 0 1-2.563 1.034L7.25 87a7.423 7.423 0 0 1-2.775-.537 7.267 7.267 0 0 1-2.352-1.53 7.049 7.049 0 0 1-1.572-2.29A6.896 6.896 0 0 1 0 79.942V39.154c0-.983.212-1.956.621-2.855a7.082 7.082 0 0 1 1.752-2.367L38.62 1.846A7.331 7.331 0 0 1 43.497 0c1.806 0 3.546.658 4.877 1.845l36.253 32.087A7.082 7.082 0 0 1 86.38 36.3c.409.899.62 1.871.621 2.854Z"

                />
            </Svg>
        </View>
    );
};
