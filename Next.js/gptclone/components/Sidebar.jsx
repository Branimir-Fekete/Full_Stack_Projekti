import MemberProfile from './MemberProfile';
import NavLinks from './NavLinks';
import SidebarHeaders from './SidebarHeaders';

function Sidebar() {
  return (
    <div className='px-4 w-80 min-h-full bg-base-300 py-12 grid grid-rows-[auto,1fr,auto]'>
      {/*first row */}
      <SidebarHeaders />
      {/*second row */}
      <NavLinks />
      {/*meber profile */}
      <MemberProfile />
    </div>
  );
}

export default Sidebar;
