import "../app/globals.css";
// This is the navigation options
const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
];


export default function LoldleMenu() {


  return (
    <div>
      <nav className="bg-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-10 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="font-bold text-4xl">Dylan Loldle</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">

                {/* This iterates through navigation options */}
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-3xl font-boldobject-center">Welcome to the fake Loldle!</h1>
        <p className="mt-4 text-gray-700">
          I want to tell Dylan he's super duper colo.
        </p>
      </div>

    </div>

  );
}
