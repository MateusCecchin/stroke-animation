import React, { useRef, useState } from "react";
import Animated, { useAnimatedProps } from "react-native-reanimated";
import { Path } from "react-native-svg";

interface AnimatedStrokeProps {
    d: string;
    progress: Animated.SharedValue<number>;
    color: string;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

export function AnimatedStroke({ d, progress, color }: AnimatedStrokeProps) {
    const [length, setLength] = useState(0);
    const ref = useRef<Path>(null);
    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset:
            length - length * progress.value,
    }));
    return (
        <>
            <AnimatedPath
                animatedProps={animatedProps}
                onLayout={() => setLength(ref.current!.getTotalLength())}
                ref={ref}
                d={d}
                stroke={color}
                strokeLinecap="round"
                strokeWidth={10}
                strokeDasharray={length}
            />
        </>
    );
};
