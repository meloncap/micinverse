export default function Team() {
    return (
        <div class="py-20">
            <div class="container mx-auto px-6 md:px-12 xl:px-32">
                <div class="mb-16 text-center">
                    <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Our amazing team</h2>
                    <p class="text-gray-600 lg:w-8/12 lg:mx-auto">To build this mini marketplace, of course we did not work alone, but we have a strong team and are able to solve every problem on the project. We will continue to innovate and start from here, for you global BSC Army.</p>
                </div>
                <div class="grid gap-12 items-center md:grid-cols-3">
                    <div class="space-y-4 text-center">
                        <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                            src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="woman" loading="lazy" width="640" height="805"/>
                            <div>
                                <h4 class="text-2xl">Hentoni Doe</h4>
                                <span class="block text-sm text-gray-500">CEO-Founder</span>
                            </div>
                    </div>
                    <div class="space-y-4 text-center">
                        <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                            src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg" alt="man" loading="lazy" width="1000" height="667"/>
                            <div>
                                <h4 class="text-2xl">Jonathan Doe</h4>
                                <span class="block text-sm text-gray-500">Chief Technical Officer</span>
                            </div>
                    </div>
                    <div class="space-y-4 text-center">
                        <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                            src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg" alt="woman" loading="lazy" width="1000" height="667"/>
                            <div>
                                <h4 class="text-2xl">Anabelle Doe</h4>
                                <span class="block text-sm text-gray-500">Chief Operations Officer</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}