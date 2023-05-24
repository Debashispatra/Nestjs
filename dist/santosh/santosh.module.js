"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SantoshModule = void 0;
const common_1 = require("@nestjs/common");
const santosh_service_1 = require("./santosh.service");
const santosh_controller_1 = require("./santosh.controller");
let SantoshModule = class SantoshModule {
};
SantoshModule = __decorate([
    (0, common_1.Module)({
        controllers: [santosh_controller_1.SantoshController],
        providers: [santosh_service_1.SantoshService]
    })
], SantoshModule);
exports.SantoshModule = SantoshModule;
//# sourceMappingURL=santosh.module.js.map