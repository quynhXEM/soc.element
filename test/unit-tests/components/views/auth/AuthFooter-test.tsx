/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The connect.socjsc.com Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { render } from "jest-matrix-react";

import AuthFooter from "../../../../../src/components/views/auth/AuthFooter";
import { setupLanguageMock } from "../../../../setup/setupLanguage";

describe("<AuthFooter />", () => {
    beforeEach(() => {
        setupLanguageMock();
    });

    it("should match snapshot", () => {
        const { asFragment } = render(<AuthFooter />);
        expect(asFragment()).toMatchSnapshot();
    });
});
