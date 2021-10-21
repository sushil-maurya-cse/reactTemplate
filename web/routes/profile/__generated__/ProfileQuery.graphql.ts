/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ProfileQueryVariables = {
    username: string;
};
export type ProfileQueryResponse = {
    readonly user: {
        readonly id: string;
        readonly name: string | null;
        readonly email: string | null;
        readonly username: string;
        readonly picture: {
            readonly url: string | null;
        };
    } | null;
};
export type ProfileQuery = {
    readonly response: ProfileQueryResponse;
    readonly variables: ProfileQueryVariables;
};



/*
query ProfileQuery(
  $username: String!
) {
  user(username: $username) {
    id
    name
    email
    username
    picture {
      url
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "username"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "username",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Picture",
        "kind": "LinkedField",
        "name": "picture",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "url",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfileQuery",
    "selections": (v1/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProfileQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e3b2a1988cd051db964da5cc33dc2965",
    "id": null,
    "metadata": {},
    "name": "ProfileQuery",
    "operationKind": "query",
    "text": "query ProfileQuery(\n  $username: String!\n) {\n  user(username: $username) {\n    id\n    name\n    email\n    username\n    picture {\n      url\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '277c1e57a67ebcf3f863ed6e07b54260';
export default node;
