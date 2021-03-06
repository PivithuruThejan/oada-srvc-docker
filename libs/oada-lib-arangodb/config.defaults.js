/* Copyright 2014 Open Ag Data Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = {
  //isProduction: false, // set to true and random database will be created for you
  arangodb: {
    connectionString: 'http://arangodb:8529',
    database: 'oada',
    collections: {
               users: { name: 'users',          indexes: [ 'username' ], defaults: './libs/exampledocs/users'      },
             clients: { name: 'clients',        indexes: [ 'clientId' ], defaults: './libs/exampledocs/clients'    },
      authorizations: { name: 'authorizations', indexes: [ 'token', { name: 'user', unique: false } ], defaults: './libs/exampledocs/authorizations' },
               codes: { name: 'codes',          indexes: [ 'code'     ], defaults: './libs/exampledocs/codes'      },
           resources: { name: 'resources',      indexes: [            ], defaults: './libs/exampledocs/resources'  },
          graphNodes: { name: 'graphNodes',     indexes: [            ], defaults: './libs/exampledocs/graphNodes' },
             changes: { name: 'changes',        indexes: [            ], defaults: './libs/exampledocs/changes'    },
               changeEdges: { name: 'changeEdges',          indexes: [ { name: 'name', unique: false } ], defaults: './libs/exampledocs/changeEdges',
                        edgeCollection: true },
               edges: { name: 'edges',          indexes: [ { name: 'name', unique: false } ], defaults: './libs/exampledocs/edges',
                        edgeCollection: true },
           putBodies: { name: 'putBodies',      indexes: [ ], defaults: './libs/exampledocs/putBodies',
                        createOptions: { isVolatile: false } },
    },
    retry: {
      deadlock: {
        retries: 10,
        delay: 50
      }
    },
    init: {
      // NOTE: passwordSalt HAS to match the one in auth
      passwordSalt: '$2a$10$l64QftVz6.7KR5BXNc29IO',
    }
  }
};
