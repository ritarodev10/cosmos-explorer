import { ValidatorData } from "@/types/data.type";
import { create } from "zustand";

type ValidatorState = {
  validatorData: ValidatorData[];
};

type ValidatorAction = {
  setValidatorData: (validatorData: ValidatorData[]) => void;
};

type ValidatorStore = ValidatorState & ValidatorAction;

export const useValidatorStore = create<ValidatorStore>((set) => ({
  validatorData: [],
  setValidatorData: (validatorData: ValidatorData[]) => set({ validatorData }),
}));
