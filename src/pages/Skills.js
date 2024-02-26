

const Skills = () => {
    return (
        <div className="container mx-auto px-4 py-10" id="skills">
            <h2 className="text-2xl font-bold mb-4">Skills & Abilities</h2>
            <ul className="list-disc pl-4">
                <li>Java</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>PHP</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>SQL</li>
                <li>Git</li>
                <li>jQuery</li>
                <li>Node JS</li>
                <li>Express JS</li>
                <li>MongoDB</li>
            </ul>

            <div className="xl:grid xl:grid-cols-3 xl:gap-3">
                <div className="rounded-xl md:flex p-1 max-w-md md:max-w-sm mx-auto xl:mx-0 bg-slate-50 overflow-hidden">
                    <div className="rounded-xl md:w-1/3 md:flex-shrink-0">
                        <img className=" rounded-xl h-40 md:h-full w-full object-cover md:w-48" src="https://via.placeholder.com/150" alt="Placeholder" />
                    </div>
                    <div className="rounded-xl p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card Title</div>
                        <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className="rounded-xl md:flex p-1 max-w-md md:max-w-sm mx-auto xl:mx-0 bg-slate-50 overflow-hidden">
                    <div className="rounded-xl md:w-1/3 md:flex-shrink-0">
                        <img className=" rounded-xl h-40 md:h-full w-full object-cover md:w-48" src="https://via.placeholder.com/150" alt="Placeholder" />
                    </div>
                    <div className="rounded-xl p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card Title</div>
                        <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className="rounded-xl md:flex p-1 max-w-md md:max-w-sm mx-auto xl:mx-0 bg-slate-50 overflow-hidden">
                    <div className="rounded-xl md:w-1/3 md:flex-shrink-0">
                        <img className=" rounded-xl h-40 md:h-full w-full object-cover md:w-48" src="https://via.placeholder.com/150" alt="Placeholder" />
                    </div>
                    <div className="rounded-xl p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card Title</div>
                        <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className="rounded-xl md:flex p-1 max-w-md md:max-w-sm mx-auto xl:mx-0 bg-slate-50 overflow-hidden">
                    <div className="rounded-xl md:w-1/3 md:flex-shrink-0">
                        <img className=" rounded-xl h-40 md:h-full w-full object-cover md:w-48" src="https://via.placeholder.com/150" alt="Placeholder" />
                    </div>
                    <div className="rounded-xl p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card Title</div>
                        <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
