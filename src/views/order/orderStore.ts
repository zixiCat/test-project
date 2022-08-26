import create from 'zustand';

import {MenuItem} from '../recommend';

export interface OrderStore {
  /**
   * All menu
   */
  menuList: MenuItem[];
  setMenuList: (val: MenuItem[]) => void;
  /**
   * The menu item which is currently previewed
   */
  curPreviewMenuItem?: MenuItem;
  setCurPreviewMenuItem: (val: MenuItem) => void;
  /**
   * The currently placed order
   */
  order: MenuItem[];
  setOrder: (val: MenuItem[]) => void;
}

const useOrderStore = create<OrderStore>(set => ({
  menuList: [],
  setMenuList: (val: MenuItem[]) => {
    set({menuList: val});
  },
  setCurPreviewMenuItem: (val: MenuItem) => {
    set({curPreviewMenuItem: val});
  },
  order: [],
  setOrder: (val: MenuItem[]) => {
    set({order: val});
  },
}));

export default useOrderStore;
