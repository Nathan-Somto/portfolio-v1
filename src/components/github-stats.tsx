import React from 'react'
import SectionHeading from './section-heading'

export default function GithubStats() {
    return (
        <section
            id="tools"
            className="mb-28 bg-black w-full pb-14 px-12 h-screen flex flex-col items-center mx-auto sticky top-20 pt-10 scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading
                text='Github Stats'
            />
            <img className="mx-auto" src={'https://github-readme-stats.vercel.app/api?username=Nathan-Somto&show_icons=true&theme=radical'} />
        </section>
    )
}
