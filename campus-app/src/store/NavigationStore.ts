import create, { State } from 'zustand';
import { Studio } from '../types';

interface NavigationStore extends State {
  hoveredId: string;

  selectedStudio: Studio | null;
  setSelectedStudio: (studio: Studio) => void;
}

export const useNavigationStore = create<NavigationStore>((setState) => ({
  hoveredId: '',
  selectedStudio: null,
  setSelectedStudio: (selectedStudio) => setState({ selectedStudio }),
}));
