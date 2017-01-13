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
define(['lodash', './expression'], function (_, Expression) {

    /**
     * Constructor for FunctionInvocationExpression
     * @param {Object} args - Arguments to create the FunctionInvocationExpression
     * @constructor
     */
    var FunctionInvocationExpression = function (args) {
        Expression.call(this, 'FunctionInvocationExpression');
        this._functionName = _.get(args, 'functionName', 'newFunction');
    }

    FunctionInvocationExpression.prototype = Object.create(Expression.prototype);
    FunctionInvocationExpression.prototype.constructor = FunctionInvocationExpression;

    FunctionInvocationExpression.prototype.setFunctionName = function (functionName) {
        this._functionName = functionName;
    };

    FunctionInvocationExpression.prototype.getFunctionName = function () {
        return this._functionName;
    };

    /**
     * setting parameters from json
     * @param jsonNode
     */
    FunctionInvocationExpression.prototype.initFromJson = function (jsonNode) {
        this.setFunctionName(jsonNode.function_name);

        var self = this;
        _.each(jsonNode.children, function (childNode) {
            var child = self.getFactory().createFromJson(childNode);
            self.addChild(child);
            child.initFromJson(childNode);
        });
    };

    return FunctionInvocationExpression;
});