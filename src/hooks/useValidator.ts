import { getValidatorData } from "@/api/validator.api";
import { useValidatorStore } from "@/stores/validator.store";
import { ValidatorData } from "@/types/data.type";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useValidatorQuery = () => {
  const setValidatorData = useValidatorStore((state) => state.setValidatorData);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["validator-data"],
    queryFn: () => getValidatorData(),
  });

  useEffect(() => {
    if (data) {
      const validatorData: ValidatorData[] = data.map((validator) => ({
        rank: validator.rank,
        name: validator.moniker,
        icon: validator.avatar,
        votingPower: Number(validator.tokens),
        votingPowerPercent: validator.voting_power_percent,
        commission: Number(validator.commission),
        uptime: validator.uptime,
        status: validator.status,
        shares: validator.cummulative_share,
      }));

      setValidatorData(validatorData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const validatorQueryData = useValidatorStore((state) => ({
    validatorData: state.validatorData,
  }));

  return { validatorQueryData, isLoading, isError };
};
