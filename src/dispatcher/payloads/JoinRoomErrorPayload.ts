/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The connect.socjsc.com Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { type MatrixError } from "matrix-js-sdk/src/matrix";

import { type ActionPayload } from "../payloads";
import { type Action } from "../actions";

export interface JoinRoomErrorPayload extends Pick<ActionPayload, "action"> {
    action: Action.JoinRoomError;

    roomId: string;
    err: MatrixError;

    canAskToJoin?: boolean;
}
