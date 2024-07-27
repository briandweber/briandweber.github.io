import { useState } from 'react';
import PrimarySearchAppBar from './SearchAppBar';
import Giscus from '@giscus/react';

function Comment() {

    return (
        <div className='home-wrapper'>
            <PrimarySearchAppBar />
            <div className='giscus'>
            <Giscus
                id="R_kgDOMS_vVw"
                repo="briandweber/briandweber.github.io"
                repoId="MDEwOlJlcG9zaXRvcnkzOTEzMTMwMjA="
                category="Announcements"
                categoryId="DIC_kwDOF1L2fM4B-hVS"
                mapping="specific"
                term="Welcome to @giscus/react component!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="dark_dimmed"
                lang="en"
                loading="lazy"
                />
                </div>
        </div>
    )
}

export default Comment
