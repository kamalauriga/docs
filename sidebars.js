/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  someSidebar: {
    Guides: ['deploysamiksha', 
             'deploysamwad', 
             'deploypariksha', 
             'GettingStarted'],
    Components: [
      'ComponentsOverview',
      {
        'Mobile Application': [
          'COMobileApplication',
          'FormManagementPackage',
          'AncillaryScreensModule',
          'AndroidProfileManagementModule',
          'CascadingSearchModule',
          'NotificationModule',
          'OfflineHandlingModule',
          'Grove'
        ],
      },
      {'App Metadata Management': ['COAppMetadata']},
      {'PDF Generator': ['COPDFGenerator']},
      {'Communication & Alerts': ['COCommunication']},
      {'Data Analytics': ['CODataAnalytics']},
      {'Application Logging': ['COApplicationLogging']},
    ],
    Products: [
      'SamikshaFuncSpecs',
      'SamwadFuncSpecs', 
      'ParikshaFuncSpecs',
      ],
  },
};