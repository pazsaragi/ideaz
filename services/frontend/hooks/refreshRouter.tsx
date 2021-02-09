import { useCallback } from "react";
import { useRouter } from "next/router";

export default function useRouterRefresh() {
  const { asPath, replace } = useRouter();
  const refresh = useCallback(() => replace(asPath), [asPath]);

  return refresh;
}
