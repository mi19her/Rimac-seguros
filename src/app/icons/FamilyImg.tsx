import React from "react";

interface FamilyImgProps {
    width?: number;
    height?: number;
    className?: string;
}

const FamilyImg: React.FC<FamilyImgProps> = ({ width, height, className }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={`"0 0 ${width} ${height}"`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <mask id="mask0_12_155796" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="480" height="560">
                <rect width="480" height="560" rx="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_12_155796)">
                <rect width="886" height="590" transform="matrix(-1 0 0 1 720 -15)" fill="url(#pattern0_12_155796)" />
            </g>
            <defs>
                <pattern id="pattern0_12_155796" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#image0_12_155796" transform="scale(0.000726216 0.00109056)" />
                </pattern>
            </defs>
        </svg>
    );
};

export default FamilyImg;

