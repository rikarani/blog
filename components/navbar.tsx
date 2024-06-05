export default function Navbar(): React.JSX.Element {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-md">
      <div className="px-6 py-4">
        <div className={`flex items-center justify-between py-0`}>
          <div className="flex items-center justify-start">
            <a href="/" className="flex md:mr-24">
              <span className="self-center whitespace-nowrap text-xl font-semibold text-white sm:text-2xl">
                Erikacang
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
