import Switch from '@components/Switch';

const Header = () => {
  const handleChangeDarkMode = (isChecked: boolean) => {
    document.documentElement.classList[isChecked ? 'add' : 'remove']('dark');
  };

  return (
    <div className="container flex items-center justify-between py-4">
      <span className="font-medium uppercase">Dmytro Kadchenko</span>
      <p className="text-body-2 flex items-center px-2">
        <span className="mr-1 block h-2 w-2 animate-pulse rounded bg-green" />
        open to work
      </p>
      <div className="relative ml-auto inline-flex justify-center">
        <Switch onChange={handleChangeDarkMode} />
      </div>
    </div>
  );
};

export default Header;
