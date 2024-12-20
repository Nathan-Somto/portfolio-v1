import SectionHeading from '../components/section-heading'

export default function SpotifyStats() {
    return (
        <section
            id="tools"
            className="mb-28 bg-black  w-full pb-14 px-12 h-screen flex flex-col items-center mx-auto sticky top-20 pt-10 scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading
                text='Spotify Stats'
                className='!mb-10'
            />
            <img className="mx-auto h-[20rem] object-contain flex-shrink-0 w-[min(80%_,_24rem)]" alt="spotify stats card" src={'https://spotify-github-profile.kittinanx.com/api/view.svg?uid=31pzyvscnti5exli5qzvj4enanc4&redirect=true][https://spotify-github-profile.kittinanx.com/api/view.svg?uid=31pzyvscnti5exli5qzvj4enanc4&cover_image=true&theme=default&show_offline=false&background_color=121212&interchange=false&bar_color=4bdd46&bar_color_cover=true'} />
        </section>
    )
}
