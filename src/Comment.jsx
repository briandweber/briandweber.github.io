import PrimarySearchAppBar from './SearchAppBar';
import Giscus from '@giscus/react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {  NavLink } from 'react-router-dom';
import MobileNav from "./MobileNav"


function Comment() {

    return (
        <div className='home-wrapper'>
            <div className='primary-search-app-bar'>
            <PrimarySearchAppBar />
            </div>
                <div className="mobile-nav">
                    <MobileNav />
                </div>
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
            <div>
                <Stack spacing={2} direction="row">
                    <Button color="primary" style={{margin: 'auto'}} size="large" variant="outlined"><NavLink to="/">Home</NavLink></Button>
                </Stack>
            </div>
        </div>
    )
}

export default Comment
