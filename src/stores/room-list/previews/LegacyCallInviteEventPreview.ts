/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The connect.socjsc.com Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { type MatrixEvent } from "matrix-js-sdk/src/matrix";

import { type IPreview } from "./IPreview";
import { type TagID } from "../models";
import { getSenderName, isSelf, shouldPrefixMessagesIn } from "./utils";
import { _t } from "../../../languageHandler";

export class LegacyCallInviteEventPreview implements IPreview {
    public getTextFor(event: MatrixEvent, tagId?: TagID): string {
        if (shouldPrefixMessagesIn(event.getRoomId()!, tagId)) {
            if (isSelf(event)) {
                return _t("event_preview|m.call.invite|you");
            } else {
                return _t("event_preview|m.call.invite|user", { senderName: getSenderName(event) });
            }
        } else {
            if (isSelf(event)) {
                return _t("event_preview|m.call.invite|dm_send");
            } else {
                return _t("event_preview|m.call.invite|dm_receive", { senderName: getSenderName(event) });
            }
        }
    }
}
