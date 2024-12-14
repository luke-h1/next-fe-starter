import { dogApi } from './api';

export interface ListDogResponse {
  message: string;
}

export type Animal = 'akita' | 'boxer' | 'hound';

const dogService = {
  listDogImage: async (animal: Animal): Promise<string> => {
    const { data } = await dogApi.get<ListDogResponse>(
      `/breed/${animal}/images/random`,
    );
    return data.message;
  },
} as const;

export default dogService;
