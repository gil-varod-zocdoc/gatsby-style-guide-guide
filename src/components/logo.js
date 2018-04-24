import React from "react";
import Link from "gatsby-link";

const Logo = ({ siteTitle }) => (
    <div className="c-logo">
        <Link className="c-logo__link" to="/">
            <svg
                className="c-logo__img"
                width="644px"
                height="53px"
                viewBox="0 0 644 53"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref="http://www.w3.org/1999/xlink"
            >
                <title>{siteTitle}</title>
                <path
                    d="M20.86,52.36 C18.8533233,52.36 16.8816764,52.1850017 14.945,51.835 C13.0083236,51.4849983 11.1416756,50.97167 9.345,50.295 C7.54832435,49.6183299 5.8566746,48.8250046 4.27,47.915 C2.6833254,47.0049955 1.2600063,45.9900056 0,44.87 L10.15,33.81 C11.3166725,35.0700063 12.8683236,36.1899951 14.805,37.17 C16.7416763,38.1500049 18.7366564,38.64 20.79,38.64 C21.723338,38.64 22.5749962,38.4766683 23.345,38.15 C24.1150039,37.8233317 24.5,37.2166711 24.5,36.33 C24.5,35.863331 24.3716679,35.4666683 24.115,35.14 C23.858332,34.8133317 23.4033366,34.4750018 22.75,34.125 C22.0966634,33.7749983 21.198339,33.3900021 20.055,32.97 C18.911661,32.5499979 17.4766753,32.0600028 15.75,31.5 C14.0699916,30.9399972 12.4600077,30.2750039 10.92,29.505 C9.3799923,28.7349962 8.01500595,27.7900056 6.825,26.67 C5.63499405,25.5499944 4.6900035,24.2083412 3.99,22.645 C3.2899965,21.0816589 2.94,19.2033443 2.94,17.01 C2.94,13.9299846 3.5699937,11.3166774 4.83,9.17 C6.0900063,7.0233226 7.71165675,5.26167355 9.695,3.885 C11.6783432,2.50832645 13.9066543,1.5166697 16.38,0.91 C18.8533457,0.3033303 21.3033212,0 23.73,0 C26.996683,0 30.3216498,0.6299937 33.705,1.89 C37.0883502,3.1500063 40.0633205,4.9699881 42.63,7.35 L32.27,17.92 C31.1499944,16.519993 29.7733415,15.4583369 28.14,14.735 C26.5066585,14.0116631 25.0366732,13.65 23.73,13.65 C22.5166606,13.65 21.5366704,13.8249983 20.79,14.175 C20.0433296,14.5250017 19.67,15.0966627 19.67,15.89 C19.67,16.6366704 20.0549961,17.1966648 20.825,17.57 C21.5950038,17.9433352 22.8433247,18.4099972 24.57,18.97 C26.3433422,19.5300028 28.2099902,20.1833296 30.17,20.93 C32.1300098,21.6766704 33.938325,22.644994 35.595,23.835 C37.251675,25.025006 38.6166613,26.4833247 39.69,28.21 C40.7633387,29.9366753 41.3,32.0833205 41.3,34.65 C41.3,37.6366816 40.7050059,40.2383223 39.515,42.455 C38.324994,44.6716778 36.7616763,46.5149927 34.825,47.985 C32.8883236,49.4550074 30.7066788,50.551663 28.28,51.275 C25.8533212,51.998337 23.3800126,52.36 20.86,52.36 Z M69.38,50.96 L52.72,50.96 L52.72,15.47 L40.54,15.47 L40.54,1.4 L81.56,1.4 L81.56,15.47 L69.38,15.47 L69.38,50.96 Z M112.58,50.96 L95.9200001,50.96 L95.9200001,30.66 L77.2300001,1.4 L97.3200001,1.4 L105.16,15.96 L112.65,1.4 L132.25,1.4 L112.58,30.66 L112.58,50.96 Z M132.89,1.4 L149.69,1.4 L149.69,36.68 L166.14,36.68 L166.14,50.96 L132.89,50.96 L132.89,1.4 Z M169.02,1.4 L203.11,1.4 L203.11,15.26 L184.7,15.26 L184.7,19.53 L201.99,19.53 L201.99,32.48 L184.7,32.48 L184.7,37.1 L204.3,37.1 L204.3,50.96 L169.02,50.96 L169.02,1.4 Z M234.13,52.22 C230.209981,52.22 226.581684,51.6133394 223.245,50.4 C219.908317,49.1866606 217.015012,47.4483447 214.565,45.185 C212.114988,42.9216554 210.190007,40.1800161 208.79,36.96 C207.389993,33.7399839 206.69,30.1466865 206.69,26.18 C206.69,22.2133135 207.389993,18.6200161 208.79,15.4 C210.190007,12.1799839 212.103321,9.4266781 214.53,7.14 C216.956679,4.8533219 219.803317,3.09167285 223.07,1.855 C226.336683,0.61832715 229.836648,0 233.57,0 C237.443353,0 241.118316,0.6299937 244.595,1.89 C248.071684,3.1500063 250.906656,4.8766557 253.1,7.07 L243.37,18.76 C242.343328,17.5466606 241.130007,16.578337 239.73,15.855 C238.329993,15.1316631 236.603344,14.77 234.55,14.77 C233.19666,14.77 231.87834,15.0383307 230.595,15.575 C229.31166,16.1116694 228.180005,16.8816617 227.2,17.885 C226.219995,18.8883384 225.42667,20.089993 224.82,21.49 C224.213331,22.890007 223.91,24.4533247 223.91,26.18 C223.91,29.6333506 224.808325,32.4449892 226.605,34.615 C228.401676,36.7850109 231.283314,37.87 235.25,37.87 C235.950004,37.87 236.67333,37.8116673 237.42,37.695 C238.166671,37.5783328 238.749998,37.4033345 239.17,37.17 L239.17,33.39 L231.19,33.39 L231.19,20.3 L253.94,20.3 L253.94,47.39 C252.773328,48.0900035 251.431674,48.7316638 249.915,49.315 C248.398326,49.8983363 246.788342,50.3999979 245.085,50.82 C243.381658,51.2400021 241.596676,51.5783321 239.73,51.835 C237.863324,52.091668 235.996676,52.22 234.13,52.22 Z M282.23,52.36 C278.356648,52.36 274.985015,51.8233387 272.115,50.75 C269.244986,49.6766613 266.853343,48.206676 264.94,46.34 C263.026657,44.473324 261.603338,42.2683461 260.67,39.725 C259.736662,37.181654 259.27,34.4400147 259.27,31.5 L259.27,1.4 L275.93,1.4 L275.93,29.68 C275.93,32.0600119 276.501661,33.9149934 277.645,35.245 C278.788339,36.5750067 280.40999,37.24 282.51,37.24 C284.610011,37.24 286.231661,36.5750067 287.375,35.245 C288.518339,33.9149934 289.09,32.0600119 289.09,29.68 L289.09,1.4 L305.68,1.4 L305.68,31.5 C305.68,34.4400147 305.178339,37.181654 304.175,39.725 C303.171662,42.2683461 301.69001,44.473324 299.73,46.34 C297.76999,48.206676 295.331682,49.6766613 292.415,50.75 C289.498319,51.8233387 286.103353,52.36 282.23,52.36 Z M311.92,1.4 L328.72,1.4 L328.72,50.96 L311.92,50.96 L311.92,1.4 Z M335.66,50.96 L335.66,1.4 L354.14,1.4 C358.06002,1.4 361.804983,1.78499615 365.375,2.555 C368.945018,3.32500385 372.094987,4.65499055 374.825,6.545 C377.555014,8.43500945 379.736659,10.9433177 381.37,14.07 C383.003342,17.1966823 383.82,21.1399762 383.82,25.9 C383.82,30.2400217 383.038342,33.9966508 381.475,37.17 C379.911659,40.3433492 377.823347,42.9449899 375.21,44.975 C372.596654,47.0050102 369.586684,48.5099951 366.18,49.49 C362.773317,50.4700049 359.226685,50.96 355.54,50.96 L335.66,50.96 Z M351.69,15.54 L351.69,36.68 L354.77,36.68 C358.69002,36.68 361.69999,35.8283419 363.8,34.125 C365.900011,32.4216582 366.95,29.6333527 366.95,25.76 C366.95,22.5399839 365.900011,20.0316757 363.8,18.235 C361.69999,16.4383244 358.900018,15.54 355.4,15.54 L351.69,15.54 Z M388.52,1.4 L422.61,1.4 L422.61,15.26 L404.2,15.26 L404.2,19.53 L421.49,19.53 L421.49,32.48 L404.2,32.48 L404.2,37.1 L423.8,37.1 L423.8,50.96 L388.52,50.96 L388.52,1.4 Z M453.63,52.22 C449.709981,52.22 446.081684,51.6133394 442.745,50.4 C439.408317,49.1866606 436.515013,47.4483447 434.065,45.185 C431.614988,42.9216554 429.690007,40.1800161 428.29,36.96 C426.889993,33.7399839 426.19,30.1466865 426.19,26.18 C426.19,22.2133135 426.889993,18.6200161 428.29,15.4 C429.690007,12.1799839 431.603322,9.4266781 434.03,7.14 C436.456679,4.8533219 439.303317,3.09167285 442.57,1.855 C445.836683,0.61832715 449.336648,0 453.07,0 C456.943353,0 460.618316,0.6299937 464.095,1.89 C467.571685,3.1500063 470.406656,4.8766557 472.6,7.07 L462.87,18.76 C461.843329,17.5466606 460.630007,16.578337 459.23,15.855 C457.829993,15.1316631 456.103344,14.77 454.05,14.77 C452.69666,14.77 451.37834,15.0383307 450.095,15.575 C448.811661,16.1116694 447.680005,16.8816617 446.7,17.885 C445.719996,18.8883384 444.92667,20.089993 444.32,21.49 C443.713331,22.890007 443.41,24.4533247 443.41,26.18 C443.41,29.6333506 444.308325,32.4449892 446.105,34.615 C447.901676,36.7850109 450.783314,37.87 454.75,37.87 C455.450004,37.87 456.17333,37.8116673 456.92,37.695 C457.666671,37.5783328 458.249998,37.4033345 458.67,37.17 L458.67,33.39 L450.69,33.39 L450.69,20.3 L473.44,20.3 L473.44,47.39 C472.273328,48.0900035 470.931675,48.7316638 469.415,49.315 C467.898326,49.8983363 466.288342,50.3999979 464.585,50.82 C462.881659,51.2400021 461.096676,51.5783321 459.23,51.835 C457.363324,52.091668 455.496676,52.22 453.63,52.22 Z M501.730001,52.36 C497.856648,52.36 494.485015,51.8233387 491.615001,50.75 C488.744986,49.6766613 486.353343,48.206676 484.440001,46.34 C482.526658,44.473324 481.103339,42.2683461 480.170001,39.725 C479.236663,37.181654 478.770001,34.4400147 478.770001,31.5 L478.770001,1.4 L495.430001,1.4 L495.430001,29.68 C495.430001,32.0600119 496.001661,33.9149934 497.145001,35.245 C498.28834,36.5750067 499.90999,37.24 502.010001,37.24 C504.110011,37.24 505.731661,36.5750067 506.875001,35.245 C508.01834,33.9149934 508.590001,32.0600119 508.590001,29.68 L508.590001,1.4 L525.180001,1.4 L525.180001,31.5 C525.180001,34.4400147 524.678339,37.181654 523.675001,39.725 C522.671662,42.2683461 521.19001,44.473324 519.230001,46.34 C517.269991,48.206676 514.831682,49.6766613 511.915001,50.75 C508.998319,51.8233387 505.603353,52.36 501.730001,52.36 Z M531.420001,1.4 L548.220001,1.4 L548.220001,50.96 L531.420001,50.96 L531.420001,1.4 Z M555.160001,50.96 L555.160001,1.4 L573.640001,1.4 C577.56002,1.4 581.304983,1.78499615 584.875001,2.555 C588.445018,3.32500385 591.594987,4.65499055 594.325001,6.545 C597.055014,8.43500945 599.236659,10.9433177 600.870001,14.07 C602.503342,17.1966823 603.320001,21.1399762 603.320001,25.9 C603.320001,30.2400217 602.538342,33.9966508 600.975001,37.17 C599.411659,40.3433492 597.323347,42.9449899 594.710001,44.975 C592.096654,47.0050102 589.086684,48.5099951 585.680001,49.49 C582.273317,50.4700049 578.726686,50.96 575.040001,50.96 L555.160001,50.96 Z M571.190001,15.54 L571.190001,36.68 L574.270001,36.68 C578.19002,36.68 581.19999,35.8283419 583.300001,34.125 C585.400011,32.4216582 586.450001,29.6333527 586.450001,25.76 C586.450001,22.5399839 585.400011,20.0316757 583.300001,18.235 C581.19999,16.4383244 578.400018,15.54 574.900001,15.54 L571.190001,15.54 Z M608.020001,1.4 L642.110001,1.4 L642.110001,15.26 L623.700001,15.26 L623.700001,19.53 L640.990001,19.53 L640.990001,32.48 L623.700001,32.48 L623.700001,37.1 L643.300001,37.1 L643.300001,50.96 L608.020001,50.96 L608.020001,1.4 Z"
                    id="STYLEGUIDEGUIDE"
                    fill="#565656"
                />
            </svg>
        </Link>
    </div>
);

export default Logo;
