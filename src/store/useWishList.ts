import { create } from 'zustand';

export interface IWishListStore {
    wishList: string[];
    addBook: (ISBN: string) => void;
    removeBook: (ISBN: string) => void;
}

export const useWishList = create<IWishListStore>((set) => ({
    wishList: [] as string[],
    addBook: (ISBN: string) => set(state => {
        const wishList = [...state.wishList, ISBN];
        return { wishList }
    }),
    removeBook: (ISBN: string) => set(state => {
        const wishList = state.wishList.filter(item => item !== ISBN);
        return { wishList }
    })
}))