import React from 'react';
import { Helmet } from 'react-helmet';

const AdsenseComp = () => {
    return (
        <div>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2681350025331153"
                    crossorigin="anonymous"></script>

                <ins className="ads-space"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-2681350025331153"
                    data-ad-slot="3244505238"
                    data-ad-format="auto"
                    data-full-width-responsive="true">
                </ins>

                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({ });
                </script>

        </div>
    );
};

export default AdsenseComp;