/**
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
define(['lodash', './statement'], function (_, Statement) {
    /**
     * Class to represent an Assignment statement.
     * @constructor
     */
    var AssignmentStatement = function (args) {
        Statement.call(this, 'AssignmentStatement');
        this._variableAccessor = _.get(args, 'accessor', 'var1');
    };

    AssignmentStatement.prototype = Object.create(Statement.prototype);
    AssignmentStatement.prototype.constructor = AssignmentStatement;

    /**
     * initialize AssignmentStatement from json object
     * @param {Object} jsonNode to initialize from
     */
    AssignmentStatement.prototype.initFromJson = function (jsonNode) {
        var self = this;

        _.each(jsonNode.children, function (childNode) {
            var child = self.getFactory().createFromJson(childNode);
            self.addChild(child);
            child.initFromJson(childNode);
        });
    };

    return AssignmentStatement;
});