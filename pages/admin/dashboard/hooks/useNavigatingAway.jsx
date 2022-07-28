/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
// import { NavigationBlocker } from "./NavigationBlocker";
import {useRouter} from 'next/router';


export function useNavigatingAway(canShowDialogPrompt) {
  // const navigate = useNavigate();
  const router = useRouter()
  const currentLocation = router.pathname;
  const [showDialogPrompt, setShowDialogPrompt] = useState(false);
  const [wantToNavigateTo, setWantToNavigateTo] = useState(null);
  const [isNavigationConfirmed, setIsNavigationConfirmed] = useState(false);

  const handleNavigationBlocking = useCallback(
    (locationToNavigateTo) => {
      if (
        !isNavigationConfirmed &&
        locationToNavigateTo.location.pathname !== currentLocation.pathname
      ) {
        setShowDialogPrompt(true);
        setWantToNavigateTo(locationToNavigateTo);
        return false;
      }
      return true;
    },
    [isNavigationConfirmed]
  );

  const cancelNavigation = useCallback(() => {
    setIsNavigationConfirmed(false);
    setShowDialogPrompt(false);
  }, []);

  const confirmNavigation = useCallback(() => {
    // axios.post("http://localhost/newmobile/admin/php/refreshDeleteImages.php")
    //   .then((response) =>{
    //       console.log(response.data)
    // })
    setIsNavigationConfirmed(true);
    setShowDialogPrompt(false);
  }, []);

  useEffect(() => {
    if (isNavigationConfirmed && wantToNavigateTo) {
      navigate(wantToNavigateTo.location.pathname);
    }
  }, [isNavigationConfirmed, wantToNavigateTo]);

  // NavigationBlocker(handleNavigationBlocking, canShowDialogPrompt);

  return [showDialogPrompt, confirmNavigation, cancelNavigation];
}
