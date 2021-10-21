/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { graphql } from "relay-runtime";
import type { Route } from "../../core";
import type Profile from "./Profile";
import type { ProfileQueryResponse } from "./__generated__/ProfileQuery.graphql";

/**
 * User profile (e.g. https://example.com/@koistya)
 *
 * @see https://github.com/pillarjs/path-to-regexp
 */
export default {
  path: `/:username(\\w+)`,
  query: graphql`
    query ProfileQuery($username: String!) {
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
  `,
  component: () => import(/* webpackChunkName: "profile" */ "./Profile"),
  response: (data) => {
    console.log(data);
    if (!data.user) return;
    return {
      title: `${data.user.name} (@${data.user.username}) · Advisor.me`,
      props: data,
    };
  },
} as Route<typeof Profile, ProfileQueryResponse>;
