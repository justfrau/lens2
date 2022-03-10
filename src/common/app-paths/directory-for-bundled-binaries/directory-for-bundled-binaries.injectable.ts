/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable, lifecycleEnum } from "@ogre-tools/injectable";
import { baseBinariesDir } from "../../vars";

const directoryForBundledBinariesInjectable = getInjectable({
  id: "directory-for-bundled-binaries",
  instantiate: () => baseBinariesDir.get(),
  lifecycle: lifecycleEnum.singleton,
});

export default directoryForBundledBinariesInjectable;