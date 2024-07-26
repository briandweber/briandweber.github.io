import { useState } from 'react';
import PrimarySearchAppBar from './SearchAppBar';
import Giscus from '@giscus/react';

function Comment() {

    return (
        <div>

        <PrimarySearchAppBar />
    {/* //     <form onSubmit={handleSubmit}>
    //   <div>
    //     <label>Name:</label>
    //     <input type="text" name="name" value={formData.name} onChange={handleFormChange} required />
    //   </div>
    //   <div>
    //     <label>Email:</label>
    //     <input type="email" name="email" value={formData.email} onChange={handleFormChange} required />
    //   </div>
    //   <div>
    //     <label>Message:</label>
    //     <textarea name="message" value={formData.message} onChange={handleFormChange} required></textarea>
    //   </div>
    //   <button type="submit">Submit</button>
    // </form> */}
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
      theme="light"
      lang="en"
      loading="lazy"
    />
    </div>
    )
}

export default Comment


// data-repo="briandweber/briandweber.github.io"
//         data-repo-id="R_kgDOMS_vVw"
//         data-category="[ENTER CATEGORY NAME HERE]"
//         data-category-id="[ENTER CATEGORY ID HERE]"
//         data-mapping="pathname"
//         data-strict="0"
//         data-reactions-enabled="1"
//         data-emit-metadata="0"
//         data-input-position="bottom"
//         data-theme="preferred_color_scheme"
//         data-lang="en"
//         crossorigin="anonymous"
//         async>
