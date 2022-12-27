import Svg, { Path } from "react-native-svg";
function ArrowSvg({ color }) {
    return (
        <Svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            viewBox="0 0 768.0 512.0"
            enable-background="new 0 0 768.0 512.0"
        >
            <Path
                fill={color}
                stroke={color}
                fillOpacity="0.000"
                strokeOpacity="1.000"
                fillRule="nonzero"
                strokeWidth="57.06787"
                strokeLinejoin="round"
                strokeLinecap="round"
                d="M356.46,29.94L36.38,256.00L356.46,482.06M738.00,256.00L356.22,256.00"
            />
            <Path
                fill={color}
                stroke={color}
                fillOpacity="1.000"
                strokeOpacity="0.996"
                fillRule="nonzero"
                strokeWidth="15.465548"
                strokeLinejoin="round"
                strokeLinecap="round"
                d="M270.47,233.77C282.75,233.77,292.71,243.72,292.71,256.00C292.71,268.28,282.75,278.23,270.47,278.23C258.19,278.23,248.24,268.28,248.24,256.00C248.24,243.72,258.19,233.77,270.47,233.77z"
            />
        </Svg>
    );
}

export default ArrowSvg;
