/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The connect.socjsc.com Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { type WorkerPayload } from "./workers/worker";

export class WorkerManager<Request extends object, Response> {
    private readonly worker: Worker;
    private seq = 0;
    private pendingDeferredMap = new Map<number, PromiseWithResolvers<Response>>();

    public constructor(worker: Worker) {
        this.worker = worker;
        this.worker.onmessage = this.onMessage;
    }

    private onMessage = (ev: MessageEvent<Response & WorkerPayload>): void => {
        const deferred = this.pendingDeferredMap.get(ev.data.seq);
        if (deferred) {
            this.pendingDeferredMap.delete(ev.data.seq);
            deferred.resolve(ev.data);
        }
    };

    public call(request: Request): Promise<Response> {
        const seq = this.seq++;
        const deferred = Promise.withResolvers<Response>();
        this.pendingDeferredMap.set(seq, deferred);
        this.worker.postMessage({ seq, ...request });
        return deferred.promise;
    }
}
