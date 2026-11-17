# SPDX-FileCopyrightText: 2022 SAP SE or an SAP affiliate company and CLA-assistant contributors
#
# SPDX-License-Identifier: Apache-2.0

FROM node:24-alpine@sha256:116b800c3754b440ee0aa3ed2f20f5bf3d99a554bfd9adeea09ea8017f6e85f5

EXPOSE 5000

RUN addgroup -S cla-assistant
RUN adduser -S -D -G cla-assistant cla-assistant

COPY . /cla-assistant
WORKDIR /cla-assistant

RUN npm ci && npm run build && npm prune --omit=dev

USER cla-assistant

CMD ["npm", "start"]
