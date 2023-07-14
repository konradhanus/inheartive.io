import React, { useEffect, useState } from 'react';

import { Button } from '../../../atoms';
import { useMsal, useAccount } from '@azure/msal-react';

function LoginFormControl() {
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  console.log({ account });

  useEffect(() => {
    if (account) {
      instance
        .acquireTokenSilent({
          scopes: ['User.Read'],
          account: account,
        })
        .then((response) => {
          if (response) {
            // TODO? probably no need
            // callMsGraph(response.accessToken).then((result) => setApiData(result));
          }
        });
    }
  }, [account, instance]);

  return (
    <Button onPress={() => instance.loginPopup()} mt='4'>
      Login
    </Button>
  );
}

export { LoginFormControl };
