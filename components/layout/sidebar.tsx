import { CloseCircle, ArrowDown2 } from "iconsax-react";
import { useState } from "react";

type SidebarType = {
  showSidebar: boolean;
  setShowSidebar: (showStatus: boolean) => void;
};

export function Dropdown() {
  return (
    <ul className="bg-neutral-400">
      <li>
        <span>قطعات کامپیوتر</span>
        <i>
          <ArrowDown2 className="w-5 h-5" />
        </i>
      </li>
    </ul>
  );
}

export default function Sidebar({ showSidebar, setShowSidebar }: SidebarType) {
  const [openDropdowns, setOpenDropdowns] = useState<{
    [prop: number]: boolean;
  }>({});

  const updateOpenDropdowns = (id: number) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      id: !prev[id],
    }));
  };

  return (
    <>
      <div onClick={() => setShowSidebar(false)} className={`${ showSidebar ? "block" : "hidden"} fixed right-0 left-0 top-0 bottom-0 w-full min-h-screen bg-neutral-700 backdrop-blur opacity-50`}></div>
      <div className={`${ showSidebar ? "right-0" : "-right-full"} fixed bottom-0 min-h-screen bg-white w-[250px] border border-l border-neutral-500 transition-all duration-300`}>
        <div className="h-16 px-4 bg-tint-600 flex items-center justify-between text-neutral-950">
          <span className="text-cp1 font-bold">فروشگاه کاستومی</span>
          <button onClick={(_e) => setShowSidebar(false)}>
            <CloseCircle className="w-6 h-6" />
          </button>
        </div>
        <div>
          <ul className="text-cp1">
            <li onClick={(_e)=> updateOpenDropdowns(1)} className="flex items-center justify-between p-4 border-b border-solid border-neutral-600">
              <span>کامپیوتر و قطعات</span>
              <i>
                <ArrowDown2 className="w-5 h-5" />
              </i>
              {/* {openDropdowns[1] && <Dropdown />} */}
            </li>
            <li className="flex items-center justify-between p-4 border-b border-solid border-neutral-600">
              <span>کامپیوتر و قطعات</span>
              <i>
                <ArrowDown2 className="w-5 h-5" />
              </i>
            </li>
            <li className="flex items-center justify-between p-4 border-b border-solid border-neutral-600">
              <span>کامپیوتر و قطعات</span>
              <i>
                <ArrowDown2 className="w-5 h-5" />
              </i>
            </li>
            <li className="flex items-center justify-between p-4 border-b border-solid border-neutral-600">
              <span>کامپیوتر و قطعات</span>
              <i>
                <ArrowDown2 className="w-5 h-5" />
              </i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
