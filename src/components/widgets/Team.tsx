import Image from 'next/image';
import { teamData } from '~/shared/data';
import HeaderWidget from '../common/HeaderWidget';

const Team = () => {
  const { header, teams } = teamData;

  return (
    <section id="team">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {header && <HeaderWidget header={header} titleClassname="text-2xl sm:text-3xl" />}
        <div className="flex flex-wrap justify-center">
          {teams.map(({ name, occupation, image, items }, index) => (
            <div key={`item-team-${index}`} className="p-2 flex flex-col items-center">
              <Image
                src={image.src}
                width={240}
                height={320}
                alt={image.alt}
                className="h-72 w-60 rounded-md object-cover"
              />
              <div className="relative mt-3 text-center">
                <h3 className="mb-1.5 text-xl font-bold">{name}</h3>
                <p className="mb-7 text-base font-medium capitalize text-gray-600 dark:text-slate-400">
                  {occupation}
                </p>
                <ul className="flex items-center justify-center space-x-2">
                  {items &&
                    items.map(
                      ({ title, href, icon: Icon }, index2) =>
                        Icon &&
                        href && (
                          <li
                            key={`team-${index2}`}
                            className="flex items-center justify-center rounded text-primary-700 hover:text-gray-500"
                          >
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={title as string}
                              className="flex items-center justify-center rounded-sm bg-transparent p-0.5 text-primary-900 hover:bg-primary-900 hover:text-slate-200 hover:dark:bg-slate-800 hover:dark:text-slate-200"
                            >
                              <Icon className="h-6 w-6 p-0.5" />
                            </a>
                          </li>
                        ),
                    )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
