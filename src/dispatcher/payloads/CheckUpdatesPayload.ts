/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The connect.socjsc.com Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { type ActionPayload } from "../payloads";
import { type Action } from "../actions";
import { type UpdateStatus } from "../../BasePlatform";

export interface CheckUpdatesPayload extends ActionPayload, UpdateStatus {
    action: Action.CheckUpdates;
}
