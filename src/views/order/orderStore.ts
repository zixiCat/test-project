import create from 'zustand';
import {MenuItem} from '../recommend';

export interface OrderStore {
  menuList: MenuItem[];
  setMenuList: (val: MenuItem[]) => void;
  curPreviewMenuItem?: MenuItem;
  setCurPreviewMenuItem: (val: MenuItem) => void;
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
