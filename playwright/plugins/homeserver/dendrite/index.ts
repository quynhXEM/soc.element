/*
Copyright 2024 New Vector Ltd.
Copyright 2023 The connect.socjsc.com Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { type WorkerOptions } from "../../../services.ts";

export const isDendrite = ({ homeserverType }: WorkerOptions): boolean => {
    return homeserverType === "dendrite" || homeserverType === "pinecone";
};
