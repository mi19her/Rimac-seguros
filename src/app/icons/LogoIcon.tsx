import React from "react";

interface LogoIconProps {
    height?: number;
    width?: number;
    color?: string;
    className?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ width, height, color, className }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 86 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6995_140597)">
                <path
                    d="M10.1242 28.1537H3.14513L0.0142212 41.7695H3.57491L4.75327 36.6465H6.59197L9.76272 41.7695H13.6621L10.1071 36.3476C13.2608 35.528 14.3338 33.8374 14.5331 32.0301C14.7323 30.2228 13.7247 28.1508 10.1214 28.1508L10.1242 28.1537ZM10.9781 32.2265C10.8301 33.5584 9.58056 34.344 7.84718 34.344H5.28553L6.23619 30.237H8.9373C10.369 30.237 11.1147 30.9372 10.9752 32.2265H10.9781ZM20.0862 28.1565H23.6696L22.8357 31.7711L20.5302 41.7638H16.9069L20.0862 28.1565ZM50.3876 27.4023L50.4133 41.7609H46.9977L47.0347 31.5149L39.7796 41.7609H36.4693L33.4665 31.458L28.6592 41.7609H24.6886L31.7901 26.816C32.3052 25.8512 32.8033 25.4214 33.7825 25.4157C34.4314 25.4157 35.1373 25.7886 35.4589 26.9213L38.5585 38.1321L46.622 26.6737C47.308 25.7032 47.8858 25.4072 48.6827 25.4271C49.5366 25.4499 50.3905 26.0106 50.3905 27.4023H50.3876ZM74.5497 35.2718C74.3078 37.4605 75.9728 39.1852 78.8874 39.2279C80.3197 39.2678 81.749 39.0756 83.1199 38.6587L82.4282 41.6499C81.2489 41.8687 80.0526 41.983 78.8533 41.9915C73.1209 41.9915 70.4567 39.1454 70.8837 35.2035C71.3676 30.7522 75.2954 27.7581 81.4832 27.7581C82.7973 27.7777 84.1059 27.9322 85.3883 28.2192L84.7621 30.96C83.5507 30.6683 82.308 30.5268 81.062 30.5387C77.4529 30.5103 74.8742 32.3119 74.5526 35.2718H74.5497ZM59.769 36.6749L63.102 31.9703L64.1437 36.6749H59.769ZM65.3619 41.7638H68.823L65.5099 29.9097C65.0773 28.4725 64.2262 28.0939 63.3411 28.1708C62.786 28.2192 62.2025 28.4554 61.6162 29.295L53.0205 41.7666H56.547L58.2946 38.9774H64.7016L65.3676 41.7752L65.3619 41.7638ZM71.4501 11.3104C70.7243 11.558 38.6951 20.418 38.2255 20.529C37.9074 20.6281 37.5687 20.6413 37.2438 20.5673C36.9189 20.4934 36.6193 20.3348 36.3754 20.1077C35.5215 19.3308 35.8716 18.2521 36.1136 17.7056C36.3982 17.0624 42.5661 4.08701 42.5661 4.08701L17.9429 14.4098C16.9154 14.7684 16.5653 13.9232 16.5653 13.9232C16.5653 13.9232 16.1355 12.9868 17.257 12.4574L44.2966 0.313072C44.7406 0.113845 45.5746 -0.278918 46.2235 0.313072C46.8725 0.905063 46.6192 1.79874 46.4199 2.35088C46.3232 2.61273 41.8944 14.9136 41.8944 14.9136C41.8944 14.9136 68.2537 3.60317 69.1076 3.28156C70.7784 2.64688 72.2983 3.02257 73.377 4.28054C73.8582 4.8562 74.1935 5.53934 74.3545 6.27209C74.5155 7.00484 74.4976 7.76561 74.3021 8.48994C73.9292 9.76215 73.1066 10.7355 71.4558 11.299L71.4501 11.3104Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_6995_140597">
                    <rect width="85.3883" height="42" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default LogoIcon;